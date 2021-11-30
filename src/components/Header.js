import styles from '../styles/Header.module.scss';
import background from '../images/pattern-bg.png';

export default function Header() {
  const icon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
      <path fill='none' stroke='#FFF' stroke-width='3' d='M2 1l6 6-6 6' />
    </svg>
  );

  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url(${background})` }}>
      <h1>IP Address Tracker</h1>
      <div className={styles.search}>
        <input type='text' placeholder='Search for any IP address or domain' />
        <button>{icon}</button>
      </div>
    </div>
  );
}
