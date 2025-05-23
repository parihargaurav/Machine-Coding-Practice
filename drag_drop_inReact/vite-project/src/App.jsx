import { useState } from 'react';
import Notes from './components/Notes';
import './App.css'

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Check the description of the project",
    },
    {
      id: 2,
      text: "Hey buddy lightweight",
    },
    {
      id: 3,
      text: "Have a nice day",
    },
  ]);
  

    const [note, setNote] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={() => {
            setNotes([...notes, {id: notes.length + 1, text: note}]);
            setNote("");
          }}
        >
          Add Note
        </button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App
