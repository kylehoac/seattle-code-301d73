function Main() {
    return <HornedBeasts title={'Horned Beast'} description="this is a description" />
}
function HornedBeasts(props) {
    //   const title = 'Horned Beast Title soon';
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={"./img/hornedbeast.jpg"} alt={"Narwal"} title={"Narwal"} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={"./img/hornedbeast.jpg"} alt={"Other Horned Beast"} title={"Other"} />
        </>
    )
}
export default Main;