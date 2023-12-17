import styles from './index.module.scss';

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.siteLayout}>{children}</div>
  );
};

export default DefaultLayout;
