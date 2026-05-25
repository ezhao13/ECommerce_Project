import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import PropertyList from './components/PropertyList/PropertyList';
import SearchChat from './components/SearchChat/SearchChat';
import { Property, GoogleUser } from './types';
import { fetchProperties } from './api';
import localProperties from './data/properties';

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredIds, setFilteredIds] = useState<number[] | null>(null);
  const [user, setUser] = useState<GoogleUser | null>(null);

  useEffect(() => {
    fetchProperties()
      .then(setProperties)
      .catch(() => setProperties(localProperties));
  }, []);

  const displayed = filteredIds
    ? properties.filter((p) => filteredIds.includes(p.id))
    : properties;

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
      <div className="mt-16 mb-14 px-4 md:px-12">
        <Header user={user} onUser={setUser} />
        <main>
          <Title />
          <SearchChat user={user} onFilter={setFilteredIds} />
          <PropertyList properties={displayed} />
        </main>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
