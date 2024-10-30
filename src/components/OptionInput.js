const OptionInput = ({ options, setOptions, index, type }) => {
  const handleChange = (e) => {
    let modifiedOptions = [...options];
    modifiedOptions[index] = e.target.value;
    setOptions(modifiedOptions);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "8px" }}>
      {type === "dropdown" ? (
        <p style={{margin:"0px"}}>{index + 1}.</p>
      ) : (
        <div
          style={{ border: "2px solid grey", height: "15px", width: "15px" }}
        />
      )}
      <input
        type="text"
        style={{ marginLeft: "8px", height: "30px", fontSize: "14px" }}
        onChange={handleChange}
        value={options[index]}
      />
    </div>
  );
};
export default OptionInput;
