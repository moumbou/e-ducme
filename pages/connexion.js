import Login from '../components/Login'
import styles from '../css/ConnexionPageStyle.module.css'

function connexion() {
  return (
    <div className={styles.connexion}>
        <Login />
    </div>
  )
}

export default connexion