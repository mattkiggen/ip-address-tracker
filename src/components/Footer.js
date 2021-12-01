import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Built with{' '}
        <a href='https://create-react-app.dev/' target='_blank'>
          React
        </a>
        ,{' '}
        <a href='https://react-leaflet.js.org/' target='_blank'>
          Leaflet
        </a>
        ,{' '}
        <a href='https://www.mapbox.com/' target='_blank'>
          MapBox
        </a>{' '}
        and{' '}
        <a href='https://www.ipify.org/' target='_blank'>
          Ipify
        </a>
      </p>
    </footer>
  );
}
