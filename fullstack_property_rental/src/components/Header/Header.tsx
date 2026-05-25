import { House, Phone, Mail } from 'lucide-react';
import AuthButton from '../Auth/AuthButton';
import { GoogleUser } from '../../types';

interface Props {
  user: GoogleUser | null;
  onUser: (user: GoogleUser | null) => void;
}

const Header = ({ user, onUser }: Props) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-white flex items-center justify-between px-6 py-3 flex-wrap gap-2 shadow-lg">
    <div className="flex items-center gap-2">
      <House size={22} className="text-accent" />
      <span className="font-bold text-lg tracking-wide">Waterloo Rentals</span>
    </div>
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-1 text-sm text-gray-300">
        <Phone size={14} />
        <span>(519) 123-4567</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-300">
        <Mail size={14} />
        <span>agent@email.com</span>
      </div>
      <AuthButton user={user} onUser={onUser} />
    </div>
  </header>
);

export default Header;
