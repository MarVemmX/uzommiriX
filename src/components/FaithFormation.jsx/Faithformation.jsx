import React, { useEffect }  from "react";
import "./faithformation.css";
import Footer from "../Footer";
import NavBar from "../Hero/NavbarBlack";

// import Footer from "../Footer";

const FaithFormation = () => {
  
  useEffect(() => {
    document.title = "Faith Formation - UZOMMIRI"; 
  }, []);
  return (
    <div>
    <NavBar/>
      {/* FAITH HERO */}
      <div className="faith-hero">
        <div className="faith-hero-text">
          <h1>Faith Formation</h1>
          <p>
            Spiritual formation and care of our beneficiaries are entrusted to
            Opus Dei, a personal prelature of the Catholic Church.
          </p>
        </div>
      </div>

      {/* RETREAT AREA */}
      <div className="vessel">
        <div className="vessel-text">
          <h3>Yearly Retreats</h3>
          <div className="video-container">
            <iframe allowFullScreen src="https://www.youtube.com/embed/Y3BIIzOYzbk"></iframe>
          </div>
          <p>
            Iwollo Conference Centre, situated at the outskirts of Enugu City in
            the Eastern part of Nigeria provides a tranquil environment, lovely
            company and even better accommodation to stimulate a deeper intimacy
            with God during the annual retreats organized there. The Conference
            Centre also provides accommodation for in-house workshops,
            hospitality services, and sports facilities for guests. The
            necessary intimacy fostered during the retreats is further fueled by
            meditations given by a priest of Opus Dei, short talks on Christian
            living, holy mass, the sacrament of reconciliation to give us a
            clearer perspective on life, personal reflection, and personal
            conversations with the priest.
          </p>
          <br />
          <p>
            Follow these links{" "}
            <a href="https://forms.gle/n9NPiKpJzr9HkAkYA">Retreat for Ladies</a>{" "}
            or{" "}
            <a href="https://forms.gle/ojvLg2L7kpCnGNvq6">Retreat for Girls</a>{" "}
            to book and attend a retreat for you or your loved ones.
          </p>
        </div>
      </div>

      {/* FORMATION */}
      <div className="form-container">
        <div className="form-text">
          <div className="form-row">
            <h4>Monthly Recollection</h4>
            <p>
              Uzommiri offers young females a few hours of silence and prayer
              every month. Activities during this time include rosary, talks on
              spiritual life, and personal reflection. It's a mini retreat that
              affords participants the opportunity to refocus on the important
              things of life.
            </p>
          </div>
          <div className="form-row">
            <h4>Weekly Formation</h4>
            <p>
              Doctrine class; Classes on the Christian faith given by a priest
              or a lay person are held every Wednesday (4.30 - 5.30pm). These
              classes help participants understand, explain, and apply the core
              truths of the Christian doctrine. Confessions also hold after the
              classes every week.
            </p>
          </div>
          <div className="form-row">
            <h4>Meditation</h4>
            <p>
              Christian meditation "engages thought, imagination, emotion, and
              desire" in prayer. (Catechism of the Catholic Church, 2708). It is
              also known as mental prayer. The meditations in the centre
              preached by a priest, every Saturday (5.00-5.30pm) help to foster
              conversations with God and ultimately bring one closer to Him.
              Benediction holds afterwards.
            </p>
          </div>
          <div className="form-row" style={{ borderRight: "none" }}>
            <h4>Catechism</h4>
            <p>
              Some volunteers amongst the beneficiaries of the centre extend the
              formation they receive to other young people through the teaching
              of catechism. They prepare the school girls for first holy
              communion, confirmation and also offer post confirmation classes.
            </p>
          </div>
        </div>
      </div>

      {/* FAITH IMG */}
      <div className="faith-img-container">
        <img src="/images/FAITHIMG1.jpg" alt="Faith formation" />
        <div className="overlayx absolute mx-0 lg:w-[91.3%] lg:mx-[3.8rem]"></div>
      </div>
      {/* <p className="py-10"></p> */}
      <Footer/>
    </div>
  );
};

export default FaithFormation;
