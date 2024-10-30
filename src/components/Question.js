import { useEffect, useState } from "react";
import AddOptions from "./AddOptions";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Options from "./Options";

const Question = ({ questions, index, setQuestions }) => {
  const [options, setOptions] = useState(questions[index].options);

  useEffect(() => {
    let modifiedQuestions = questions;
    modifiedQuestions[index].options = options;
    setQuestions(modifiedQuestions);
  }, [options]);

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "20px",
        background: "#fff",
        padding: "30px",
        borderRadius: " 5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
        }}
      >
        <Input
          questions={questions}
          index={index}
          setQuestions={setQuestions}
        />
        <Options
          options={options}
          setOptions={setOptions}
          index={index}
          type={questions[index].type}
        />
        <AddOptions
          setOptions={setOptions}
          options={options}
          type={questions[index].type}
        />
      </div>
      <Dropdown
        questions={questions}
        index={index}
        setQuestions={setQuestions}
      />
    </div>
  );
};
export default Question;
