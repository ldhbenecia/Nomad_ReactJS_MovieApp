import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams()
  const [movie, setMovies] = useState({})
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(json)
    setMovies(json.data.movie)
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <img src={movie.medium_cover_image} />
      <p>DownLoad: {movie.download_count}</p>
    </div>
  )
}

export default Detail
