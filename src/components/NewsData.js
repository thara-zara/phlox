import "./News.css";
import React from "react";

function NewsData(props){
    return(
        <div className="news-item">
            <div class="news-img">
                <img src={props.image} alt="" />
            </div>
            <div className="date">
                {props.date}
            </div>
            <div className="news-sub-head">
                <h4>{props.head}</h4>
            </div>
            <div className="content">
                {props.content}
            </div>
        </div>
    )
}
export default NewsData;