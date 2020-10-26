import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import  { MARKDAWN_SCHEMA } from '../constants/option'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            type
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const blogs = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === MARKDAWN_SCHEMA.BLOG)

    return (
        <Layout>
            <h1 className={blogStyles.blogTitle}>Blogs</h1>
            <p>Some of the blogs I've written.</p>
            <ol className={blogStyles.posts}>
                {blogs.map(blog => {
                    return (
                        <li className={blogStyles.post} key={blog.node.fields.slug}>
                            <Link to={blog.node.fields.slug}>
                                <h2>{blog.node.frontmatter.title}</h2>
                                <p>{blog.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;