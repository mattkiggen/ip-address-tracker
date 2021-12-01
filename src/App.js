import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getData } from './lib/data';
import Header from './components/Header';
import LocationMap from './components/LocationMap';
import { isDomain, isIpAddress } from './lib/data';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  let url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`;

  const handleSearch = async (query) => {
    if (isDomain(query)) {
      url += `&domain=${query}`;
    }

    if (isIpAddress(query)) {
      url += `&ipAddress=${query}`;
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

    (async () => {
      const { data: res, error } = await getData(url, {
        signal: controller.signal,
      });
      if (data) {
        setData(res);
      } else {
        console.log(error);
      }
      setData(res);
    })();

    return () => {
      controller.abort();
    };
  }, [url, data]);

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
