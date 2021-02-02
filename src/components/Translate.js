import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

//google translate key=> AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const Translate = () => {

  const [language, setLanguage] = useState(options[0]);
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            value={ inputText }
            onChange={ e => setInputText(e.target.value) }
          />
        </div>
      </div>
      <Dropdown
        options={ options }
        selected={ language }
        onSelectedChange={ setLanguage }
        label={ "Select a language" }
      />
      <br />
      <h3 className="ui header">Output</h3>
      <Convert text={ inputText } language={ language } />
    </div>
  );
};

export default Translate;