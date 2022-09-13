import { useRouter } from 'next/router';
import Head from 'next/head';

import Work from '@/components/Work';
import projectsData from '@/data/projectsData';

const Client = () => {
   const router = useRouter();
   const clientName = router.query.client;

   const imgSourceHead = `/static/clients/${clientName}/img1.jpg`;
   const imgSourceSection2 = `/static/clients/${clientName}/img2.jpg`;
   const imgSourceSection3 = `/static/clients/${clientName}/img3.jpg`;
   // console.log(projectsData.fullDetails);
   const filteredArray = projectsData.filter((project) => {
      return project.id === clientName;
   });

   return (
      <>
         {/* {console.log(filteredArray[0])} */}
         <Head>
            <title>{filteredArray[0].title} - Wudav</title>
         </Head>
         <Work
            clientName={clientName}
            imgSourceHead={imgSourceHead}
            imgSourceSection2={imgSourceSection2}
            imgSourceSection3={imgSourceSection3}
            filteredArray={filteredArray}
         />
      </>
   );
};

export default Client;
