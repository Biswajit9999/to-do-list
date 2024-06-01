import React, { useState } from "react";

const App = () => {
  let [index, setIndex] = useState(false);
  let [text, setText] = useState("");
  let [list, setList] = useState([]);

  const handelAdd = () => {
    if (text.trim()) {
      setList([
        ...list,
        { id: Date.now(), task: text.trim(), complition: false },
      ]);
      setText("");
    }
  };
  const handelDelete = (listid) => {
    setList(list.filter((task) => task.id !== listid));
  };

  const handleComplition = (comid) => {
    setList(list.map((gojo)=>
      gojo.id===comid?{...gojo,complition:!gojo.complition}:gojo
    ))
  };

  return (
    <div className="body">
      <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {text.trim() && <button onClick={handelAdd}>Add</button>}
      </div>

      <div className="list">
        {list.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={item.complition}
              onChange={()=>handleComplition(item.id)}
            />
            <span
              style={{ textDecoration: item.complition ? "line-through" : "" }}
            >
              {item.task}
            </span>
            <button onClick={() => handelDelete(item.id)}>Delete</button>
          </label>
        ))}
      </div>
    </div>
  );
};

export default App;
