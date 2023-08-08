import React from "react";
import BodyData from "../../data/BodyData.json";

function Body() {
  const BODYDATA = BodyData;

  return (
    <section>
      <h1>{BODYDATA[0].title}</h1>
      <p>{BODYDATA[0].bodyCopy}</p>
    </section>
  );
}

export default Body;
