import "./Banner.css";

function BannerData(props) {
  return (
    <>
      <div className="sale-left">
                <h5>{props.text1}</h5>
                <h1>{props.text2}</h1>
                <h5>{props.text3}</h5>
            </div>
            <div className="sale-right">
                <h5>{props.title}</h5>
                <h2>{props.sale}</h2>
                <h5>{props.details}</h5>
                <div className="btn">
                    <span>
                        {props.shop}
                    </span>
                </div>
            </div>
            <div className="image">
                <img src={props.image} alt="sale" />
            </div> 
    </>
  )
}

export default BannerData
