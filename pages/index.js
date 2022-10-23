import axios from "axios";
import Hero from "../components/Hero";
import Movies from "../components/PopMovies";
import { server } from "../config";

export default function Home({ movies }) {
  // console.log(movies);
  return (
    <div className="bg-gray-700">
      <Hero />
      <Movies movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=1`
  );
  const movies = res.data;

  return {
    props: { movies },
  };
}
