import React from "react";

function BlogCard({ blogImg, image, updated_at, title, author, content}) {
  return (
    <div>
      <img className="blog-img" src={`http://127.0.0.1:8000/${image}`} alt="" />
      <div className="row mt-4">
        <div className="col-lg-3 ">
          <div className="row">
            <div className="col-lg-2">
              <img src=".././images/pen.png" alt="" />
            </div>
            <div className="col-lg-10 under-blog1">{author}</div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="row">
            <div className="col-lg-2">
              <img src=".././images/calendar.png" alt="" />
            </div>
            <div className="col-lg-10 under-blog2">{updated_at}</div>
          </div>
        </div>

        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
      </div>
      <div className="mt-4">
        <h3 className="blog-title">
          {title}
        </h3>
      </div>
      <div className="mt-4">
        <p className="blog-content">
          {content}
        </p>
      </div>
      <div>
        <a href="" style={{ textDecoration: "none" }}>
          <h4 className="read-more">Read More</h4>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
