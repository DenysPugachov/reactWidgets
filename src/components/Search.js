import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";


const Search = () => {

  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  // console.log(results);

  const renderResults = results.map(item => {
    return (
      <div className="item"
        key={ item.pageid }>
        <div className="content">
          <div className="header">
            { item.title }
          </div>
          <span dangerouslySetInnerHTML={ { __html: item.snippet } }></span>
        </div>
      </div>
    );
  });


  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        }
      });

      setResults(data.query.search);
    };

    search();
  }, [term]);

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