interface Props {
  text: string;
  color?: string;
  bold?: boolean;
}

const PropertyAttribute = ({ text, color = 'text-gray-600', bold = false }: Props) => (
  <p className={`text-center text-sm my-1 ${color} ${bold ? 'font-bold text-base' : ''}`}>
    {text}
  </p>
);

export default PropertyAttribute;
