import "./Footer.css";
// Import the Clock icon from the lucide-react library
import { Clock } from "lucide-react";

const Footer = () => {
  // Define the agency opening hour
  const openingHour = 9;
  // Define the agency closing hour
  const closingHour = 17;
  // Get the current date and time
  const now = new Date();
  // Extract the current hour from the date (returns the hour between 0 and 23)
  const currentHour = now.getHours();
  // Extract the current day of the week (0 = Sunday, 6 = Saturday)
  const currentDay = now.getDay();
  // Check if the current day is a weekday (Monday to Friday)
  const isWeekday = currentDay >= 1 && currentDay <= 5;
  // Determine if the agency is open (weekday and within operating hours)
  const isOpen = 
    isWeekday && currentHour >= openingHour && currentHour < closingHour;

  // Define the JSX to display when the agency is open
  const openElement = (
    <>
      {/* Flex container for the "open" status message */}
      <div className="message">
        {/* Display the Clock icon */}
        <Clock className="icon" />
        {/* Display the open status message */}
        <span className="status open">We are open now!</span>
      </div>
      {/* Display the contact information */}
      <div style={{ marginTop: "0.5rem" }}>
        Call us at: <strong>(555) 123-4567</strong>
      </div>
    </>
  );

  // Define the JSX to display when the agency is closed
  const closedElement = (
    <>
      {/* Flex container for the "closed" status message */}
      <div className="message">
        <Clock className="icon" />
        {/* Display the closed status message */}
        <span className="status closed">We are closed now.</span>
      </div>
      {/* Display the agency opening hours */}
      <div style={{ marginTop: "0.5rem" }}>
        Opening hours: Monday to Friday, {openingHour}am to {closingHour}pm.
      </div>
    </>
  );
  
  return (
    <footer className="footer">
      {isOpen ? openElement : closedElement}
    </footer>
  );
};

export default Footer;
