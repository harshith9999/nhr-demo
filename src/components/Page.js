import { useState } from "react";
import Question from "./Question";

const Page = () => {
  const data = { text: "", type: "", options: ["Option 1"] };
  const [questions, setQuestions] = useState([data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        padding: "10px",
      }}
    >
      {questions.map((item, index) => (
        <Question
          questions={questions}
          setQuestions={setQuestions}
          index={index}
          key={index}
        />
      ))}
      <button
        style={{ height: "35px" }}
        onClick={() => setQuestions((prev) => [...prev, data])}
      >
        Add
      </button>
    </div>
  );
};
export default Page;
