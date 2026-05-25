import { Clock } from 'lucide-react';

const Footer = () => {
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();
  const isOpen = day >= 1 && day <= 5 && hours >= 9 && hours < 17;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white text-center py-3 text-sm shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <Clock size={14} />
        {isOpen ? (
          <span className="text-accent font-medium">
            We are open now! Call us at: (555) 123-4567
          </span>
        ) : (
          <span className="text-red-400">
            We are closed now. Opening hours: Monday to Friday, 9am to 5pm.
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
