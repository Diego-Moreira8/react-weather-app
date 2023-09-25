import { useState } from "react";

export default function CityInput({ handleSubmit }) {
  const [cityInput, setCityInput] = useState("");

  const handleCityInputChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Nome da cidade:</label>
      <input
        value={cityInput}
        onChange={handleCityInputChange}
        type="text"
        name="city"
        id="city"
      />
      <button type="submit">🔎</button>
    </form>
  );
}
