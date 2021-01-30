import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";


const Search = () => {

  const [term, setTerm] = useState("default");
  const [results, setResults] = useState([]);



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


    //FIXME: make a request on first loading without delay;
    // console.log(term && !results.length);
    // if (term && !results.length) {
    //   search();
    // } else {
    // }


    //make a request after stop typing delay (1000 ms)
    const typeTimerId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => { clearInterval(typeTimerId); };

  }, [term, results.length]);

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