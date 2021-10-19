import React, { useState } from "react"
import { useHistory } from "react-router"

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")
  const history = useHistory() // It is a library which helps you to send back or go to any
  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    fetch("http://localhost:8000/blogs", {
      method: "POST", // It is used for Posting the data to the server
      headers: { "Content-Type": "application/json" }, //It tells the server what kind of content it is
      body: JSON.stringify(blog), //Actual data that is stringify in json sending with this request
    }).then(() => {
      history.push("/")
      // Its Push selected page that is define
    })
  }

  return (
    <div className="create">
      <h2>ADD A NEW BLOG</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="asik">Asik</option>
          <option value="rafi">Rafi</option>
          <option value="efti">Efti</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create
