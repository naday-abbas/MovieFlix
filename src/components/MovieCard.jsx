import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return(
        <div className="movie-card relative rounded-lg overflow-hidden bg-neutral-900/80 transition hover:-translate-y-1.5 hover:duration-200 flex flex-col h-full max-md:text-sm ">
            <div className="movie-poster w-full">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-opacity flex flex-col justify-end p-4">
                    <button className={`favorite-btn ${favorite ? "active" : ""} absolute top-4 right-4 text-2xl p-4 bg-black/50 w-10 h-10 flex items-center justify-center transition hover:duration-200 hover:bg-black/80 max-md:w-8 max-md:h-8 max-md:text-lg`} onClick={onFavoriteClick} >❤︎</button>
                </div>
            </div>
            <div className="movie-info p-4 flex-1 flex flex-col gap-2 max-md:p-3">
                <h3 className="text-base m-0">{movie.title}</h3>
                <p className="text-neutral-500 text-sm">{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard