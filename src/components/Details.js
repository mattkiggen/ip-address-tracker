import styles from '../styles/Details.module.scss';

export default function Details({ data }) {
  const ip = data ? data.ip : 'Loading...';
  const location = data
    ? `${data.location.region}, ${data.location.country}`
    : 'Loading...';
  const timezone = data ? data.location.timezone : 'Loading...';
  const isp = data ? data.isp : 'Loading...';

  return (
    <div className={styles.details}>
      <div>
        <h3>IP Address</h3>
        <p>{ip}</p>
      </div>
      <div className={styles.separator}>
        <h3>Location</h3>
        <p>{location}</p>
      </div>
      <div className={styles.separator}>
        <h3>Timezone</h3>
        <p>UTC {timezone}</p>
      </div>
      <div className={styles.separator}>
        <h3>ISP</h3>
        <p>{isp}</p>
      </div>
    </div>
  );
}
