import Contact from '@/components/Contact';
import styles from '../css/general.module.css';

const ContactUs = () => {
   return (
      <>
         <Contact />
         <hr className={`${styles.hrule} my-8`} />
      </>
   );
};

export default ContactUs;
