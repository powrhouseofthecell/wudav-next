import { useRouter } from 'next/router';
import Head from 'next/head';

import Client from '@/components/Client';
import projectsData from '@/data/projectsData';

const ClientPage = () => {
   const router = useRouter();
   const clientQueryName = router.query.client;
   const img1 = `/static/clients/${clientQueryName}/img1.jpg`;
   const img2 = `/static/clients/${clientQueryName}/img2.jpg`;
   const img3 = `/static/clients/${clientQueryName}/img3.jpg`;

   // !
   let client;
   projectsData.map((projectData) => {
      if (projectData.id === clientQueryName) {
         client = projectData;
      }
   });
   console.log(client);
   // !
   return (
      <>
         {/* <Head>{client.title}</Head> */}
         {/* <Client img1={img1} img2={img2} img3={img3} /> */}
      </>
   );
};

// export async function getStaticPaths() {
//    const paths = projectsData.map((projectData) => {
//       return {
//          params: { client: projectData.id },
//       };
//    });
//    return {
//       paths,
//       fallback: false,
//    };
// }

// export async function getStaticProps({ params }) {
//    const clientQueryName = params.client;
//    const client = projectsData.map((projectData) => {
//       return projectData.id === clientQueryName;
//    });
//    return { props: { client } };
// }

export default ClientPage;
