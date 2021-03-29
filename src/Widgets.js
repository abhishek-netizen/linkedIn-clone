import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )





    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>   
            {newsArticle("NASA Ingenuity Mars Helicopter Prepares for First Flight", "Top news - 9999 readers")}
            {newsArticle("India reports 68,020 new cases","Top news - 5102 readers")}
            {newsArticle("The Suez Canal blockage explored in numbers", "Top news - 2333 readers")}
            {newsArticle("UFC 260: Francis Ngannou stops Stipe Miocic, claims UFC heavyweight title", "Top news - 1020 readers")}
            
        </div>
        
    )
}

export default Widgets
