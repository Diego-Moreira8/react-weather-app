import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  height: 32px;

  @media (max-width: 500px) {
    flex-flow: column;
    height: 48px;
  }

  @media (max-width: 300px) {
    height: 64px;
  }

  @media (max-width: 180px) {
    height: 80px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Construído por Diego Moreira em 2023.</p>
      <p>
        <a href="https://diegomoreira.vercel.app/" target="_blank">
          Visite o meu site!
        </a>
      </p>
    </StyledFooter>
  );
}
