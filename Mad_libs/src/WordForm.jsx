import React, { useState } from "react";

const WordForm = ({ genStory }) => {
  const INITIAL_STATE = { noun: "", adjective: "", noun2: "", verb: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    genStory(formData); // Pass form data to the parent function
    setFormData(INITIAL_STATE); // Reset the form after submission
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun">Noun:</label>
      <input
        id="noun"
        name="noun"
        value={formData.noun}
        onChange={handleChange}
      />

      <label htmlFor="adjective">Adjective:</label>
      <input
        id="adjective"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />

      <label htmlFor="noun2">Noun 2:</label>
      <input
        id="noun2"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
      />

      <label htmlFor="verb">Verb:</label>
      <input
        id="verb"
        name="verb"
        value={formData.verb}
        onChange={handleChange}
      />

      <button>Create your story!</button>
    </form>
  );
};

export default WordForm
