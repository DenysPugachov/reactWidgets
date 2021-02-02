import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {

  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  //change debounceTerm only after timeout was expired(user did not type anything)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => clearTimeout(timerId);

  }, [text]);


  //make a request only on debounceTerm (or language) was changed(user did not type anything)
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await
        axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
          params: {
            q: debouncedText,
            target: language.value,
            key: " AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          }
        });
      setTranslatedText(data.data.translations[0].translatedText);
    };

    doTranslation();

  }, [debouncedText, language]);

  return (
    <h1 className="ui header">
      {translatedText }
    </h1>
  );
};

export default Convert;