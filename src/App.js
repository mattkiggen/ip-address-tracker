import { useEffect, useState } from 'react';
import { getData } from './lib/data';
import Header from './components/Header';
import Map from './components/Map';
import { isDomain, isIpAddress } from './lib/data';
import './App.css';

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

    const res = await getData(url);
    setData(res);
  };

  // get ip address on initial app load
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const res = await getData(url, { signal: controller.signal });
      console.log(res);
      setData(res);
    })();

    return () => {
      controller.abort();
    };
  }, [url]);

  return (
    <div className='App'>
      <Header data={data} handleSearch={handleSearch} />
      <Map />
    </div>
  );
}

export default App;
