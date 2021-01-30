import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";


const Search = () => {

  const [term, setTerm] = useState("default");
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);

  //change debounceTerm only after timeout was expired(user did not type anything)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);

    return () => clearTimeout(timerId);

  }, [term]);

  //make a request only on debounceTerm was changed(user did not type anything)
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceTerm,
        }
      });
      setResults(data.query.search);
    };

    if (debounceTerm) {
      search();
    }

  }, [debounceTerm]);


  const renderResults = results.map(item => {
    return (
      <div className="item"
        key={ item.pageid }
      >
        <div className="right floated content">
          <a className="ui button"
            href={ `https:\\en.wikipedia.org?curid=${item.pageid}` }
          >Go</a>
        </div>
        <div className="content">
          <div className="header">
            { item.title }
          </div>
          <span dangerouslySetInnerHTML={ { __html: item.snippet } }></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input"
            value={ term }
            onChange={ e => setTerm(e.target.value) } />
        </div>
      </div>
      <div className="ui celled list">{ renderResults }</div>
    </div>
  );
};

export default Search;