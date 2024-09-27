const COHORT = "2407-FTB-ET-WEB-FT";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT`

export async function fetchAllPlayers() {
    try {
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players`
        )
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error);
    }
}

export async function fetchSinglePlayer( id ) {
    try {
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players/${id}`
        )
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function createPlayer(name, breed) {
    try {
        const response = await fetch(`${baseUrl}/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                breed,
            }),
        })
        const result = await response.json()
        return result
    } catch (error) {
       console.error(error) 
    }
}

export async function deletePlayer(id) {
    try {
        const response = await fetch(`${baseUrl}/players/${id}`, {
            method: "DELETE",
        });
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}