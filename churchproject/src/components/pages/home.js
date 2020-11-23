import React from 'react'
import LatestSermon from "../common/latest-sermon";
import NewsMasonry from "../common/news-masonry"

export default function Home () {
    return (
        <div className="home">
            <LatestSermon />
            <NewsMasonry withLatest={true} amount={4}/>
        </div>
    )
}