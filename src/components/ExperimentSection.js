import { useState } from "react";

export default function ExperimentSection() {
    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        setInputText(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Text was submitted');
    }

    return (
        <section className="section is-small">
            <h1 className="section-divider-title">Try It Out!</h1>

            <form onSubmit={handleSubmit}>
                <div className="field text-input-field">
                    <div className="control">
                        <textarea
                            className="textarea is-medium is-link is-focused"
                            placeholder="Paste Text Here"
                            value={inputText}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <input className="button is-primary is-light is-outlined is-fullwidth" type="submit" value="Submit" />
                </div>
            </form>
        </section>
    )
}