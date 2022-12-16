import React from "react";
import "./News.css";
import NewsData from "./NewsData";
import n1 from "../assests/adult.jpg";
import n2 from "../assests/bill.jpg";
import n3 from "../assests/daniel.jpg";

export const News = () => {
  return (
    <div className="container">
    <div class="news">
    <div class="news-head">
        <h1>Recent News</h1>
        <h5>There are many variations passages</h5>
    </div>
    <div class="news-body">
        <NewsData 
        image={n1}
        date="October 5, 2019 by Paul"
        head="How to choose perfect gadgets"
        content="When, while the lovely valley teems with vapour around me,
        and the meridian sun strikes the upper s ..."
        />
        <NewsData 
        image={n2}
        date="October 5, 2019 by Paul"
        head="How to choose perfect gadgets"
        content="When, while the lovely valley teems with vapour around me,
        and the meridian sun strikes the upper s ..."
        />
        <NewsData 
        image={n3}
        date="October 5, 2019 by Paul"
        head="How to choose perfect gadgets"
        content="When, while the lovely valley teems with vapour around me,
        and the meridian sun strikes the upper s ..."
        />
    </div>
    </div>
    </div>
  )
}
