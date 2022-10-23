import axios from "axios";
import Image from "next/image";
import Meta from "../../../components/Meta";
import { server } from "../../../config";

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={movie.title} />
      <div className="px-3">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md"
          alt={movie.title}
        />
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
        <p className="text-gray-600 text-sm mt-5">
          Genre :{" "}
          <span className="font-bold">
            {movie.genres.map((genre) => genre.name).join(",")}
          </span>
        </p>
        <p className="text-gray-600 text-sm">
          Date de réalisation :{" "}
          <span className="font-bold">{movie.release_date}</span>
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=fr-FR&page=1`
  );
  const movie = res.data;

  return {
    props: { movie },
  };
}

// pré-rendu de tous les chemins possible
export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
export default Movie;
