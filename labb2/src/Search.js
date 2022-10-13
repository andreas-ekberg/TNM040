import React, { useState } from "react";


function Searchbar(props) {
  const [text, setText] = useState("");

  function changeInput(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Search Country</h1>
      <input type="text" placeholder="Type here..." onChange={changeInput} />
    </div>
  );
}

export default Searchbar;
