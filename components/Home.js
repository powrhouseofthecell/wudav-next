import styles from '../css/Home.module.css';
import Head from 'next/head';
const Home = () => {
   return (
      <>
         <Head>
            <title>Home - Wudav</title>
         </Head>
         <h1 className={styles.center}>Hello Wudav</h1>
      </>
   );
};

export default Home;
