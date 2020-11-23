import React from 'react'
import {Link} from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'

import news from '../../assets/samples/news'
const latestNewsItem = news.shift()
console.log(latestNewsItem)

export default function NewsMasonry ({withLatest, amount}) {
    if (amount) {
        news.splice(amount - 1, news.length)
    }

    return (
        <div className="news container">
            { withLatest ? (
                <>
                    <h1>Последние новости</h1>
                    <Link to={`/news-page/?id=${latestNewsItem.id}`} className="news-item latest-news-item">
                        <div className="img-wrapper">
                            <img alt={latestNewsItem.title} src={require(`../../assets/images/news/${latestNewsItem.image}`)}/>
                        </div>
                        <div className="text">
                            <h2>{latestNewsItem.title}</h2>
                            <span className="date-posted">{latestNewsItem.date}</span>
                        </div>
                    </Link>
                </>
            ) : null}
            <div className="news-inner">
                { news.map((item, index) => (
                    <Link to={`/news-page/?id=${item.id}`} key={index} className="news-item">
                        <div className="img-wrapper">
                            <img alt={item.title} src={require(`../../assets/images/news/${item.image}`)}/>
                        </div>
                        <div className="text">
                            <h2>{item.title}</h2>
                            <span className="date-posted">{item.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
            {  withLatest ? (
                <Link to="/news" className="all-news">все новости <ArrowRightOutlined /></Link>
            ) : null}
        </div>
    )
}