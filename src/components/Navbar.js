import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export default class Navbar extends Component {
  // here we'll get news for particualr category
  getNews=(value)=>{

  }


  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                  {/* various components of newsMonkey  */}
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/entertainment" >Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/technology">Technology</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
  }
}
