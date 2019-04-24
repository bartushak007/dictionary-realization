import React from "react";
import ReactDOM from "react-dom";
import useDictionary from "./useDictionary";
import useDictionaryForm from "./useDictionaryForm";

import "./styles.css";

function App() {
  const {
    insert,
    retrieve,
    keyExist,
    valueExist,
    values,
    remove
  } = useDictionary();

  const {
    handleChange,
    formValues: { key, value }
  } = useDictionaryForm();

  const onSubmit = event => {
    event.preventDefault();

    insert(key, value);
  };

  const DictionaryList = () => {
    return (
      <div>
        {Object.entries(values()).map(([key, value], i) => (
          <div key={i}>
            <span>{key}</span>
            <span>{value}</span>
            <button onClick={remove.bind(null, key)}>x</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} value={key} name="key" type="text" />{" "}
        <input onChange={handleChange} value={value} name="value" type="text" />
        <input type="submit" />
      </form>
      <button onClick={() => console.log(keyExist(key))}>keyExist</button>
      <button onClick={() => console.log(valueExist(key))}>valueExist</button>
      <button onClick={() => console.log(retrieve(key))}>retrieve</button>
      <DictionaryList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
