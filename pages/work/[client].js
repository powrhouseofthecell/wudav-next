import { useRouter } from 'next/router'
import styles from '../../css/Home.module.css'
const Client = () => {
   const router = useRouter()
   const clientName = router.query.client
   return (
      <>
         <h1 className={styles.center}>Client Page {clientName}</h1>
      </>
   )
}

export default Client
