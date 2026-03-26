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
        }
      }
    }
    `
    );

    return data?.posts?.nodes || [];
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
          innerBlocks {
            name
            attributesJSON
          }
        }
      }
    }
    `,
        { slug }
    );

    return data?.post;
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

    return posts;
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
        }
      }
    }
    `,
        { search: searchQuery }
    );

    return data?.posts?.nodes || [];
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
        }
      }
    }
    `,
        { categorySlug }
    );

    return data?.posts?.nodes || [];
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
        }
      }
    }
    `,
        { tagSlug }
    );

    return data?.posts?.nodes || [];
}
