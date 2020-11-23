import React, { useState } from 'react'

export default function LatestSermon () {
    const firstImage = require('../../assets/images/sermons/latest-first.jpg')
    const secondImage = require('../../assets/images/sermons/latest-second.jpg')

    const [isMouseEntered, setIsMouseEntered] = useState(false)
    const style = {
        backgroundImage: `url(${isMouseEntered ? secondImage : firstImage})`
    }

    return (
        <div className="container">
            <div
                onMouseEnter={() => setIsMouseEntered(true)}
                onMouseLeave={() => setIsMouseEntered(false)}
                style={style}
                className="latest-sermon"
            >
                <div className="content">
                    <div className="elements">
                        <div className="breadcrums">
                            <span className="breadcrum">Последняя Проповедь</span>
                        </div>
                        <div className="title">Пустая фантазия</div>
                        <div className="buttons">
                            <button className="watch-the-sermon">смотреть проповедь</button>
                            <button className="all-sermons">все проповеди</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}