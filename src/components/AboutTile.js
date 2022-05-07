import illustration from './illustrations/jumping.png';

export default function AboutTiles() {
    return (
        <div className="tile is-ancestor" style={{marginTop: "3rem"}}>
            <div className="tile is-vertical is-7">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification frosted-bg">
                            <p className="title">Vertical...</p>
                            <p className="subtitle">Top tile</p>
                        </article>
                        
                        <article className="tile is-child notification is-warning">
                            <p className="title">...tiles</p>
                            <p className="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">Middle tile</p>
                            <p className="subtitle">With an image</p>
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" alt="something"/>
                            </figure>
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
                        <img src={illustration} alt="jumping man"/>
                    </div>
                </article>
            </div>
        </div>
    )
}