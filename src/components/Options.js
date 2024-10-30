import OptionInput from "./OptionInput";

const Options = ({ options, setOptions,type }) => {
  return options.map((option, i) => (
    <OptionInput options={options} setOptions={setOptions} key={i} index={i} type={type}/>
  ));
};
export default Options;
