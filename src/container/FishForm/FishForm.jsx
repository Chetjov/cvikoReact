import React, { useState } from "react";
import "./FishForm.css";

function ListForm({ data, handleChange, handleAdd }) {
  const [size, setSize] = useState(""); // Stav pro uchování velikosti ryby

  return (
    <div className="fish-form">
      <input
        type="text"
        placeholder="fish name"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <label htmlFor="small-size">
        <input
          id="small-size"
          type="radio"
          name="size"
          value="small"
          checked={data.size === "small"} // Kontrola, zda je vybraná velikost malá
          onChange={handleChange} // Funkce pro změnu velikosti ryby
        />
        small
      </label>
      <label htmlFor="big-size">
        <input
          id="big-size"
          type="radio"
          name="size"
          value="big"
          checked={data.size === "big"} // Kontrola, zda je vybraná velikost velká
          onChange={handleChange} // Funkce pro změnu velikosti ryby
        />
        big
      </label>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ListForm;
