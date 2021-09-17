import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/base-styles/_z-index.scss"

export default ({ data }) => {
  let posts = data.allWpPost.edges
  return (
    <Layout>
      <SEO title="home" />
      <h4>Posts</h4>
      {posts.slice(posts.length - 1, posts.length).map(({ node, index }) => {
        console.log(node)
        return (
          <div key={index}>
            <p>{node.title}</p>
            <img src={node.featuredImage.node.mediaItemUrl} />
            <div dangerouslySetInnerHTML={{ __html: node.content }} />
          </div>
        )
      })}
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWpPost {
      edges {
        node {
          id
          content
          title
          featuredImage {
            node {
              id
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`
