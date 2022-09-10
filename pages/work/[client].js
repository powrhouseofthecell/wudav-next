import { useRouter } from 'next/router';

import Work from '@/components/Work';
import projectsData from '@/data/projectsData';

const Client = () => {
   const router = useRouter();
   const clientName = router.query.client;

   const imgSource = `/static/images/work/${clientName}.jpg`;
   // console.log(projectsData.fullDetails);
   const filteredArray = projectsData.filter((project) => {
      return project.id === clientName;
   });

   return (
      <>
         {console.log(filteredArray[0])}
         <Work clientName={clientName} imgSource={imgSource} filteredArray={filteredArray} />
      </>
   );
};

export default Client;
