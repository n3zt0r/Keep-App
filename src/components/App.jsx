import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note";
import { CreateArea } from "./CreateArea";

export const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (content) => {
    setNotes((prevNotes) => {
      return [...prevNotes, content];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};
