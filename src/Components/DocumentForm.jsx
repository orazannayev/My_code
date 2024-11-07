import React, { useState } from "react";

function AddInfo() {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [option, setOption] = useState("");
  const [list, setList] = useState([]);
  const [seen, setSeen] = useState(false);

  const addInfo = () => {
    if (title && dateTime && option) {
      const newItem = { title, dateTime, option };
      setList([...list, newItem]);
      setSeen(true);
    }
  };

  return (
    <div>
      <h1>Add info</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="">Select Option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <button onClick={addInfo}>Add to List</button>
      <div>
        <h2>Information</h2>
        {seen ? (
          <ul>
            {list.map((item) => (
              <li>
                <strong>{item.title}</strong> - {item.dateTime} - {item.option}
              </li>
            ))}
          </ul>
        ) : (
          <p>No information.</p>
        )}
      </div>
    </div>
  );
}

export default AddInfo;
