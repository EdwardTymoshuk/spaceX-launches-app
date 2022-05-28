import './MainPage.css'
import { useState } from 'react'
import { getLaunches, getRockets } from '../../api/api'
import { LaunchPreviewCard } from '../LaunchPreviewCard/LaunchPreviewCard'
import { useEffect } from 'react'

const MainPage = (props) => {

    const [launches, setLaunches] = useState('')
    const [nextLaunch, setNextLaunch] = useState('')
    const [lastLaunch, setLastLaunch] = useState('')
    const [launchpads, setLaunchpads] = useState('')
    const [rockets, setRockets] = useState('')

    useEffect(() => {
        const getLaunchesList = async ()  => {
            let launchesList = await getLaunches()
            setLaunches(launchesList)
        }
        getLaunchesList()
    }, [])

    console.log(launches)
   const getNextLaunch =  () => {
    const today = new Date()
    let str = !!launches && launches.filter(v => new Date(v.date_utc) > today)[0]
        setNextLaunch(str)
    }
    getNextLaunch()

    const getLastLaunch =  () => {
        const today = new Date()
        let successLastLaunches = !!launches && launches.filter(v => new Date(v.date_utc) < today && !!v.success)
        setLastLaunch(successLastLaunches.pop())
    }
    getLastLaunch()

    useEffect(() => {
    const getLaunchpads = async () => {
        const launchpad = await fetch('https://api.spacexdata.com/v4/launchpads').then(res => res.json(res))

        setLaunchpads(launchpad)
    }
    getLaunchpads()

    const getRocketsList = async () => {
       let rockets = await getRockets()
       return setRockets(rockets)
    }
    getRocketsList()
},[launches])


    
    
    
    


    return (
        <section className="home">
            <header className="masthead">
                <div className="container">
                    <div className="masthead-heading text-uppercase">SPACE X launches</div>
                    <div className="masthead-subheading">Check the next Space X launch</div>
                    <a className="masthead-button" href="#services"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg></a>
                </div>
            </header>
            <container className="card-group launchpads-preview">
                <LaunchPreviewCard launch={nextLaunch} launchpads={launchpads} launchTime='Next' rockets={rockets}/>
                <LaunchPreviewCard launch={lastLaunch} launchpads={launchpads} launchTime='Last' rockets={rockets}/>
               </container>
        </section>
    )
}

export default MainPage