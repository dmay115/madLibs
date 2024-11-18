import React, { useState } from "react";
import WordForm from "./WordForm";

const Madlibs = () => {
    const [story, setStory] = useState("");

    const genStory = ({ noun, adjective, noun2, verb }) => {
        const newStory = `Once upon a time, there was a ${adjective} ${noun} that loved to ${verb} with a ${noun2}.`;
        setStory(newStory);
    };

    return (
        <div>
            <h1>Madlibs Generator</h1>
            <WordForm genStory={genStory} />
            {story && (
                <div>
                    <h2>Your Story:</h2>
                    <p>{story}</p>
                </div>
            )}
        </div>
    );
};

export default Madlibs;
