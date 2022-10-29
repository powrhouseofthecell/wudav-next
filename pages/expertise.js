import Expertise from '@/components/Expertise';
import styles from '../css/general.module.css';

const expertise = () => {
   return (
      <>
         <Expertise />
         <hr className={`${styles.hrule} my-8`} />
      </>
   );
};
export default expertise;
