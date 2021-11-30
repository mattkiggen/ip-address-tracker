import styles from '../styles/Details.module.scss';

export default function Details() {
  return (
    <div className={styles.details}>
      <div>
        <h3>IP Address</h3>
        <p>Loading...</p>
      </div>
      <div className={styles.separator}>
        <h3>Location</h3>
        <p>Loading...</p>
      </div>
      <div className={styles.separator}>
        <h3>Timezone</h3>
        <p>Loading...</p>
      </div>
      <div className={styles.separator}>
        <h3>ISP</h3>
        <p>Loading...</p>
      </div>
    </div>
  );
}
