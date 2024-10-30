const Input = ({ questions, index, setQuestions }) => {
  const handleChange = (e) => {
    let modifiedQuestions = [...questions];
    modifiedQuestions[index] = {
      ...modifiedQuestions[index],
      text: e.target.value,
    };
    setQuestions(modifiedQuestions);
  };

  return (
    <input
      type="text"
      placeholder="Question"
      onChange={handleChange}
      style={{ width: "300px", height: "35px",fontSize:"16px"}}
    />
  );
};
export default Input;
