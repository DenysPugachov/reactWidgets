import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();


  useEffect(() => {

    const onBodyClick = (e) => {
      //click was on Dropdown?
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      //close dropdown
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => { document.body.removeEventListener("click", onBodyClick); };
  });


  const renderedOptions = options.map((option) => {
    //do not display selected option on chosen list
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={ option.value }
        onClick={ () => { onSelectedChange(option); } }
      >
        { option.label }
      </div>
    );
  });


  return (
    <div ref={ ref } className="ui form">
      <div className="field">
        <label className="label">Selected Color</label>
        <div
          className={ `ui selection dropdown ${open ? "visible active" : ""}` }
          onClick={ () => { setOpen(!open); } }
        >
          <i className="dropdown icon"></i>
          <div className="text">{ selected.label }</div>
          <div className={ `menu ${open ? "visible transition" : ""}` }>
            { renderedOptions }
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dropdown;