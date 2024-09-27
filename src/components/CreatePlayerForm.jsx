import React, {useState} from "react"
import { createPlayer } from "../API"

export default function CreatePlayerForm({ players, setPlayers }) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const APIData = await createPlayer(name, breed)
        if (APIData.success) {
            console.log("New Player: ", APIData.data.newPlayer)

            const newPlayersList = [...players, APIData.data.newPlayer]
            setPlayers(newPlayersList)

            setName("")
            setBreed("")
        } else {
            setError(APIData.error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input
            value={name}
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            />
            <input
            value={breed}
            type="text"
            name="breed"
            placeholder="breed"
            onChange={(e) => setBreed(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}

