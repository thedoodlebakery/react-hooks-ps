import React, { useState, useEffect } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const random_boolean = Math.random() >= 0.5;
  const [ isLoading, setIsLoading ] = useState(random_boolean === true);

  // cannot call a hook from the inside of a conditional
  // if (random_boolean === true){
  //   const [ isLoading, setIsLoading ] = useState(true);
  // } else{
  //   const [ isLoading, setIsLoading ] = useState(false);
  // }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? <div>Loading...</div> : <div><input onChange = {(e) => {
    setInputText(e.target.value)
    setHistoryList([...historyList, e.target.value])
  }} 
  placeholder="Enter Some Text" />{inputText}
  <hr /><br />
    <ul>
      {historyList.map((history) => {
        return <li>{history}</li>
      })}
    </ul>
  </div>
};

export default InputElement;
