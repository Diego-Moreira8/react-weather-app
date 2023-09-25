import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border: 1px solid #000;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  border-radius: 1rem 0 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

const Input = styled.input`
  border: none;
  min-width: 80px;
  font-size: inherit;
  font-weight: bold;
  padding: 0.25rem;
  height: 100%;

  &::placeholder {
    font-weight: normal;
    font-style: italic;
    color: gray;
  }
`;

const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 1rem 1rem 0;
  width: 3rem;
  height: 100%;
  cursor: pointer;
  background-color: transparent;
`;

export default function CityInput({ handleSubmit }) {
  const [cityInput, setCityInput] = useState("");

  const handleCityInputChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="city">Nome da cidade:</Label>
      <Input
        value={cityInput}
        onChange={handleCityInputChange}
        type="text"
        name="city"
        id="city"
        placeholder="Ex.: sao paulo"
      />
      <Button type="submit">🔎</Button>
    </StyledForm>
  );
}
