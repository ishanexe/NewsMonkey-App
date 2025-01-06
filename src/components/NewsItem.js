import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let {title,desc,imgUrl,fullNews,author,publishedAt}=this.props;    // using props in class based component
    return (
      <div className="card mb-4" style={{ width: "18rem" }}>
        <img 
           src= {imgUrl}
          className="card-img-top" 
          alt="Breaking News" 
        />
        <div className="card-body">
          {/* props based title and description  */}
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {desc}...
          </p>
          <a href={fullNews}  className="btn btn-primary btn-sm">
            Read More
          </a>
          <div className="card-footer my-3">
            <small className="text-muted">By {!author?"unknown":author} on {new Date(publishedAt).toGMTString()}</small>
        </div>
          {/* <p class="card-text"><small class="text-muted"></small></p> */}
        </div>
      </div>
    );
  }
}
