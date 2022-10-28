import Image from 'next/image';
import styles from '../css/general.module.css';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';

import { useTheme } from 'next-themes';

const Contact = () => {
   const { theme, setTheme, resolvedTheme } = useTheme();
   let imageSrc;
   if (theme === 'light') {
      imageSrc = '/static/images/contactusdark.svg';
   } else {
      imageSrc = '/static/images/contactuslight.svg';
   }

   return (
      <>
         <PageSEO
            title={`Contact - ${siteMetadata.title}`}
            description={siteMetadata.description}
         />
         <div>
            <Image layout="intrinsic" width={1100} height={300} alt="Contact Imge" src={imageSrc} />
            <h1 className="my-14 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
               <span className={styles.animateGradientText}>Contact Wudav</span>
            </h1>
            <div className="flex text-left">
               <div className="container-left mx-auto">
                  <p className="mb-3 text-lg font-bold"> Wudav Brand Stories </p>
                  <p className="my-1"> 54B, Hatch 101 </p>
                  <p> Sector-18, Gurugram, Haryana. India </p>
                  {/*  */}
                  <hr className="my-5 text-gray-700 opacity-40" />
                  <p className="my-1">1st Floor, Reshi Complex, Opposite LIC Office, Nai Basti,</p>
                  <p> Anantnag, Jammu and Kashmir </p>
                  <div className="contactInfo 6 mt-5 flex justify-between">
                     <div className="container1">
                        <div className={`${styles.contactInfoItem} ${styles.contactItem1} mt-2`}>
                           <a className={`font-bold`} href="mailto:info@wudav.com">
                              <span className={styles.link}>info@wudav.com</span>
                           </a>
                        </div>
                        <div className={`${styles.contactInfoItem} ${styles.contactItem3} mt-4`}>
                           <a href="tel:+91-1932-358-653" className="mt-16 font-bold">
                              <span className={styles.link}>+91-1932-358-653</span>
                           </a>
                        </div>
                     </div>
                     <div className="container2">
                        <div className={`${styles.contactInfoItem} ${styles.contactItem2} mt-3`}>
                           <a className={`font-bold`} href="mailto:info@wudav.com">
                              <span className={styles.link}>work@wudav.com</span>
                           </a>
                        </div>
                        <div className={`${styles.contactInfoItem} ${styles.contactItem4} mt-3`}>
                           <a href="tel:+91-9622-888-804" className="font-bold">
                              <span className={styles.link}>+91-9622-888-804</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Contact;
