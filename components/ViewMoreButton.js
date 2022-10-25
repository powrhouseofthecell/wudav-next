import Link from 'next/link';
import styles from '../css/viewmorebutton.module.css';

const ViewMoreButton = () => {
   return (
      <section className={`${styles.buttons} ${styles.section}`}>
         <div className={`${styles.container}`}>
            {/* <a href="https://twitter.com/Dave_Conner" className={`${styles.btn} ${styles.btn_1}`}>
               <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
               </svg>
               See More
            </a> */}
            <Link href="/work" className={`${styles.btn} ${styles.btn_2}`}>
               See More
            </Link>
         </div>
      </section>
   );
};

export default ViewMoreButton;
