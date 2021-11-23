import React from "react";

const Content = () => {
  return (
    <div className="contentContainer">
      <div className="imageContainer">
        <img src="./image/img1.jpg" alt="img-content" />
      </div>

      <div className="rightContainer">
        <div className="textContainer">
          <h4>LOREM IPSUM</h4>
          <h2>Lorem Ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            perferendis delectus fugiat, quos error quasi cumque. Iusto, quam
            excepturi.
          </p>
        </div>
        <div className="iconsContainer">
          <i class="fab fa-twitter "></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};

export default Content;
