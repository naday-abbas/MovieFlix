import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
    const {favorites} = useMovieContext();

    if (!favorites || favorites.length === 0) {
        return (
            <div className="max-md:px-6">
                <div className="favorites-empty text-center py-16 px-8 bg-black/20 rounded-xl my-8 mx-auto max-w-xl">
                    <h2 className="mb-4 text-3xl text-red-600 font-bold">No Favorite Movies Yet</h2>
                    <p className="text-neutral-400 text-xl leading-normal">
                        Start adding movies to your favorites, and they will appear here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2 className="text-center py-8 font-bold text-3xl">Your Favorites</h2>
            <div className="movies-grid-favorites pr-8 p-4 w-full box-border">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
export default Favorites