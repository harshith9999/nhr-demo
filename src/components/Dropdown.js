const Dropdown = ({ questions, index, setQuestions }) => {
    
  const handleChange = (e) => {
    let modifiedQuestions = [...questions];
    modifiedQuestions[index] = {
      ...modifiedQuestions[index],
      type: e.target.value,
    };
    setQuestions(modifiedQuestions);
  };

  return (
    <select onChange={handleChange} style={{height:"35px", margin:"0px 10px"}}>
      <option value="multipleChoice">Multiple Choice</option>
      <option value="dropdown">Dropdown</option>
    </select>
  );
};
export default Dropdown;
