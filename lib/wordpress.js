const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "https://blog.coreheed.hu/graphql";

async function fetchAPI(query, variables = {}) {
    const headers = { 'Content-Type': 'application/json' };

    const res = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables,
        }),
        next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    const json = await res.json();

    if (json.errors) {
        console.error('GraphQL errors:', json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

export function extractYouTubeId(urlOrText) {
    if (!urlOrText || typeof urlOrText !== 'string') return null;
    const patterns = [
        /(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})/i,
        /(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/(?:embed|v|shorts)\/([a-zA-Z0-9_-]{11})/i,
        /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/i,
        /youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{11})/i
    ];
    for (const pattern of patterns) {
        const match = urlOrText.match(pattern);
        if (match && match[1]) return match[1];
    }
    return null;
}

export function getPostYouTubeId(post) {
    if (!post) return null;

    if (post.blocks && Array.isArray(post.blocks)) {
        for (const block of post.blocks) {
            if (block.attributesJSON) {
                try {
                    const attrs = JSON.parse(block.attributesJSON);
                    const url = attrs.url || attrs.src || attrs.content;
                    const id = extractYouTubeId(url);
                    if (id) return id;
                } catch (e) {}
            }
            if (block.saveContent) {
                const id = extractYouTubeId(block.saveContent);
                if (id) return id;
            }
            if (block.attributesJSON) {
                const id = extractYouTubeId(block.attributesJSON);
                if (id) return id;
            }
        }
    }

    if (post.content) {
        const id = extractYouTubeId(post.content);
        if (id) return id;
    }

    if (post.excerpt) {
        const id = extractYouTubeId(post.excerpt);
        if (id) return id;
    }

    return null;
}

export function getPostAudioUrl(post) {
    if (!post) return null;

    if (post.blocks && Array.isArray(post.blocks)) {
        for (const block of post.blocks) {
            if (block.name === 'core/audio') {
                if (block.attributesJSON) {
                    try {
                        const attrs = JSON.parse(block.attributesJSON);
                        if (attrs.src) return attrs.src;
                    } catch (e) {}
                }
                if (block.saveContent) {
                    const match = block.saveContent.match(/src=["']([^"']+\.(?:mp3|wav|ogg|m4a|aac)[^"']*)["']/i);
                    if (match && match[1]) return match[1];
                }
            }
        }
    }

    if (post.content) {
        const audioMatch = post.content.match(/<audio[^>]+src=["']([^"']+)["']/i) ||
                           post.content.match(/src=["']([^"']+\.(?:mp3|wav|ogg|m4a|aac)[^"']*)["']/i);
        if (audioMatch && audioMatch[1]) return audioMatch[1];
    }

    return null;
}

export function enrichPost(post) {
    if (!post) return null;
    const youtubeId = getPostYouTubeId(post);
    if (youtubeId) {
        post.youtubeId = youtubeId;
        post.isVideoPost = true;
        if (!post.featuredImage?.node?.sourceUrl) {
            post.featuredImage = {
                node: {
                    sourceUrl: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
                    maxresUrl: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
                    altText: post.title || 'YouTube videó előnézet',
                    isVideoThumbnail: true,
                }
            };
        }
    }

    const audioUrl = getPostAudioUrl(post);
    if (audioUrl) {
        post.audioUrl = audioUrl;
        post.isAudioPost = true;
    }

    return post;
}

export async function getAllPosts() {
    const data = await fetchAPI(
        `
    query AllPosts {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          content
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          blocks {
            name
            attributesJSON
            saveContent
          }
        }
      }
    }
    `
    );

    const posts = data?.posts?.nodes || [];
    return posts.map(enrichPost);
}

export async function getPostBySlug(slug) {
    const data = await fetchAPI(
        `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
        content
        excerpt
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        blocks {
          name
          attributesJSON
          saveContent
          innerBlocks {
            name
            attributesJSON
            saveContent
          }
        }
      }
    }
    `,
        { slug }
    );

    return enrichPost(data?.post);
}

export async function getRecentPosts(limit = 5, excludeSlug = null) {
    const data = await fetchAPI(
        `
    query RecentPosts($first: Int!) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          content
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          blocks {
            name
            attributesJSON
            saveContent
          }
        }
      }
    }
    `,
        { first: excludeSlug ? limit + 1 : limit }
    );

    let posts = data?.posts?.nodes || [];

    // Filter out the current post if excludeSlug is provided
    if (excludeSlug) {
        posts = posts.filter(post => post.slug !== excludeSlug).slice(0, limit);
    }

    return posts.map(enrichPost);
}

export async function searchPosts(searchQuery) {
    const data = await fetchAPI(
        `
    query SearchPosts($search: String!) {
      posts(first: 100, where: { search: $search, orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          content
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          blocks {
            name
            attributesJSON
            saveContent
          }
        }
      }
    }
    `,
        { search: searchQuery }
    );

    const posts = data?.posts?.nodes || [];
    return posts.map(enrichPost);
}

export async function getAllCategories() {
    const data = await fetchAPI(
        `
    query AllCategories {
      categories(first: 100, where: { hideEmpty: true }) {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
    `
    );

    const categories = data?.categories?.nodes || [];
    
    // Filter out default uncategorized categories
    return categories.filter(category => 
        category.slug !== 'uncategorized' && 
        category.slug !== 'egyeb'
    );
}

export async function getAllTags() {
    const data = await fetchAPI(
        `
    query AllTags {
      tags(first: 100, where: { hideEmpty: true }) {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
    `
    );

    return data?.tags?.nodes || [];
}

export async function getPostsByCategory(categorySlug) {
    const data = await fetchAPI(
        `
    query PostsByCategory($categorySlug: String!) {
      posts(first: 100, where: { categoryName: $categorySlug, orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          content
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          blocks {
            name
            attributesJSON
            saveContent
          }
        }
      }
    }
    `,
        { categorySlug }
    );

    const posts = data?.posts?.nodes || [];
    return posts.map(enrichPost);
}

export async function getPostsByTag(tagSlug) {
    const data = await fetchAPI(
        `
    query PostsByTag($tagSlug: String!) {
      posts(first: 100, where: { tag: $tagSlug, orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          content
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          blocks {
            name
            attributesJSON
            saveContent
          }
        }
      }
    }
    `,
        { tagSlug }
    );

    const posts = data?.posts?.nodes || [];
    return posts.map(enrichPost);
}

