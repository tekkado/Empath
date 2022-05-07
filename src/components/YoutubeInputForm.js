import { useState } from "react";

export default function YoutubeInputForm() {
    const [inputVideoId, setInputVideoId] = useState("");

    const handleChange = (event) => {
        setInputVideoId(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Video ID was submitted: ' + inputVideoId);
    }

    return (
        <section className="section is-small">
            <h1 className="section-divider-title">Try It Out!</h1>

            <article class="message is-info is-small" style={{marginTop: "1rem"}}>
                <div class="message-header">
                    <p>Grabbing the Youtube Video URL</p>
                </div>
                <div class="message-body">
                    In the Youtube Video URL, copy the Video-ID (id found at "v=id") and paste it in the below textarea and hit submit.<br />
                    &#8594; EX. https://www.youtube.com/watch?v=<strong>e5wUilOeOmg</strong> &#8594; Video-Id = <strong>e5wUilOeOmg</strong>
                </div>
            </article>

            <form onSubmit={handleSubmit}>
                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input
                            class="input is-link is-focused"
                            type="text"
                            placeholder="Enter Youtube URL"
                            value={inputVideoId}
                            onChange={handleChange}
                        />
                    </p>
                    <input
                        className="button is-primary is-light is-outlined"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </section>
    )
}