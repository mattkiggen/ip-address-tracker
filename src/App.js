import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getData, isDomain, isIpAddress } from './lib/data';
import Header from './components/Header';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
  );

  const handleSearch = async (query) => {
    if (isDomain(query)) {
      setUrl((prevUrl) => {
        return (prevUrl += `&domain=${query}`);
      });
    }

    if (isIpAddress(query)) {
      setUrl((prevUrl) => {
        return (prevUrl += `&ipAddress=${query}`);
      });
    }

    const { data: res } = await getData(url);
    if (data) {
      setData(res);
    } else {
      toast('Failed to fetch data', { icon: '😞' });
    }
  };

  // get ip address on initial app load
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const { data, error } = await getData(url);
      if (error) return;
      setData(data);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return (
    <div className='App'>
      <Header data={data} handleSearch={handleSearch} />
      <LocationMap data={data} />
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
