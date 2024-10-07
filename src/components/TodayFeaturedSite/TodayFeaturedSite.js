import React from 'react'
import './TodayFeaturedSite.css'

const TodayFeaturedSite = ({image, title, paragraph, questions, answers, answered}) => {
    return (
        <div className = "container">
                <div className='heading'>
                    Today's Featured Site
                </div>
            <div className="containerwithoutheading">
                <div className='content'>
                    <div className='icon-image'>
                        <img src={image} alt={title}/>
                    </div>

                    <div className='right-panel'>
                        <a href='https://chemistry.stackexchange.com/'>{title}</a>
                        <br/>
                        {paragraph}
                    </div>     
                </div>

                <div className='statistics'>
                    <div className='stats-container'>
                        <span className='number'>{questions}k</span>
                        <br/>
                        <span className='label'>questions</span>
                    </div>

                    <div className='stats-container'>
                        <span className='number'>{answers}k</span>
                        <br/>
                        <span className='label'>answers</span>
                    </div>

                    <div className='stats-container'>
                        <span className='number'>{answered}%</span>
                        <br/>
                        <span className='label'>answered</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TodayFeaturedSite;