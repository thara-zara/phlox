import "./Category.css";

function CategoryDetails(props){
    return(
    <>
            <h4>{props.text}</h4>
            <h3>{props.subtext}</h3>
            <h2>{props.name}</h2>
            <div className="btn">
                <span>
                    {props.brows}
                </span>
            </div>
            <div className="image">
                <img src={props.image} alt="one" />
            </div>
    </>
    )
}
export default CategoryDetails;