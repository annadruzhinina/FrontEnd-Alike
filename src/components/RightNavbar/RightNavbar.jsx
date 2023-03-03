import "./rightNavbar.css";
import { RnavbarData } from "./RnavbarData";

function RightNavbar() {
  return (
    <div className="suggestion">
      <h3 className="suggestion-title">Tech News</h3>
      <div className="suggestion-scroll">
        <div className="suggestion-list">
          {RnavbarData.map((data, index) => {
            return (
              <div key={index} className="articles">

                <img
                  src={data.img}
                  alt={data.alt}
                  className='suggestion-img__icons'
                />
                <h4>
                  {data.title}
                  <br />
                  <a target='_blank' href={data.link} rel="noreferrer">
                    <span className='suggestion-icon_pointer'>👉</span> Read
                    More
                  </a>
                </h4>
              </div>
            )
          })}
        </div>
        <div className="right-video">
          <iframe
            width="220"
            height="180"
            src="https://www.youtube.com/embed/W6NZfCO5SIk"
            title="YouTube video player"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe 
          width="220" 
          height="180" 
          src="https://www.youtube.com/embed/hQAHSlTtcmY" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default RightNavbar;
