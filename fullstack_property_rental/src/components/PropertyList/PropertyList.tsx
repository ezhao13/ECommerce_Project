import { Property } from '../../types';
import PropertyCard from './Property/Property';

interface Props {
  properties: Property[];
}

const PropertyList = ({ properties }: Props) => (
  <div className="flex flex-wrap gap-6 justify-center py-4">
    {properties.map((property, index) => (
      <PropertyCard key={property.id} {...property} index={index} />
    ))}
  </div>
);

export default PropertyList;
