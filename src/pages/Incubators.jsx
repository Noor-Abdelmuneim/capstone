import kapita from "../photos/Kapita_Logo-removebg-preview.png";
import orangecorners from "../photos/Orange_Corner_Baghdad_1.png";
import thestation from "../photos/The_Station_Logo-removebg-preview_nyon6f9.png";
import makers from "../photos/Makers_Logo-removebg-preview_iZErZpr.png";
import hub200 from "../photos/Hub_200-removebg-preview.png";
import fiveonelabs from "../photos/Five_One_Lab_Logo-removebg-preview_fxvUajr.png";
import Response_Innovation_Lab from "../photos/Response_Innovation_Lab-removebg-preview_2.png";

const Incubators = () => {
  return (
    <div className="incubators">
      <div className="incubators-container">
      <div className="incubators-text">
      <h1 className="header-text">Incubators</h1>
      <p>
        Discover a variety of incubators that support and nurture startups,
        providing them with the resources, mentorship, and networking
        opportunities needed to thrive.Explore our selection to find the
        perfect incubator for your entrepreneurial journey.
      </p>
      <main className="first-inv-info">
        <swiper-container slides-per-view="2" space-between="20" scrollbar-clickable="true" mousewheel-invert="true"
           breakpoints={
            JSON.stringify({
                
                640:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
    
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
    
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                }
            })
        }>
          <swiper-slide> 
                   <div className="incu-logo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kapita.iq/"
            >
              <img src={kapita} alt="kapitaLogo" width={"100px"} />
            </a>
          </div></swiper-slide>
          <swiper-slide>        <div className="incu-logo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.orangecorners.com/country/baghdad-iraq/"
            >
              <img src={orangecorners} alt="kapitaLogo" width={"100px"} />
            </a>
          </div></swiper-slide>
          <swiper-slide><div className="incu-logo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://the-station.iq/"
            >
              <img src={thestation} alt="kapitaLogo" width={"100px"} />
            </a>
          </div></swiper-slide>
          <swiper-slide>        <div className="incu-logo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://makersiq.org/"
            >
              <img src={makers} alt="kapitaLogo" width={"100px"} />
            </a>
          </div></swiper-slide>
          <swiper-slide>        <div className="incu-logo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/hub200.tiq/"
            >
              <img src={hub200} alt="kapitaLogo" width={"100px"} />
            </a>
          </div></swiper-slide>
          <swiper-slide>        <div className="incu-logo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.orangecorners.com/country/baghdad-iraq/"
            >
              <img src={orangecorners} alt="kapitaLogo" width={"100px"} />
            </a>
          </div></swiper-slide>
          <swiper-slide>        <div className="incu-logo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fiveonelabs.org/"
            >
              <img src={fiveonelabs} alt="kapitaLogo" width={"100px"} />
            </a>
          </div></swiper-slide>
          <swiper-slide>        <div className="incu-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.responseinnovationlab.com/iraq-agbusiness-incubator"
          >
            <img
              src={Response_Innovation_Lab}
              alt="kapitaLogo"
              width={"100px"}
            />
          </a>
        </div></swiper-slide>
        </swiper-container>
      </main>
    </div>
    </div>
    </div>
  );
};

export default Incubators;
