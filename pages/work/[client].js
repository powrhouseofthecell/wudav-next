import { useRouter } from 'next/router';
import Head from 'next/head';

import Work from '../../components/Work';

const Client = () => {
   const router = useRouter();
   const clientQueryName = router.query.client;
   const imgSourceHead = `/static/clients/${clientQueryName}/img1.jpg`;
   const imgSourceSection2 = `/static/clients/${clientQueryName}/img2.jpg`;
   const imgSourceSection3 = `/static/clients/${clientQueryName}/img3.jpg`;
   // const fetchedClient = projectsData.find((project) => project.id === clientQueryName);
   // console.log(fetchedClient.index);

   // console.log(clientQueryName);
   // let fetchedClientLink;
   // projectsData.filter((client) => {
   //    if (client.id === clientQueryName) {
   //       fetchedClientLink = client;
   //    }
   // });
   // console.log(fetchedClientLink);

   // const clientIndex = fetchedClient.index;
   // const client = projectsData[clientIndex];
   // console.log(client);
   // const clientTitle = client.title;
   // const clientDescription = client.description;
   // const clientFullDetails = client.fullDetails;
   return (
      <>
         {/* {console.log(filteredArray[0])} */}
         <Head>{/* <title>{filteredArray[0].title} - Wudav</title> */}</Head>
         <Work
            // clientTitle={clientTitle}
            // clientDescription={clientDescription}
            // clientFullDetails={clientFullDetails}
            // ! Static version below.
            // clientTitle={'[Client Name]'}
            // clientDescription={'[Description]'}
            // clientFullDetails={'[Full Details]'}
            imgSourceHead={imgSourceHead}
            imgSourceSection2={imgSourceSection2}
            imgSourceSection3={imgSourceSection3}
            clientQueryName={clientQueryName}
         />
      </>
   );
};

export default Client;
