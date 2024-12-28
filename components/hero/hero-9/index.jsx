import SearchForm4 from "../../common/job-search/SearchForm4";
import Funfact2 from "../../fun-fact-counter/Funfact2";
import Image from "next/image";

const index = () => {
  return (
    <section
      className="banner-section-nine"
      style={{ backgroundImage: "linear-gradient(158deg, rgba(146,173,238,1) 10%, rgba(254,241,188,1) 44%, rgba(255,0,110,1) 100%)",paddingTop:200 }}


    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="300" data-aos="fade-up">
            {/* <img src="/images/icons/Jlogopng.png" style={{width:300}}></img> */}
            <Image
          width={400}
          height={400}
          src="/images/icons/Jlogopng.png"
          alt="hero image"
        />
            {/* <h3 style={{color:"#3863a9"}}>15,000+ Browse Jobs</h3> */}
            <div className="text">
              Find Jobs, Employment & Career Opportunities
            </div>
          </div>

          {/* <!-- Job Search Form --> */}
          <div
            className="job-search-form"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            <SearchForm4 />
          </div>
        </div>
        {/* <!-- Job Search Form --> */}

        <div className="fun-fact-section" style={{paddingTop:40}}>
          <div className="row">
            <Funfact2 />
          </div>
        </div>
        {/* <!-- Fun Fact Section --> */}
      </div>
    </section>
  );
};

export default index;
