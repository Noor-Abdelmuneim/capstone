import kapita from "../photos/Kapita_Logo-removebg-preview.png";
import orangecorners from "../photos/Orange_Corner_Baghdad_1.png";
import thestation from "../photos/The_Station_Logo-removebg-preview_nyon6f9.png";
import makers from "../photos/Makers_Logo-removebg-preview_iZErZpr.png";
import hub200 from "../photos/Hub_200-removebg-preview.png";
import fiveonelabs from "../photos/Five_One_Lab_Logo-removebg-preview_fxvUajr.png";
import Response_Innovation_Lab from "../photos/Response_Innovation_Lab-removebg-preview_2.png";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Incubators = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="incubators">
      <div className="incubators-container">
        <div className="incubators-text">
          <h1 className="header-text">Incubators</h1>
          <p className="incu-p">
            Discover a variety of incubators that support and nurture startups,
            providing them with the resources, mentorship, and networking
            opportunities needed to thrive.Explore our selection to find the
            perfect incubator for your entrepreneurial journey.
          </p>
          <main className="first-inv-info">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.kapita.iq/"
                >
                  <img src={kapita} alt="kapitaLogo" />
                </a>
              </div></SwiperSlide>
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.orangecorners.com/country/baghdad-iraq/"
                >
                  <img src={orangecorners} alt="orangecorners" />
                </a>
              </div></SwiperSlide>
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://the-station.iq/"
                >
                  <img src={thestation} alt="thestation" />
                </a>
              </div></SwiperSlide>
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://makersiq.org/"
                >
                  <img src={makers} alt="makers" />
                </a>
              </div></SwiperSlide>
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/hub200.tiq/"
                >
                  <img src={hub200} alt="hub200" />
                </a>
              </div></SwiperSlide>
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.orangecorners.com/country/baghdad-iraq/"
                >
                  <img src={orangecorners} alt="kapitaLogo" />
                </a>
              </div></SwiperSlide>
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fiveonelabs.org/"
                >
                  <img src={fiveonelabs} alt="kapitaLogo" />
                </a>
              </div></SwiperSlide>
              <SwiperSlide><div className="incu-logo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.responseinnovationlab.com/iraq-agbusiness-incubator"
                >
                  <img
                    src={Response_Innovation_Lab}
                    alt="kapitaLogo"
                  />
                </a>
              </div></SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Incubators;
