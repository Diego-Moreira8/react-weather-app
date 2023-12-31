import { useState, useEffect } from "react";
import CityInput from "./Components/CityInput";
import styled from "styled-components";
import Thermometer from "./Components/Thermometer";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import ErrorScreen from "./Components/ErrorScreen";

const Body = styled.div`
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const Content = styled.div`
  max-width: 500px;
  margin: 1rem auto;
`;

export default function App() {
  const [city, setCity] = useState("São Paulo");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setError(null);
        setData(null);
        setLoading(true);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${"metric"}&appid=f665e17e864ad3ebcceb327ae8c2131a`
        );

        if (!response.ok) {
          throw new Error(`Error on fetch: ${response.status}`);
        }

        let data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <Body>
      <Content>
        <header>
          <CityInput handleSubmit={handleSubmit} />
        </header>

        <main>
          {loading && <Loading />}
          {error && <ErrorScreen />}
          {data && <Thermometer data={data} />}
        </main>
      </Content>

      <Footer />
    </Body>
  );
}
