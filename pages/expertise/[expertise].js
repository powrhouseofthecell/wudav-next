import { useRouter } from 'next/router';
import ExpertiseComponent from '@/components/ExpertiseComponent';

const Expertise = () => {
   const router = useRouter();
   const slug = router.query.expertise;

   return (
      <>
         <ExpertiseComponent slug={slug}></ExpertiseComponent>
      </>
   );
};

export default Expertise;
