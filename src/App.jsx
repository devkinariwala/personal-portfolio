import "./App.css";
import React, { useRef } from "react";
import Particles from "./components/Particles/Particles";
import TextPressure from "./components/TextPressure";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import ResumeButton from "./components/ResumeButton";
import InfiniteMenu from "./components/InfiniteMenu/InfiniteMenu";
import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import jsImg from "./assets/js.png";
import reactImg from "./assets/react.png";
import nodeImg from "./assets/nodejs.png";
import supabaseImg from "./assets/supabase.png";
import phpImg from "./assets/php.png";
import javaImg from "./assets/java.png";
import cppImg from "./assets/cpp.png";
import sqlImg from "./assets/sql.png";
import tailwindImg from "./assets/tailwind.png";
import pythonImg from "./assets/python.png";
import authImg from "./assets/auth.png";
import quoteImg from "./assets/quote.png";
import portfolioImg from "./assets/portfolio.png";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import Card from "./components/Card";
import Form from "./components/Form/Form";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { color } from "framer-motion";
import { css } from "styled-components";

function App() {
  const velocity = 100;
  const scrollContainerRef = useRef(null);
  const items = [
    {
      image: reactImg,
      link: "https://react.dev/",
    },
    {
      image: nodeImg,
      link: "https://nodejs.org/",
    },
    {
      image: jsImg,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      image: cssImg,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      image: htmlImg,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      image: supabaseImg,
      link: "https://supabase.com/",
    },
    {
      image: phpImg,
      link: "https://www.php.net/",
    },
    {
      image: javaImg,
      link: "https://www.oracle.com/java/",
    },
    {
      image: cppImg,
      link: "https://isocpp.org/",
    },
    {
      image: sqlImg,
      link: "https://www.mysql.com/",
    },
    {
      image: pythonImg,
      link: "https://www.python.org/",
    },
    {
      image: tailwindImg,
      link: "https://tailwindcss.com/",
    },
  ];

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Fixed Background Particles */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
          backgroundColor: "#000",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={800}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            marginTop: "8vh",
            marginBottom: "8vh",
          }}
        >
          <TextPressure />
        </section>
        <section
          ref={scrollContainerRef}
          style={{
            position: "relative",
            width: "100vw",
            overflow: "hidden",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "80px",
          }}
        >
          <ScrollVelocity
            scrollContainerRef={scrollContainerRef}
            texts={["About Me", "About Me"]}
            velocity={100}
            className="custom-scroll-text"
          />
        </section>
        <section
          style={{
            width: "100vw",
            height: "600px",
            position: "relative",
            margin: 0,
            padding: 0,
            left: 0,
            right: 0,
          }}
        >
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </section>

        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            marginBottom: "8vh",
          }}
        >
          <ScrambledText
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
            style={{ textAlign: "left", fontSize: "1.5rem" }}
          >
            As a student at SRM University (KTR Campus), I am passionately
            exploring the world of coding and technology. Languages I'm
            proficient in:
            <br />
            <br />
            1. HTML/CSS/JavaScript
            <br />
            2. ReactJS
            <br />
            3. NodeJS
            <br />
            4. PHP
            <br />
            5. C<br />
            6. C++
            <br />
            7. Python
            <br />
            8. Java
            <br />
            9. MySQL
            <br />
            <br />I bring a solid foundation in web development and programming.
            Eager to learn and adapt, I am driven by a curiosity for emerging
            technologies and a commitment to mastering the art of coding.
            Excited about the possibilities that lie ahead, I am open to
            connecting with like-minded individuals, mentors, and opportunities
            in the dynamic field of technology. Let's connect and explore the
            endless possibilities together.
          </ScrambledText>
          <ResumeButton />
        </section>
        <section
          ref={scrollContainerRef}
          style={{
            position: "relative",
            width: "100vw",
            overflow: "hidden",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <ScrollVelocity
            scrollContainerRef={scrollContainerRef}
            texts={["Skills", "Skills"]}
            velocity={100}
            className="custom-scroll-text-skills"
          />
        </section>
        <section
          style={{
            width: "100vw", // Take full viewport width
            height: "600px",
            position: "relative",
            margin: "4vw 0 8vh 0",
            padding: 0,
            left: 0,
            zIndex: 2,
            right: 0,
            maxWidth: "100vw", // Prevent max-width from constraining
            overflow: "hidden", // Prevent scrollbars if content overflows
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "100%",
              marginTop: "4vw",
              position: "relative",
              margin: 0,
              padding: 0,
            }}
          >
            <InfiniteMenu items={items} />
          </div>
        </section>
        <section
          ref={scrollContainerRef}
          style={{
            position: "relative",
            width: "100vw",
            overflow: "hidden",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <ScrollVelocity
            scrollContainerRef={scrollContainerRef}
            texts={["Projects", "Projects"]}
            velocity={100}
            className="custom-scroll-text-skills"
          />
        </section>
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "8vh auto 8vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Card
            image={authImg}
            title="Authentication System"
            description="A basic demonstration of Supabase Authentication and also SignUp/Login using Google."
            buttonLink="https://github.com/devkinariwala/basic-supabaseAuth"
          />
          <Card
            image={quoteImg}
            title="Random Quote Generator"
            description="A Random Quote Generator built using React+Vite and Material UI."
            buttonLink="https://github.com/devkinariwala/quote-generator"
          />
          <Card
            image={portfolioImg}
            title="Financial Portfolio Management Tool"
            description="Financial Portfolio Management Tool designed to simplify asset tracking and investment management. This tool is a step toward helping individuals and businesses manage their portfolios effectively without complex setups."
            buttonLink="https://github.com/devkinariwala/Financial-Portfolio-Management-Tool"
          />
        </section>
        <section
          ref={scrollContainerRef}
          style={{
            position: "relative",
            width: "100vw",
            overflow: "hidden",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <ScrollVelocity
            scrollContainerRef={scrollContainerRef}
            texts={["Contact", "Contact"]}
            velocity={100}
            className="custom-scroll-text-skills"
          />
        </section>
        {/* Two-column layout for contact section */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "8vh auto 8vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "200px",
            alignItems: "flex-start",
          }}
        >
          {/* Left: TrueFocus */}
          <div style={{ flex: 1, minWidth: 300, maxWidth: 500 }}>
            <TrueFocus
              sentence="Let's Connect"
              manualMode={false}
              blurAmount={5}
              borderColor="rgba(0, 216, 255)"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: "32px",
                justifyContent: "center",
              }}
            >
              <a
                href="mailto:devkinariwala.r@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: 32,
                  transition: "color 0.2s",
                }}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/dev_kinariwala/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: 32,
                  transition: "color 0.2s",
                }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/dev.kinariwala.1/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: 32,
                  transition: "color 0.2s",
                }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-kinariwala-6297b5280"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: 32,
                  transition: "color 0.2s",
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/devkinariwala"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: 32,
                  transition: "color 0.2s",
                }}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div
            style={{
              flex: 1,
              minWidth: 300,
              maxWidth: 500,
              background: "rgb(26 26 26 / 44%)",
              borderRadius: "20px",
              padding: "40px 32px 32px 32px",
              boxShadow: "0 4px 32px 0 rgba(0,216,255,0.10)",
              border: "1.5px solid #00d8ff33",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <Form />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
