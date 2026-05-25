import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import PropertyList from "./components/PropertyList/PropertyList";
import Footer from "./components/Footer/Footer";
import properties from "./data/properties";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Title />
        <PropertyList properties={properties} />
      </main>
      <Footer />
    </div>
  );
}

// Export the App component
export default App;