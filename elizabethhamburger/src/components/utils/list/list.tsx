import React from "react";

function List(props: any) {
  const { classes, items } = props;

  return (
    <ul className={classes}>
      {items.map((item: any, index: number) => (
        <li key={index}>
          {item}
        </li>
      ))}

    </ul>
  );
}

export default List;
