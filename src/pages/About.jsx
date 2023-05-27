import React from "react";
import Heading from "../Components/Heading";
import Card from "../Components/Card";
import {faq} from "../Components/faq";
import { data } from "../Components/data";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <Heading title="What our project does?" />

        {console.log(data[0])}
        {faq.map((data, index) => {
          return <Card question={data.question} brief={data.brief} answer={data.answer} />;
        })}

        {
          // data.map((data,index)=>{
          //     console.log(data);
          //     return(<p>{data.eventName}</p>)
          //     (<>
          //     </>);
          // })
        }
      </div>
    </>
  );
};

export default About;
