import "./PropertyAttribute.css";

const PropertyAttribute = ({ text, color = "#444", bold }) => {
  const style = { color, fontWeight: bold ? "bold" : "normal" };

  return (
    <p
      className="property-attribute"
      style={style}
    >
      {text}
    </p>
  );
};

export default PropertyAttribute;

