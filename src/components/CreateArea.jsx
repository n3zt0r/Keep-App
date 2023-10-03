import React, { useState } from "react";

export const CreateArea = (props) => {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  const addContent = (event) => {
    const { value, name } = event.target;
    setContent((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <div>
      <form>
        <input
          onChange={addContent}
          name="title"
          placeholder="Title"
          value={content.title}
        />
        <textarea
          onChange={addContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(content);
            setContent({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};
