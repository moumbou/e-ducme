import { useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import styles from '../css/ConnexionPageStyle.module.css'

function connexion() {

  const [page, setPage] = useState('login')

  return (
    <div className={styles.connexion}>
        {
          page === 'login' ? 
          <Login setPage={setPage} /> :
          <SignUp setPage={setPage} />
        }
    </div>
  )
}

export default connexion