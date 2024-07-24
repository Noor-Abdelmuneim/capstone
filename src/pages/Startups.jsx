import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Startups = () => {
  const [startups, setStartups] = useState([]);


  const fetchStartups = async () => {
    try {
      const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:1cUXcVZQ/startups");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setStartups(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchStartups();
  }, []);

  return (
    <div className="main-container">
      <div className="startups-container">
        <h1 className="header-text">Explore Startups Now</h1>
        <p className="startups-pargraph">
          Explore the innovative startups transforming the Iraqi market.
        </p>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {startups.map((startup, index) => (
          <SwiperSlide key={index}>
            <Card
              name={startup.Company_Name}
              description={startup.About}
              image={startup.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="startups-container">
        <Link to="/cardsPage">
          <button className="startups-button">Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Startups;