import { useState, useEffect, use } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch(err) {
            console.log(error)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    };


    return (
        <div className="Home py-11 pr-4 w-full box-border max-md:p-4 max-md:py-8 max-md:pr-4">
            <form
                onSubmit={handleSearch}
                className="search-form max-w-xl mt-0 mb-8 mx-auto flex gap-4 py-0 px-4 box-border max-md:mb-4"
            >
                <input
                    type="text"
                    placeholder="Search for Movies..."
                    className="search-input flex-1 py-2 px-3 bg-neutral-700 rounded-lg text-white text-md focus:outline-none focus:ring"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button py-2.5 px-4 bg-red-600 rounded-lg cursor-pointer font-medium transition hover:duration-200 hover:bg-red-700/100">
                    Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
            <div className="loading text-center align-middle text-3xl">Loading...</div>
            ) : (
                <div className="movies-grid pr-8 p-4 w-full box-border ">
                {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
            )}

            
        </div>
    );
}

export default Home;
