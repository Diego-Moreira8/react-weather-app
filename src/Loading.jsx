import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    opacity: 0.25;
  }
  
  75% {
    opacity: 1;
  }
  
  100% {
    opacity: 0.25;
  }
`;

const StyledLoading = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2rem;
`;

const Square = styled.div`
  background-color: #ccc;
  border-radius: 1rem;
  animation: ${blink} 2s linear infinite;
`;

const Header = styled(Square)`
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
`;

const TempsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0 2rem;
  height: 300px;
`;

const MaxTemp = styled(Square)`
  width: 150px;
  height: 2rem;
`;

const CurrTemp = styled(Square)`
  width: 100px;
  height: 4rem;
`;

const MinTemp = styled(Square)`
  width: 150px;
  height: 2rem;
`;

export default function Loading() {
  return (
    <StyledLoading>
      <Header />

      <TempsWrapper>
        <MaxTemp />
        <CurrTemp />
        <MinTemp />
      </TempsWrapper>
    </StyledLoading>
  );
}
