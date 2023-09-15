import { gql } from 'graphql-request';
import { graphcmsClient } from "@/app/graphqlClient"

export async function getLatestPosts() {
  const LatestPosts = gql`
    query latestPosts {
    posts(orderBy: createdAt_DESC, first: 3) {
    slug
    title
    description
    readTime
    date
    blogImg {
      url
    }
  }
}
`
  return await graphcmsClient.request(LatestPosts)
}

export async function fetchSinglePost(slug) {
  const query = `
  query MyQuery($slug:String) {
    post(
      where: {slug: $slug}
    ) {
      author {
        id
        name
        profileImg {
          url
        }
      }
      blogImg {
        url
      }
      description
      readTime
      title
      markdown {
        html
        json
      }
      date
    }
  }
  `;
  const variables = {
    slug
  }

   return await graphcmsClient.request(query , variables);
}


export async function fetchSearchPosts(cursor, pageSize, searchTerm) {
  const query = `
    query MyQuery($cursor: String, $pageSize: Int, $searchTerm: String) {
      postsConnection(
        before: $cursor
        last: $pageSize
        where: { title_contains: $searchTerm }
      ) {
        edges {
          cursor
          node {
            blogImg {
              url
            }
            date
            description
            readTime
            title
            slug
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          pageSize
          startCursor
        }
      }
    }
  `;
  const data = await graphcmsClient.request(query, {
    cursor,
    pageSize,
    searchTerm
  })
  return data.postsConnection;
}


export async function getPosts() {
  const Posts = gql`
 query MyQuery($skip: Int!) {
  postsConnection(skip: $skip) {
    edges {
      node {
        blogImg {
          url
        }
        date
        description
        readTime
        title
        slug
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
      endCursor
    }
  }
}
  `
  return await graphcmsClient.request(Posts, {
    skip: 0
  })
}


export async function fetchPosts(cursor, pageSize) {
  const query = `
    query MyQuery($cursor: String, $pageSize: Int) {
      postsConnection(after: $cursor, first: $pageSize) {
        edges {
          cursor
           node {
        blogImg {
          url
        }
        date
        description
        readTime
        title
        slug
      }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          pageSize
          startCursor
        }
      }
    }
  `;

  const variables = {
    cursor,
    pageSize,
  };

  const data = await graphcmsClient.request(query, variables);

  return data.postsConnection;
}

export async function fetchPreviousPosts(cursor, pageSize) {
  const query = `
    query MyQuery($cursor: String, $pageSize: Int) {
      postsConnection(before: $cursor, last: $pageSize) {
        edges {
          cursor
           node {
        blogImg {
          url
        }
        date
        description
        readTime
        title
        slug
      }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          pageSize
          startCursor
        }
      }
    }
  `;

  const variables = {
    cursor,
    pageSize,
  };

  const data = await graphcmsClient.request(query, variables);

  return data.postsConnection;
}

export async function getCategories() {
  const query = gql`
     query  {
      categories {
      catergoryName
      slug
      id
    }
  }
  
  `
  return await graphcmsClient.request(query);

}
