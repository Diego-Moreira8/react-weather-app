import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${"catalao"}&units=${"metric"}&appid=f665e17e864ad3ebcceb327ae8c2131a`
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
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      {loading && <div>Carregando</div>}
      {error && <div>{`Houve um problema ao buscar os dados: "${error}"`}</div>}
      {data && (
        <div>
          {data.name}: {data.main.temp}º
        </div>
      )}
    </div>
  );
}
