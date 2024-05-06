function Institution(){
    const instStyle = {
        backgroundColor: "blue",
        padding: "20px",
        margin: "20px"
    }

    return(<div style={instStyle}>
        <h2>{preprocessCSS.names}</h2>
        <h3>{props.DatesOfAttendance}</h3>
        <p>{props.description}</p>


    </div>)
}

export default Institution;