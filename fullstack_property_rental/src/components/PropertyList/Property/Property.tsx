import { Bed, Bath, Maximize } from 'lucide-react';
import PropertyImage from './PropertyImage/PropertyImage';
import PropertyTypeLabel from './PropertyImage/PropertyTypeLabel/PropertyTypeLabel';
import PropertyBanner from './PropertyImage/PropertyBanner/PropertyBanner';
import IconWithText from './PropertyImage/IconWithText/IconWithText';
import PropertyAttribute from './PropertyAttribute/PropertyAttribute';
import { Property as PropertyType } from '../../../types';

interface Props extends PropertyType {
  index: number;
}

const Property = ({ image, bedrooms, bathrooms, address, rent, surface, available, date, type, index }: Props) => (
  <div
    className={`w-72 border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up cursor-pointer ${
      !available ? 'opacity-60' : ''
    }`}
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <PropertyImage image={image}>
      <PropertyTypeLabel type={type} />
      {!available && <PropertyBanner />}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-3 bg-black/50 py-2 text-white text-xs">
        <IconWithText Icon={Bed} text={bedrooms} />
        <span className="text-gray-400">|</span>
        <IconWithText Icon={Bath} text={bathrooms} />
        <span className="text-gray-400">|</span>
        <IconWithText Icon={Maximize} text={`${surface} m²`} />
      </div>
    </PropertyImage>
    <div className="p-3 space-y-1">
      <PropertyAttribute text={address} />
      <PropertyAttribute text={`$${rent} / month`} color="text-accent" bold />
      <PropertyAttribute text={`Available from: ${date}`} />
    </div>
  </div>
);

export default Property;
