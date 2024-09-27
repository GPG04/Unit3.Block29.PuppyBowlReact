import { useState, useEffect } from 'react'
import { fetchSinglePlayer } from '../API'
import { useParams, useNavigate } from 'react-router-dom'
import { deletePlayer } from '../API'

export default function SinglePlayer() {
    const navigate = useNavigate()
    let { id } = useParams()

    const [player, setPlayer] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function getSinglePlayer() {
            const APIRes = await fetchSinglePlayer( id )
            console.log(APIRes)
            console.log(APIRes.data.player)
            if (APIRes.success) {
                setPlayer(APIRes.data.player)
            } else {
                setError(error.message)
            }
        }
        getSinglePlayer()
    }, [])

    async function handleDelete() {
        try {
            const result = await deletePlayer(player.id)
            console.log(result)
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
      {error && <p>{error}</p>}
      {player && 
      <div>
      <img src={player.imageUrl} alt="puppy image" className="images"/>
      <h3 key={player.id}>{player.name}</h3>
      <h3>{player.breed}</h3>
      <button onClick={handleDelete}>Delete Player</button>
      <button onClick={() => navigate("/")}>Go back</button>
      </div>
      }
    </div>
    )
}
