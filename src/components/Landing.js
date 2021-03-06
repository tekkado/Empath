import illustration from "./illustrations/casual1.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import AboutTiles from "./AboutTile";
import ContentMini from "./ContentMini";
import YoutubeInputForm from "./YoutubeInputForm";

export default function Landing() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Made with ❤️ by Devarshi",
        "Made with ❤️ by Minal",
        "Made with ❤️ by Than",
      ],

      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="columns Landing">
        <div className="column vert-center">
          <div style={{ fontSize: "3.75rem" }} className="landing-title">
            Empath
          </div>

          <div
            style={{ fontSize: "2.35rem", marginBottom: "1.5rem" }}
            className="landing-title"
          >
            your go-to advanced sentiment analysis engine.
          </div>

          <div className="has-text-centered">
            <button onClick={() => { el.current.scrollIntoView({ behavior: "smooth"});}}
              className="button is-danger is-light is-medium is-rounded is-focused center-btn"
              href="#jump"
            >
              Get Started
            </button>
            <div className="advisory-text">
              <span ref={el}></span>
            </div>
          </div>
        </div>

        <div className="column center-child">
          <img
            src={illustration}
            className="landing-illustration"
            alt="landing page illustration"
          />
        </div>
      </div>
      <section className="section is-medium">
        <h1 className="section-divider-title">What is Empath?</h1>
        <AboutTiles />
        <div
          style={{
            color: "white",
            marginTop: "6rem",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <div className="section-title">What can Empath be used for?</div>
          <ContentMini />
        </div>
      </section>

      <YoutubeInputForm />
    </>
  );
}
