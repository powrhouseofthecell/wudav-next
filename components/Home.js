import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';

import styles from '../css/general.module.css';

const clientLogos = ['1', '2', '3', '4']; // Image Names for the client logos

const Home = () => {
   return (
      <>
         <PageSEO title={`Home - ${siteMetadata.title}`} description={siteMetadata.description} />
         <section className="home">
            {/* Home Secion */}
            <div className={`${styles.hero}`}>
               <h1 className="pt-36 text-center text-6xl">Hello Wudav</h1>
            </div>
            {/* Home Secion End */}

            {/* Quote Secion */}
            <div className="quote h-full text-center">
               <h2 className="text-4xl">Wudav Brand Stories</h2>
               <figure>
                  <q>Creativity is intelligence having fun!</q>
                  <figcaption>ALBERT EINSTEIN</figcaption>
               </figure>
               <p>
                  Embracing is a skill. That is what we help your audience learn - to embrace your
                  brand. With a word or without one, imbibing it into the minds of your audience is
                  very important. Whether you are already an established brand or have just started
                  out, we will pave your way through the entire process.
               </p>
               <p>
                  At Wudav Brand Stories , we help brands communicate and grow with aplomb. We do no
                  witchcraft; rather we work very hard to cut through the clutter.
               </p>
            </div>
            {/* Quote Secion */}

            {/* Client Section */}
            <section>
               <h1 className="text-center text-4xl">Our Clients</h1>
               <div className={`${styles.mainContainer}`}>
                  <ul className={`${styles.gridWrapper}`}>
                     <li>
                        <Image
                           alt="Savol"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/1.png`}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Swift Homes"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/2.png`}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Construction Souq"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/3.png`}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Fly Kash"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/4.png`}
                        />
                     </li>
                     <li>
                        <Image
                           alt="InvestGate Financial Planners"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/5.png`}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Synergate"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/6.png`}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Petros"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/7.png`}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Link Jordan"
                           width={200}
                           height={100}
                           src={`/static/clientLogos/8.png`}
                        />
                     </li>
                  </ul>
               </div>
            </section>
            {/* Client Section End */}
         </section>
      </>
   );
};

export default Home;
