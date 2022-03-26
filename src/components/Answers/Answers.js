import React from "react";
import "./Answers.css";

const Answers = (props) => {
  const { question, answer } = props.answers;
  return (
    <div className="question-set">
      <p className="questions">{question} </p>
      <p className="answers">{answer} </p>
    </div>
  );
};

export default Answers;
