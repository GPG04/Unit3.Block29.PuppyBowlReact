import { useState, useEffect } from 'react'
import { fetchAllPlayers } from '../API'
import { useNavigate } from "react-router-dom"
import PlayerListName from "./PlayerListName"
import CreatePlayerForm from "./CreatePlayerForm"
import "../App.css"

export default function AllPlayers () {

    const [players, setPlayers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState("")

    const navigate = useNavigate()

    console.log(players)
    useEffect(() => {
        async function getAllPlayers() {
            const APIRes = await fetchAllPlayers()
            console.log(APIRes)
            if (APIRes.success) {
                setPlayers(APIRes.data.players)
            } else {
                setError(APIRes.error.message)
            }
        }
        getAllPlayers()
    }, [])

    const playersToDisplay = searchParam
    ? players.filter((player) =>
    player.name.toLowerCase().includes(searchParam)
    )
    : players;

    return (
        <>
        <div>
            <label>
                Search:{" "}
                <input
                 type="text"
                 placeholder="search"
                 onChange={(e) =>
                    setSearchParam(e.target.value.toLowerCase()
                )}
                 />
            </label>
        </div>
        <CreatePlayerForm players={players} setPlayers={setPlayers}/>
        {error && <p>{error}</p>}
        {playersToDisplay.map((player) => {
            return <PlayerListName key={player.id} player={player}/>
        })}
        </>
    )
}