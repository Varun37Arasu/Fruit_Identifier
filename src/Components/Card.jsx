import React from "react";

const Card = (props) => {
  const data = props.answer;
  return (
    <>
      <div className="card1">
        <h2 className="Question1">{props.question}</h2>
        <p className="Answer1">{props.brief}</p>
        <ul className="list">
          {data.map((items, index) => {
            return (
              <>
                <li className="items">
                  <span className="subHeading"> {items.subHeading}</span>
                    {items.description}
                <p className="desc">
                </p>
                </li>
                
              </>
            );
          })}

          {console.log(data)}
        </ul>
      </div>
      {/* <h2 className="Question1">What it does?</h2>
        <p className="Answer1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          corrupti praesentium earum ipsum impedit nihil doloremque consequatur,
          quis, sapiente incidunt aliquam eaque molestiae ex Voluptas corrupti
          praesentium earum ipsum impedit nihil doloremque consequatur, quis,
          sapiente incidunt aliquam eaque molestiae ex inventore nulla sed
          voluptates reprehenderit facere!
        </p>
      </div> */}
    </>
  );
};

export default Card;
