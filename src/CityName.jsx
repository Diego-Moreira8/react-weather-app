import styled from "styled-components";

const StyledCityName = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export default function CityName({ name }) {
  return <StyledCityName>{name}</StyledCityName>;
}
