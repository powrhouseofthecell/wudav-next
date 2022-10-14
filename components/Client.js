import Head from 'next/head';
import Image from 'next/image';

const Client = (fetchedClient) => {
   const { ...badCodeClient } = fetchedClient.fetchedClient.fetchedClient;
   const badCodeClientRefactor = badCodeClient[0];

   return (
      <>
         <Head>
            <title>Work - {badCodeClientRefactor.title}</title>
         </Head>
         <h1 className="mb-6 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {badCodeClientRefactor.title}
         </h1>
         <Image
            alt="Fibr"
            src={`/static/clients/${badCodeClientRefactor.id}/1.jpg`}
            width={1300}
            height={550}
         />

         <Image
            alt="Fibr"
            src={`/static/clients/${badCodeClientRefactor.id}/2.jpg`}
            width={1300}
            height={750}
         />
         <h2 className="my-8 text-2xl">{badCodeClientRefactor.description}</h2>
         <p>{badCodeClientRefactor.fullDetails}</p>

         {/* <Image alt="Client Image" className="" width={1300} height={500} src={img1} />
         <Image alt="Client Image" className="" width={1300} height={500} src={img2} />
         <Image alt="Client Image" className="" width={1300} height={500} src={img3} /> */}
      </>
   );
};

export default Client;
