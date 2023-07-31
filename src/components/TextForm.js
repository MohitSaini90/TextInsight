import React, { useState } from "react";
//import Highlighter from "react-highlight-words";
export default function TextForm(props) {
  //Where ever I use {text} it will be replaced with "Enter your text"
  //setText("Enter your text brother");
  //Only this way we can update the value of text or say change the state

  //Functions
  const handle_U_click = (event) => {
    event.preventDefault(); //OtherWise form will be submitted due to default action and page will refresh
    var newText = text.toUpperCase();
    setText(newText);
  };
  const handle_L_click = (event) => {
    event.preventDefault(); //OtherWise form will be submitted due to default action and page will refresh
    var newText = text.toLowerCase();
    setText(newText);
  };
  const handle_clear = (event) => {
    event.preventDefault(); //OtherWise form will be submitted due to default action and page will refresh
    var newText = "";
    setText(newText);
  };
  const handle_copyText = () => {
    event.preventDefault();
    var selectText = document.querySelector("#mybox");
    selectText.select();
    navigator.clipboard.writeText(selectText.value);
  };
  const handle_formatText = (event) => {
    event.preventDefault();
    var input = text;
    input = input.replace(/\s+/g, " ");
    // Add a full stop at the end if it doesn't exist
    if (input.trim().slice(-1) !== ".") {
      input += ".";
    }
    // Capitalize the first letter after a full stop
    input = input.replace(/\. *([a-z])/g, function (match, letter) {
      return ". " + letter.toUpperCase();
    });
    // Remove extra full stops
    input = input.replace(/\.+/g, ".");
    // Remove extra commas
    input = input.replace(/,+/g, ",");
    setText(input);
  };
  const speak = (event) => {
    event.preventDefault();
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };
  //Find and replace
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");
  const handlefindChange = (event) => {
    event.preventDefault();
    findWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
    event.preventDefault();
    console.log(replaceWord(event.target.value));
  };
  const handleReplaceClick = (event) => {
    event.preventDefault();
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
  };
  //Find and replace ends
  const handle_onChange = (event) => {
    //This function will let me write inside text area

    setText(event.target.value);
    console.log("OnChange Handled");
  };

  //Functions-end

  const [text, setText] = useState("Enter your text");

  return (
    <div
      className="main-div"
      style={{
        color: props.darkMode === "light" ? "black" : "white",
      }}
    >
      <form>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handle_onChange}
          ></textarea>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary my-2" onClick={handle_U_click}>
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handle_L_click}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handle_clear}>
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handle_copyText}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handle_formatText}
          >
            Format Text
          </button>
          <button
            type="submit"
            onClick={speak}
            className="btn btn-primary mx-2 my-2"
            id="toggleSpeak"
          >
            Speak
          </button>
        </div>
      </form>
      <form>
        <input
          value={fWord}
          onChange={handlefindChange}
          placeholder="Find text"
        ></input>
        <input
          value={rWord}
          onChange={handleReplaceChange}
          placeholder="Replace text"
          className="mx-2"
        ></input>
        <button
          type="submit"
          onClick={handleReplaceClick}
          className="btn btn-primary mx-2 my-2"
        >
          Find&Replace
        </button>
      </form>
      <div>
        <h2>Summary</h2>
        <div>
          <div className="panel panel-success">
            <div className="panel-heading">Characters</div>
            <div className="panel-body">{text.length}</div>
          </div>
        </div>
        <div>
          <div className="panel panel-success">
            <div className="panel-heading">Words</div>
            <div className="panel-body">{text.split(" ").length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
