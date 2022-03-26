import React from "react";
import "./Answers.css";

const Answers = (props) => {
  const { question, answer } = props.answers;
  return (
    <div className="answers">
      <p>Question:{question} </p>
      <p>Answer: {answer} </p>
    </div>
  );
};

export default Answers;
