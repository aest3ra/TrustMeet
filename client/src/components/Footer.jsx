import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <img src="https://files.staging.peachworlds.com/website/b24aa721-af19-49d1-b937-6f85fecafe18/spinner-humanity.svg" alt="Humanity Protocol" className={styles.footerLogo} />
        <span>with Humanity Protocol</span>
      </div>
      <div className={styles.footerCenter}>
        &copy; 2025 TrustMeet. All rights reserved.
      </div>
      <div className={styles.footerRight}>
        Contact: <a href="mailto:contact@trustmeet.com" style={{ color: '#4A5568', textDecoration: 'underline' }}>contact@trustmeet.com</a>
      </div>
    </footer>
  )
}

export default Footer 