import React from 'react'
import { Link } from 'react-router-dom';

class ApiDoc extends React.Component {

  render(){
  return (
  <div className="api-doc">
    <div className="api-doc-nav">
      <Link to="/api/docs">
      <h3>Home</h3>
      </Link>
      <Link to="/api/docs">
      <h5>Getting Started</h5>
      </Link>
      <Link to="/api/docs">
      <h5>User Guide</h5>
      </Link>
      <Link to="/api/docs">
      <h5>Beginner's Tutorial</h5>
      </Link>
    </div>
    <div className="api-doc-intro">
      <div className="api-doc-intro api-doc-intro--header">
        <h1>Budget Basket API Guide</h1>
      </div>
      <p>Based on simple REST principles, our API endpoints return metadata in JSON format about “requested price” information directly from our product database. The API also provides access to user-related data such as wishlist items. </p>
      <div className="api-doc-intro api-doc-intro--header">
        <h2>Introduction</h2>
      </div>
      <p>This document is intended for developers who want to write applications that interact with Budget Basket. It explains basic concepts of Budget Basket and of the API itself. It also provides an overview of the different functions that the API supports.</p>
      <h3>Quick Start</h3>
      <ol>
        <li><p>Sign up for a Budget Basket Developers Account </p></li>
        <li><p>Request an API key and register your application.</p></li>
        <li><p>Start making API calls</p></li>
      </ol>
    </div>
  </div>
  )
  }

}

export default ApiDoc