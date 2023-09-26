import styled from "styled-components";

const StyledErrorScreen = styled.div`
  background-color: #a00;
  color: #fff;
  padding: 1rem 2rem;
  margin: 2rem;
  border-radius: 1rem;
  text-align: center;
`;

export default function ErrorScreen() {
  return (
    <StyledErrorScreen>
      Houve um erro ao carregar as informações!
      <br />
      Verifique se o nome da cidade está correto e se há conexão com a internet.
    </StyledErrorScreen>
  );
}
