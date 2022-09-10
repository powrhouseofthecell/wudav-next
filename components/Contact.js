import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
   const imageSrc = '/static/images/contactus.png';
   return (
      <>
         <Head>
            <title>Contact - Wudav</title>
         </Head>
         <div>
            <Image
               layout="intrinsic"
               width={1100}
               height={300}
               alt="Contact Image"
               src={imageSrc}
            />
            <h1 className="my-14 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
               Contact Wudav
            </h1>
            <div className="flex text-left ">
               <div className="container-left mx-auto">
                  <p className="mb-3 text-lg font-bold"> Wudav Brand Stories </p>
                  <p className="my-1"> 54B, Hatch 101 </p>
                  <p> Sector-18, Gurugram, Haryana. India </p>
                  {/*  */}
                  <hr className="my-5 text-gray-700 opacity-40" />
                  <p className="my-1"> 1st Floor, Reshi Complex,opp. LIC office, Nai Basti, </p>
                  <p> Anantnag, Jammu and Kashmir </p>
                  <p className="my-1">
                     <a className="font-bold" href="mailto:info@wudav.com">
                        info@wudav.com
                     </a>{' '}
                  </p>
                  <p className="my-1">
                     <a href="tel:+91-1932-358-653" className="font-bold">
                        +91-1932-358-653
                     </a>
                  </p>
                  <p className="my-1">
                     <a href="tel:+91-9622-888-804" className="font-bold">
                        +91-9622-888-804
                     </a>
                  </p>
               </div>

               {/* <div className="container-right mx-auto">
                  <p> 1st Floor, Reshi Complex,opp. LIC office, Nai Basti, </p>
                  <p> Anantnag, Jammu and Kashmir </p>
                  <p> info@wudav.com </p>
                  <p> +91-9622-888-804 </p>
                  <p> +91-1932-358-653 </p>
               </div> */}
            </div>
         </div>
      </>
   );
};

export default Contact;
