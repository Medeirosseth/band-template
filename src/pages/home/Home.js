import { useFetch } from "../../hooks/useFetch";

//styles
import "./home.css";

//components
import ShowList from "../../components/ShowList";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/shows");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <ShowList shows={data} />}
    </div>
  );
}
