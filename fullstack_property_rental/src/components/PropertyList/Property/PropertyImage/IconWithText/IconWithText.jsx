import "./IconWithText.css";

const IconWithText = ({ Icon, text }) => {
  return (
    <span  className="icon-with-text">
      <Icon size={14} />{" "}{text}
    </span>
  );
};

export default IconWithText;
