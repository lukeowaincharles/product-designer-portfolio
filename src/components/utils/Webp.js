import React from "react";

function Webp(props) {
  const { jpgsrc, webpsrc, imagealt } = props;

  return (
    <picture>
      <source srcSet={webpsrc} type="image/webp" />
      <img src={jpgsrc} alt={imagealt} width="652" height="1024" />
    </picture>
  )
}

export default Webp;
