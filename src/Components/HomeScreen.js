import React, { useState } from "react";
import "./CSS/HomeStyle.css";

function HomeScreen() {
  const [text, setText] = useState("");
  // const [noOfWords,setNoOfWords] = useState(0);
  // console.log(noOfWords)

  const toUpper = () => {
    let uppText = text.toUpperCase();
    setText(uppText);
  };

  const toLower = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };

  const onLiveTextChange = (event) => {
    console.log("onChange called");
    setText(event.target.value);
  };

  const toClear =()=>{
    setText("");
  }

  return (
    <div className="headerContainer">
      <div className="headerTitle  bg-primary">
        <h1>TEXT UTILS APP</h1>
      </div>

      <div className=" container mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={onLiveTextChange}
          placeholder="Enter text here..."
        ></textarea>

        <button className="btn btn-primary UppBtn" onClick={toUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary UppBtn" onClick={toLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary UppBtn" onClick={toClear}>
          Clear text
        </button>

      </div>

      <div className="container">
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
      </div>

    </div>
  );
}

export default HomeScreen;
