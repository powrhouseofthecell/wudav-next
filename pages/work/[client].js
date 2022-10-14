import Client from '@/components/Client';
import projectsData from '@/data/projectsData';

const ClientPage = (fetchedClient) => {
   return (
      <>
         <Client fetchedClient={fetchedClient} />
      </>
   );
};

export async function getStaticPaths() {
   const paths = projectsData.map((projectData) => {
      return {
         params: { client: projectData.id },
      };
   });
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const clientQueryName = params.client;
   const fetchedClient = projectsData.filter((projectData) => {
      return projectData.id === clientQueryName;
   });
   return { props: { fetchedClient } };
}

export default ClientPage;
