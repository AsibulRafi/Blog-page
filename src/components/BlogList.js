import React from "react"
import { Link } from "react-router-dom"

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        const { id, title, author } = blog
        return (
          <div className="blog-preview" key={id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{title}</h2>
              <p>Wriiten By {author}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BlogList
