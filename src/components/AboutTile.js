import illustration from "./illustrations/jumping.png";
import illustration2 from "./illustrations/laptopgirl.png";
import illustration3 from "./illustrations/sentiment.png";

export default function AboutTiles() {
  return (
    <div className="tile is-ancestor" style={{ marginTop: "3rem" }}>
      <div className="tile is-vertical is-7">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification frosted-bg">
              <p className="title">Ever wonder why</p>
              <img src={illustration2} alt="girl on laptop" />
              <p className="subtitle">
                a YouTube video was received the way it did?
              </p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Empath is</p>
              <p className="subtitle">your answer</p>
              <figure className="image is-4by3">
                <img src={illustration3} alt="sentiment" />
              </figure>
              <br></br>
              <p style={{ textAlign: "center" }} className="subtitle">
                Empath determines whether the video or text submitted is of good
                sentiment or bad sentiment
              </p>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            <p className="title">Wide tile</p>
            <p className="subtitle">Aligned with the right tile</p>
            <div className="content">Content</div>
          </article>
        </div>
      </div>

      <div className="tile is-parent jumping-tile">
        <article className="tile is-child notification is-success">
          <div className="content">
            <img src={illustration} alt="jumping man" />
          </div>
        </article>
      </div>
    </div>
  );
}
