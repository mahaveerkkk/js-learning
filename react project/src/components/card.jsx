function Card(props){
    console.log(props.tags[0])
    
   
    return <div className="card">
        <div className="top">
            <img src={props.logo} alt="Amazon logo" />
            <button className="save">♡ Save</button>
        </div>
        <div className="mid">
            <p className="company">{props.ny} <span>{props.posted}</span></p>
            <h2>{props.title}</h2>
            <div className="tags">
                <span>{props.tags[0]} </span>
                <span>{props.tags[1]}</span>
                <span>{props.tags[2]}</span>
                <p className="location">📍 {props.location}</p>
            </div>

        </div>
        <div className="bottom">
            <div className="salary">
            <h3>{props.salary}<span>/hour</span></h3>
            <p>{props.salaryType}</p> </div> 
            <button className="apply" onClick={() => window.open(props.applyLink, "_blank")}
            

            > Apply Now → </button>
        </div>

        </div>
    
}
export default Card;