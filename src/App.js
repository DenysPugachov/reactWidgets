import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";


// const items = [
//   {
//     title: "What is MongoDB?",
//     content: "MongoDB is a document-oriented database which stores data in JSON-like documents with dynamic schema. It means you can store your records without worrying about the data structure such as the number of fields or types of fields to store values."
//   },
//   {
//     title: "What is Express js?",
//     content: "Express. js is a Node js web application server framework, which is specifically designed for building single-page, multi-page, and hybrid web applications. It has become the standard server framework for node."
//   },
//   {
//     title: "What is React?",
//     content: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications"
//   },
//   {
//     title: "What is Redux",
//     content: "Redux is used mostly for application state management. To summarize it, Redux maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly."
//   },
//   {
//     title: "What is Node js",
//     content: "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."
//   },
// ];


const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The shadow is Blue",
    value: "blue",
  },
];

const App = () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={ items } /> */ }
      {/* <Search /> */ }
      <button
        onClick={ () => { setShowDropdown(!showDropdown); } }>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          options={ options }
          selected={ selected }
          onSelectedChange={ setSelected }
        />
        : null
      }
    </div>
  );
};

export default App;