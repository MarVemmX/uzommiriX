import React, { useEffect } from "react";
import "./Community.css";
import Footer from "../Footer";
import NavBar from "../Hero/NavbarBlack";


const CommunityService = () => {
    useEffect(() => {
        document.title = "Community Service - UZOMMIRI"; 
      }, []);
  return (
    <div>
    <NavBar/>
      {/* COMMUNITY HERO */}
      <div className="comm-hero">
        <h1>Community Service</h1>
        <p>BLOOM Hearts and Hands:</p>
      </div>

      {/* PHOTO ROLL */}
      <div className="photo-roll">
        {["COMMIMG1.jpg", "COMMIMG2.jpg", "COMMIMG3.jpg", "COMMIMG4.jpg", "COMMIMG5.jpg", "COMMIMG6.jpg"].map((img, index) => (
          <div className="photo-wrap" key={index}>
            <img src={`/images/${img}`} alt="community service" />
            <div className="overlay absolute mx-0 "></div>
          </div>
        ))}
      </div>

      {/* TEXT-AREA */}
      <div className="vessel">
        <div className="vessel-text">
          <h3>
            The center encourages and provides opportunities for “give back to the society” initiatives among
            beneficiaries. The major areas are:
          </h3>
          <h3>Literacy project</h3>
          <p>
            The Literacy Project, formerly known as the Obiagu project, is an initiative of Uzommiri Study Centre. The
            goal of the project is to improve the literacy level of the children of Obiagu community, a sub urban area
            in Enugu and its environs by complementing the education they receive in their schools, with a focus on the
            girl child. Since its inception in 2017, the project has impacted the lives of over 200 beneficiaries, both
            primary and secondary school girls within the class range of primary 3 - SS3, through the teaching of
            Mathematics, English Language and the Sciences using a personalized approach. It also seeks to improve and
            promote the culture of reading amongst the children, by providing them with standard story books and novels,
            as well as a comfortable reading space where they could study. Other activities like reading exercises,
            essay competitions, spelling bee events etc, are also organized by the volunteers who identify with this
            project, many of whom are beneficiaries of the formation given by the centre for different age groups, to
            further improve the reading and writing skills of the girls in the literacy program.
          </p>
          <br />
          <p>
            In addition to these, skill acquisition classes are given to encourage the participants to become
            financially self-sustaining soon after their basic education. Over the years, participants have been taught
            the art of hair-dressing, soap making, cookery, housekeeping and basic computer skills.
          </p>
          <br />
          <br />
          <p>Outreaches</p>
          <div className="video-container">
                <iframe src="https://www.youtube.com/embed/5BPPml-W2U0"></iframe>
          </div>
          <p>
            Apart from the literacy project at Obiagu community, Uzommiri continues to organize similar projects at
            other communities within and beyond Enugu. Some of which include medical outreaches, literacy and numeracy
            classes as well as skill acquisition sessions. The communities in Enugu state which have been beneficiaries
            of such services in recent times include; Umulumgbe, Eke and Awlaw.
          </p>
          <br />
          <br />
          <h3>Ayudante Mentoring Programme</h3>
          <p>
            A six - eight month programme for female undergraduate students in their second to final year of study, with
            a two-fold aim. "Ayudante" is a spanish word meaning "assistant", "helper" "aide" or "companion", different
            words which reflect a personal coach or guide. These express in different ways the core part of this
            mentoring and volunteering program, which is to provide opportunities for young people who are interested in
            having professional mentors to guide them on their chosen path so as to achieve a balanced personality and
            impact younger students. Since mentoring is a sure path for the growth of great leaders, as well as a
            stabilizing influence for having a balanced personality and changing the world. Besides having a mentor
            assigned to them, participants go through sessions covering key areas of personal development, including:
            Emotional Intelligence, Personal Time Management, Teamwork, Communication, Home and Financial
            Responsibility, etc. All these serve to prepare them for the second part of the programme which is to become
            mentors to other people, which highlights the volunteering part of this programme.
          </p>
          <br />
          <p>Click on the link below to register for the Ayudante Mentoring Programme today:</p>
          <p>
            <a href="https://bit.ly/Ayudante-Mentoring-Programme">https://bit.ly/Ayudante-Mentoring-Programme</a>
          </p>
        </div>
      </div>

      {/* QUAD-PHOTO ROLL */}
      <div className="qphoto-roll">
        {["COMMIMG7.jpg", "COMMIMG8.jpg", "COMMIMG9.jpg", "COMMIMG10.jpg", "COMMIMG11.jpg", "COMMIMG12.jpg", "COMMIMG13.jpg", "COMMIMG14.jpg"].map(
          (img, index) => (
            <div className="qphoto-wrap" key={index}>
              <img src={`/images/${img}`} alt="community service" />
            </div>
          )
        )}
      </div>
      {/* <p className="py-10"></p> */}
      <Footer/>
    </div>
  );
};

export default CommunityService;
