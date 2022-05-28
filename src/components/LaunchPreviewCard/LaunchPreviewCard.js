import cardImg from  "../../assets/img/card-header.jpeg"

const LaunchPreviewCard = ({launch, launchpads, launchTime, rockets, ...rest}) => {
    return(
        <div className="card">
        <img className="card-img-top" src={!!launch ? (!launch.links.patch.large ? cardImg : launch.links.patch.large) : ''} height="500px" width="auto" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{launchTime} launch</h5>
<p className="card-text">Mission: {!!launch && launch.name}</p>
<p className="card-text">Rocket: {(!!rockets && rockets.filter(v => v.id === launch.rocket)[0].name)}</p>
<p className="card-text">Launchpad: {!!launchpads && launchpads.filter(v => v.id === launch.launchpad)[0].name}</p>
<p className="card-text">Date (UTC): <small className="text-muted">{new Date(!!launch && launch.date_utc).toString()}</small></p>

            <button className="btn btn-success" >More</button>
        </div>
    </div>
    )
}

export {LaunchPreviewCard}