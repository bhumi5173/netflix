import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
  <>

  <h2 className="heading_style">List of top 5 netflix series in 2020</h2>
    {Sdata.map((val)=>{
    return(
                <Card
                      imgsrc={val.imgsrc}
                      title={val.title}
                      sname={val.sname}
                      link={val.link}
                />
          )
    }

    )};
</>,
document.getElementById("root")
);