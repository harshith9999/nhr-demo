const AddOptions = ({ options, setOptions, type }) => {
  const addOption = () => {
    setOptions((prev) => [...prev, `Option ${prev.length + 1}`]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "8px" }}>
      {type === "dropdown" ? (
        <p>{options.length + 1}.</p>
      ) : (
        <div
          style={{ border: "2px solid grey", height: "15px", width: "15px" }}
        />
      )}
      <button
        style={{
          border: "none",
          background: "none",
          padding: "0px",
          marginLeft: "8px",
          fontSize: "14px",
          cursor: "pointer",
        }}
        onClick={addOption}
      >
        Add Option
      </button>
    </div>
  );
};
export default AddOptions;
