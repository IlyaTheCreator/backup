import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import news from '../../assets/samples/news'

export default function NewsPage () {
    const id = queryString.parse(useLocation().search).id
    const newsItem = news.find(item => item.id === parseInt(id))

    return (
        <div className="container news-page">
            <h1>{newsItem.title}</h1>
        </div>
    )
}