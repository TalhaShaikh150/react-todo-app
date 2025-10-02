import React, { useEffect, useState } from "react";

function Abc() {
  const [items, setitems] = useState(["ali", "rizwan", "umer", "wajid"]);

  const [editIndex, seteditIndex] = useState(null);
  const [editValue, seteditValue] = useState("");

  const handleDel = (i) => {
    const update = items.filter((_, index) => index !== i);
    setitems(update);
  };

  const handleEdit = (i) => {
    seteditIndex(i);
    seteditValue(items[i]);
  };

  const handleUpdate = (e) => {
    seteditValue(e.target.value);
  };

  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>
          {editIndex == index ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => {
                  handleUpdate(e);
                }}
              />
              <button
                onClick={() => {
                  items[editIndex] = editValue;
                  let newvalue = [...items];

                  setitems(newvalue);
                  seteditValue("");
                  seteditIndex();
                }}
              >
                Update
              </button>
            </>
          ) : (
            <>
              {item}

              <button onClick={() => handleDel(index)}>Del</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </div>
  );
}

export default Abc;
