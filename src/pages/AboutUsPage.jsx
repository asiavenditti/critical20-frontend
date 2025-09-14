import React from "react";
import "../style/AboutUsStyle.css";

export default function AboutUsPage() {
  return (
    <div className="about-lg">
      {/* Sezione con Banner titolo + Icone */}
      <section className="hero-banner">
        <h1 className="main-title">Chi Siamo</h1>
        <p className="subtitle">
          Un team di sviluppatori con la passione per i giochi da tavolo.
        </p>
        <span className="span-subtitle m-0">seguici su github</span>

        {/* Avatar Team */}
        <div className="team-avatars">
          <a
            href="https://github.com/asiavenditti"
            target="_blank"
            rel="noopener noreferrer"
            title="Asia"
          >
            <img src="../imgProduct/asia.jpeg" alt="Asia" className="avatar" />
          </a>
          <a
            href="https://github.com/DavideCriscuolo"
            target="_blank"
            rel="noopener noreferrer"
            title="Davide"
          >
            <img
              src="../imgProduct/davide.png"
              alt="Davide"
              className="avatar"
            />
          </a>
          <a
            href="https://github.com/edoardolova"
            target="_blank"
            rel="noopener noreferrer"
            title="Edoardo"
          >
            <img
              src="../imgProduct/edoardo.png"
              alt="Edoardo"
              className="avatar"
            />
          </a>
          <a
            href="https://github.com/marzia-blasi"
            target="_blank"
            rel="noopener noreferrer"
            title="Marzia"
          >
            <img
              src="../imgProduct/marzia.jpeg"
              alt="Marzia"
              className="avatar"
            />
          </a>
          <a
            href="https://github.com//CristianBuonocore02"
            target="_blank"
            rel="noopener noreferrer"
            title="Cristian"
          >
            <img
              src="../imgProduct/cristian.jpeg"
              alt="Cristian"
              className="avatar"
            />
          </a>
        </div>
      </section>

      {/* Sezione contenuto principale */}
      <section className="about-content">
        <div className="image-container">
          <img
            src="../imgProduct/critical_dev.png"
            alt="CriticalDev"
            className="team-logo"
          />
        </div>
        <div className="text-container">
          <h2>Critical Dev</h2>
          <p>
            Dopo innumerevoli serate passate tra dadi, meeple e carte, ci siamo
            chiesti: perché non trasformare questa passione in qualcosa di
            concreto?
            <br />
            <br />
            Così è nato il nostro progetto: un{" "}
            <strong>e-commerce dedicato ai giochi da tavolo</strong>, pensato
            per offrire ai giocatori di ogni tipo un punto di riferimento
            semplice, curato e creato da chi davvero ama questo mondo.
            <br />
            <br />
            <strong>Prima di essere dev, siamo giocatori</strong>
            <br></br> e ora.. vogliamo condividere questa passione con tutti
            voi.
          </p>
        </div>
      </section>
    </div>
  );
}
