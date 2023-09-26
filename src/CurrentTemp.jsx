import styled from "styled-components";

const CurrentTempContainer = styled.div`
  height: 100%;
  position: relative;
`;

const CurrentTempWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: absolute;
`;

const CurrentTemperature = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;

export default function CurrentTemp({ temp }) {
  const currTempRatio = () => {
    if (temp.max === temp.min) {
      // Prevents division by 0
      return 0.5;
    } else {
      const ratio = (temp.current - temp.min) / (temp.max - temp.min);
      // Prevents negative values ​​from being returned
      return ratio < 0 ? 0 : ratio;
    }
  };

  const currTempPosition = {
    // Properties below position the current temperature
    bottom: `calc(50% * ${currTempRatio()})`,
    transform: `translateY(calc(-100% * ${currTempRatio()}))`,
  };

  return (
    <CurrentTempContainer>
      <CurrentTempWrapper style={currTempPosition}>
        ◀
        <div>
          <div>Agora:</div>
          <CurrentTemperature>{temp.current}º</CurrentTemperature>
        </div>
      </CurrentTempWrapper>
    </CurrentTempContainer>
  );
}
