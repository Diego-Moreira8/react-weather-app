import styled from "styled-components";
import CityName from "./CityName";
import CurrentTemp from "./CurrentTemp";

const TempWrapper = styled.div`
  margin: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const TempBar = styled.div`
  width: 1.5rem;
  height: 300px;
  border-radius: 1rem;
  background: linear-gradient(
    rgba(255, 43, 0, 1) 0%,
    rgba(255, 236, 0, 1) 50%,
    rgba(19, 126, 255, 1) 100%
  );
`;

const Temperatures = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export default function Thermometer({ data }) {
  const temp = {
    max: data.main["temp_max"].toFixed(),
    current: data.main.temp.toFixed(),
    min: data.main["temp_min"].toFixed(),
  };

  return (
    <div>
      <CityName name={data.name} />

      <TempWrapper>
        <TempBar />
        <Temperatures>
          <div>Máxima: {temp.max}º</div>

          <CurrentTemp temp={{ ...temp }} />

          <div>Mínima: {temp.min}º</div>
        </Temperatures>
      </TempWrapper>
    </div>
  );
}
