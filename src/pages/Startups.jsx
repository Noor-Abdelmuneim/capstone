import { Link } from "react-router-dom";
import Card from "../components/Card";
import companypic from "../components/Assets/Building-cuate.png.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Startups = () => {
  return (
    <div className="main-container">
      <div className="startups-container">
        <h1 className="header-text">Explore Startups Now</h1>
        <p className="startups-pargraph">
          Explore the innovative startups transforming the Iraqi market.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Card
            name="Company name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
            picture={companypic}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            name="Company name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
            picture={companypic}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            name="Company name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
            picture={companypic}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            name="Company name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
            picture={companypic}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            name="Company name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
            picture={companypic}
          />
        </SwiperSlide>
      </Swiper>
      <div className="startups-container">
        <Link to="/cardspage">
          <button className="startups-button">Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Startups;
