import React, { useEffect, useState } from "react";
import Answers from "../Answers/Answers";

const Question = () => {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    fetch("question.json")
      .then((res) => res.json())
      .then((data) => setAnswers(data));
  }, []);
  //   console.log(answers);
  return (
    <div>
      {answers.map((answer) => (
        <Answers key={answer.id} answers={answer} />
      ))}
    </div>
  );
};

export default Question;
