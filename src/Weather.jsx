export default function Weather({ data }) {
  return (
    <main>
      {data && <h1>{data.name}</h1>}
      {loading && <div>Carregando...</div>}
      {error && <div>{`Houve um problema ao buscar os dados.`}</div>}
      {data && <div>{data.main.temp}º</div>}
    </main>
  );
}
