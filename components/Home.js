import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import Card from '@/components/HomeCard';
import Button from '@/components/ViewMoreButton';
import Image from 'next/image';

import styles from '../css/general.module.css';
import textStyles from '../css/text.module.css';

const Home = () => {
   return (
      <>
         <PageSEO title={`Home - ${siteMetadata.title}`} description={siteMetadata.description} />
         <section className="home">
            {/* Hero Secion */}
            <div className={`${styles.hero}`}>
               <div className={`${styles.panel}`}>
                  <h1 className={`${styles.jj}`}>
                     <span>Wudav</span>
                     <span>Brand</span>
                     <span>Stories</span>
                     {/* <span></span> */}
                  </h1>
                  <h2 className={`${styles.jj}`}>
                     <span>Wudav</span>
                     <span>Brand</span>
                     <span>Stories</span>
                  </h2>
               </div>
               <div className={`${textStyles.content}`}>
                  <div className={`${textStyles.content__container}`}>
                     <ul className={`${textStyles.content__container__list}`}>
                        <li className={`${textStyles.content__container__list__item}`}>
                           Communicate
                        </li>
                        <li className={`${textStyles.content__container__list__item}`}>Connect</li>
                        <li className={`${textStyles.content__container__list__item}`}>Showcase</li>
                        <li className={`${textStyles.content__container__list__item}`}>
                           Reach People
                        </li>
                        <li className={`${textStyles.content__container__list__item}`}>
                           Differentiate
                        </li>
                        <li className={`${textStyles.content__container__list__item}`}>
                           Build Brands
                        </li>
                        <li className={`${textStyles.content__container__list__item}`}>
                           Visual Stories
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            {/* Hero Secion End */}
            {/* Quote Secion */}
            <div className="quote h-full text-center">
               <h2 className={`${styles.animateGradientText} my-8 text-5xl font-bold`}>
                  Wudav Brand Stories
               </h2>
               <figure>
                  <q className="text-2xl">Creativity is intelligence having fun!</q>
                  <figcaption className={`text-ml`}>
                     <span className={`${styles.highlight}`}>ALBERT EINSTEIN</span>{' '}
                  </figcaption>
                  <hr className={`${styles.hrule} my-8`} />
               </figure>
               <p className="my-8">
                  Embracing is a skill. That is what we help your audience learn - to embrace your
                  brand. With a word or without one, imbibing it into the minds of your audience is
                  very important. Whether you are already an established brand or have just started
                  out, we will pave your way through the entire process.
               </p>
               <p>
                  At Wudav Brand Stories , we help brands communicate and grow with aplomb. We do no
                  witchcraft; rather we work very hard to cut through the clutter.
               </p>
               <hr className={`${styles.hrule} my-8`} />
            </div>
            {/* Quote Secion */}
            {/* Work Section */}
            <h1 className={`${styles.animateGradientText} my-10 text-center text-5xl font-bold`}>
               Our Work
            </h1>
            <div className={``}>
               <div className={`${styles.containerHome} -m-4`}>
                  <Card
                     className={`${styles.containerHome_card}`}
                     title={'Aarafh'}
                     description={''}
                     imgSrc={'/static/images/work/aarafh.jpg'}
                     href={'/work/aarafh'}
                  />
                  <Card
                     className={`${styles.containerHome_card}`}
                     title={'Swift Homes'}
                     description={''}
                     imgSrc={'/static/images/work/swift-homes.jpg'}
                     href={'/work/swift-homes'}
                  />
                  <Card
                     className={`${styles.containerHome_card}`}
                     title={'Punn'}
                     description={''}
                     imgSrc={'/static/images/work/punn.jpg'}
                     href={'/work/punn'}
                  />
                  <Card
                     className={`${styles.containerHome_card}`}
                     title={'Fibr'}
                     description={''}
                     imgSrc={'/static/images/work/fibr.jpg'}
                     href={'/work/fibr'}
                  />
                  <Card
                     className={`${styles.containerHome_card}`}
                     title={'Efruitmandi'}
                     description={''}
                     imgSrc={'/static/images/work/efruitmandi.jpg'}
                     href={'/work/efruitmandi'}
                  />
                  <Card
                     className={`${styles.containerHome_card}`}
                     title={'Taameir'}
                     description={''}
                     imgSrc={'/static/images/work/taameir.jpg'}
                     href={'/work/taameir'}
                  />
               </div>
               <Button />
            </div>
            <hr className={`${styles.hrule} my-8`} />
            {/* Work Section End*/}
            {/* Client Section */}
            <section>
               <h1 className={`${styles.animateGradientText} my-10 text-center text-5xl font-bold`}>
                  Our Clients
               </h1>
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
