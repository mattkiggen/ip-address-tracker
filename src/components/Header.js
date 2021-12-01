import { useState } from 'react';
import toast from 'react-hot-toast';
import { validateInput } from '../lib/data';
import Details from './Details';
import styles from '../styles/Header.module.scss';
import background from '../images/pattern-bg.png';

export default function Header({ data, handleSearch }) {
  const [query, setQuery] = useState('');

  const handleInput = (input) => {
    const { error } = validateInput(input);
    if (error) {
      toast("That didn't work, check your input", { icon: '😞' });
      console.log(error);
    }
    handleSearch(input);
  };

  const icon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
      <path fill='none' stroke='#FFF' strokeWidth='3' d='M2 1l6 6-6 6' />
    </svg>
  );

  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url(${background})` }}>
      <h1>IP Address Tracker</h1>
      <div className={styles.search}>
        <input
          type='text'
          placeholder='Search for any IP address or domain'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => handleInput(query)}>{icon}</button>
      </div>

      <Details data={data} />
    </div>
  );
}
