import Careers from '@/components/Careers';
import styles from '../css/general.module.css';

const CareerPage = () => {
   return (
      <>
         <Careers />
         <hr className={`${styles.hrule} my-8`} />
      </>
   );
};
export default CareerPage;
