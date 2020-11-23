import React from 'react'
import PostMasonry from '../common/post-masonry'
import trending from '../../assets/mocks/trending'

const trendingConfig = {
    0: {
        gridArea: '1 / 2 / 3 / 3'
    },
}

const mergeStyles = (posts, config) => {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)

export default function Home () {
    return (
        <section className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} columns={3} />
            </div>
        </section>
    )
}