import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Built with{' '}
        <a
          href='https://create-react-app.dev/'
          target='_blank'
          rel='noreferrer'>
          React
        </a>
        ,{' '}
        <a
          href='https://react-leaflet.js.org/'
          target='_blank'
          rel='noreferrer'>
          Leaflet
        </a>
        ,{' '}
        <a href='https://www.mapbox.com/' target='_blank' rel='noreferrer'>
          MapBox
        </a>{' '}
        and{' '}
        <a href='https://www.ipify.org/' target='_blank' rel='noreferrer'>
          Ipify
        </a>
      </p>
    </footer>
  );
}
