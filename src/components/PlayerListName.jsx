import React from "react"
import { useNavigate } from "react-router-dom"

export default function PlayerListName({ player }) {
    const navigate = useNavigate()
    return (
        <div key={player.id} className="puppyDiv">
            <img src={player.imageUrl} alt="puppy image" className="images"/>
            <h3>{player.name}</h3>
            <button onClick={() => {navigate(`/players/${player.id}`)}}>See Details</button>
        </div>
    )
}