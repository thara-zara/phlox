import "./Icon.css";

function IconData(props){
    return(
        <>
            <img src={props.image} alt="my-img" />
            <span> 
                <h4>{props.text}</h4>
                <p>{props.subtext}</p>
            </span>
        </>
    )
}
export default IconData;