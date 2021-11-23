import React from "react";

const FeaturedWriters = () => {
  return (
    <div className="featuredWritersContainer">
      <h2>Featured Writers</h2>
      <div className="writersContainer">
        {[
          { image: "p1.jpg", name: "E R Braithwaite" },
          { image: "p2.jpg", name: "Andrea Levy" },
          { image: "p3.jpg", name: "Stephen King" },
          { image: "p4.jpg", name: "Gorge Amando" },
          { image: "p5.jpg", name: "Gayle Forman" },
          { image: "p6.jpg", name: "Shasi Tharoor" },
          { image: "p7.jpg", name: "JJ.K. Rowling" },
          { image: "p8.jpg", name: "John Green" },
        ].map((value) => (
          <div className="writer" key={value.name}>
            <img src={`./image/${value.image}`} alt={value.name} />
            <p>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWriters;
