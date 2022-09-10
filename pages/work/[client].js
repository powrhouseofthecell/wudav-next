import { useRouter } from 'next/router';
import Image from 'next/image';

import projectsData from '@/data/projectsData';

const Client = () => {
   const router = useRouter();
   const clientName = router.query.client;

   const imgSource = `/static/images/work/${clientName}.jpg`;
   // console.log(projectsData.fullDetails);

   return (
      <>
         <h1 className="">{clientName}</h1>
         <Image alt="Client Image" className="" width={1200} height={500} src={imgSource} />
         <p>{projectsData.fullDetails}</p>
      </>
   );
};

export default Client;
