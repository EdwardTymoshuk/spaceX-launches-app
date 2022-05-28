import React from 'react'

const getLaunches = async () => {
    let arr = await fetch('https://api.spacexdata.com/v4/launches').then(response => response.json())
    console.log(arr)
}
const getShips = async () => {
    let arr = await fetch('https://api.spacexdata.com/v4/ships').then(response => response.json())
    arr.map(i => console.log(i.id == "614251b711a64135defb3654"))
}

const Rockets = () => {
    return (
        <div>
        <button onClick={() => getLaunches()}>Launches</button>
        <button onClick={() => getShips()}>Ships</button>
        </div>
    )
}

export default Rockets