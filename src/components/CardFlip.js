import React from "react";
import "../styles/_cards.scss";

const CardFlip = ({ image, title, link, color }) => {
  return (
    <div className="card__flip--section">
      <article className="card__flip">
        <div className="card__flip--flip">
          <div className="card__flip--flip-container">
            <div className="card__flip--front" style={{background: color}}>
                {/* <div className="card__flip--title">
                    {title}
                </div> */}
            </div>
            <div className="card__flip--back">
              <img src={image} alt="" className="card__flip--image" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardFlip;
