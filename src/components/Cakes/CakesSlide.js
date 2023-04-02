import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import cakes from "../../cakeData";
import styles from "./Cakes.module.scss";
// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useStateContext } from '../../context/StateContextProvider';


const CakesSlide = ({currentCake}) => {
  const { formatPrice } = useStateContext();
  
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <section className={styles.cakesSlide}>
        <h3>You may also like</h3>
        <div className={styles.slideWrapper}>
            <Swiper
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    375: {
                      width: 375,
                      slidesPerView: 2,
                    },
                    1440: {
                      width: 1440,
                      slidesPerView: 4,
                    },
                }}
                style={{position: "relative"}}
            >
                {
                    currentCake && 
                    cakes.filter(list => list.slug !== currentCake.slug).map((lists, index) => (
                        (
                           <SwiperSlide key={index}>
                               <Link to={`/cakes/${lists.slug}`} className={styles.cardLink} onClick={scrollToTop}>
                                   <img className={styles.cakeImage} src={lists.images[0]} alt={lists.cakeName} />
                                   <div className={styles.cakeDetails}>
                                       <p className={styles.cakeName}>{lists.cakeName}</p>
                                       <p className={styles.cakePrice}>Php {formatPrice(lists.details.price)}.00</p>
                                   </div>
                               </Link>
                           </SwiperSlide>
                        )
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default CakesSlide;