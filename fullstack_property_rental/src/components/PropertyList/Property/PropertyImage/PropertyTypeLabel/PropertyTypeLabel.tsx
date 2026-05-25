interface Props {
  type: string;
}

const PropertyTypeLabel = ({ type }: Props) => (
  <div className="absolute top-2 right-2 bg-accent/90 text-white text-xs font-bold uppercase px-2 py-1 rounded shadow">
    {type}
  </div>
);

export default PropertyTypeLabel;
