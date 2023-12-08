import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div>
                <Link to="/">Home</Link> <br />
                <Link to="/product">Products</Link>
            </div>
    </div>
  )
}

export default Home