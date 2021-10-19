import { NotFound } from "http-errors"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import BlogDetails from "./pages/BlogDetails"
import Create from "./pages/Create"
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/blogs/:id" component={BlogDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
