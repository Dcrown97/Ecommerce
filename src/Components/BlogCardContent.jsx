import React from "react";

function BlogCardContent({ blogImg }) {
  return (
    <div>
      <img className="blog-img" src={`.././images/${blogImg}`} alt="" />
      <div className="row mt-4">
        <div className="col-lg-3 ">
          <div className="row">
            <div className="col-lg-2">
              <img src=".././images/pen.png" alt="" />
            </div>
            <div className="col-lg-10 under-blog1">Surf Auxion</div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="row">
            <div className="col-lg-2">
              <img src=".././images/calendar.png" alt="" />
            </div>
            <div className="col-lg-10 under-blog2">Aug 09 2020</div>
          </div>
        </div>

        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
      </div>
      <div className="mt-4">
        <h3 className="blog-title">
          Mauris at orci non vulputate diam tincidunt nec.
        </h3>
      </div>
      <div className="mt-4">
        <p className="blog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
          malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
          purus, cursus vulputate id id dictum at.
        </p>
      </div>
      <div>
        <p className="blog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
          est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
          quam rhoncus. Velit in arcu platea donec vitae ante posuere
          malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Velit
        </p>
      </div>
      <div>
        <p className="blog-content">
          {" "}
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
          toamk risusu”
        </p>
      </div>

      <div className="mt-5 blog-video-div">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
          toamk risusu”
        </p>
      </div>
    </div>
  );
}

export default BlogCardContent;
