const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

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
