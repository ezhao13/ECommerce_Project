import "./Header.css";
import { House, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className='header'>
      <div className='item brand'>
        <House className='icon' />
        <span>Waterloo Rentals</span>
      </div>
      <div className='item contact'>
        <Phone className='icon' />
        <span>(519) 123-4567</span>
      </div>
      <div className='item contact'>
        <Mail className='icon' />
        <span>agent@email.com</span>
      </div>
    </header>
  );
};

export default Header;
