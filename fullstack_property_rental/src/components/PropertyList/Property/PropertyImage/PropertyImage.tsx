import { ReactNode } from 'react';

interface Props {
  image: string;
  children: ReactNode;
}

const PropertyImage = ({ image, children }: Props) => (
  <div
    className="relative h-48 bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    {children}
  </div>
);

export default PropertyImage;
