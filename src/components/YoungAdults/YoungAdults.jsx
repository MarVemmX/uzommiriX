import React, { useEffect } from "react";
import "./youngAdults.css";
import Footer from "../Footer";
import NavBar from "../Hero/NavbarBlack";


const YoungAdults = () => {
    useEffect(() => {
        document.title = "Young Adults - UZOMMIRI"; 
      }, []);
  return (
    <div>
    <NavBar/>
      {/* YOUNGA HEADER */}
      <div className="younga-hero">
        <h1>Young Adults</h1>
      </div>

      {/* YOUNGA HERO */}
      <div className="yaPhoto-roll">
        <div className="yaPhoto-wrapa">
          <img src="/images/YOUNGALOGO.jpg" alt="bloom logo" />
          <div className="overlay"></div>
        </div>
        <div className="yaPhoto-wrapb">
          <img src="/images/YOUNAIMG1.jpg" alt="young adults" />
          <div className="overlay mx-[-0.02rem]"></div>
        </div>
      </div>

      {/* BLOOM TEXT-AREA */}
      <div className="bloom-text">
        <h3>BLOOM (Building Leaders Of Outstanding Mettle)</h3>
        <p>
          An initiative of the center with a focus on offering personalized holistic formation to female university and pre-university students as well as young professionals in all walks of life. The activities offered within this initiative include courses on personality development, study techniques, homemaking, etiquette, moral and professional ethics. The students also participate in study camps, DIY classes, excursions, fashion and style events, volunteering, and mentoring activities.
        </p>
      </div>

      {/* UNIV */}
      <div className="univ-vessel">
        <div className="univ-vessel-text">
          <h3>UNIV</h3>
          <p>
            UNIV is an international encounter of university students, which the Institute for University Cooperation (ICU) has sponsored in Rome since 1968. Each year, thousands of students spend the Holy week in Rome, benefiting from the cultural and historical riches of the Eternal City. Conferences, roundtable discussions, and exhibitions are organized throughout the week.
          </p>
          <div className="video-container">
          <iframe allowFullScreen src="https://www.youtube.com/embed/NvLF3raxtW8"></iframe>
          </div>
          <p>
            These activities are occasions to delve into issues relevant to the immediate environment of the university students; with a specific focus on solidarity and social responsibility through carefully chosen topics. The national phase of the conference is hosted by different affiliated university centres in each country, while the final phase occurs in Rome.
          </p>
        </div>
      </div>

      {/* UNIV THEMES */}
      <div className="themes-container">
        <div className="themes-text">
          <div className="text-area">
            <h4>UNIV themes of past years include:</h4>
            <p>UNIV 2025: Citizens of our World</p>
            <p>UNIV 2024: The Human Factor</p>
            <p>UNIV 2023: The Happiness Paradox</p>
            <p>UNIV 2022: Rebuilding together the strength of human relationships</p>
            <p>UNIV 2021: Navigate: Seeking a solid education in a liquid society</p>
            <p>
              UNIV 2020: The Next Generation Leaders:{" "}
              <a href="https://www.youtube.com/watch?v=e5jOntB_UDI">https://www.youtube.com/watch?v=e5jOntB_UDI</a>
            </p>
            <p>
              For more info click{" "}
              <a href="https://www.univforum.org/">https://www.univforum.org/</a>{" "}
              or{" "}
              <a href="https://www.univinspire.org/?lang=en">https://www.univinspire.org/?lang=en</a>
            </p>
          </div>
          <div className="image-area">
            <img src="./images/UNIVTHEME1.jpg" alt="univ theme image" />
          </div>
        </div>
      </div>

      {/* PHOTO ROW */}
      <div className="photo-row">
        <div className="photo-wrap">
          <img src="/images/YOUNGAIMG3.jpeg" alt="Image 1" />
        </div>
        <div className="photo-stack">
          <div className="photo-wrap">
            <img src="/images/YOUNGAIMG4.jpg" alt="Image 2" />
          </div>
          <div className="photo-wrap">
            <img src="/images/YOUNGAIMG5.JPG" alt="Image 3" />
          </div>
        </div>
        <div className="photo-wrap">
          <img src="/images/YOUNGAIMG6.jpg" alt="Image 4" />
        </div>
        <div className="photo-stack">
          <div className="photo-wrap">
            <img src="/images/YOUNGAIMG7.jpg" alt="Image 5" />
          </div>
          <div className="photo-wrap">
            <img src="/images/YOUNGAIMG8.jpg" alt="Image 6" />
          </div>
        </div>
      </div>
      {/* <p className="py-10"></p> */}
      <Footer/>
      
    </div>
  );
};

export default YoungAdults;
