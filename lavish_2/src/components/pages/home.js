import React from 'react'
import PostMasonry from '../common/post-masonry'
import MasonryPost from '../common/masonry-post'
import PostGrid from '../common/post-grid'

import trending from '../../assets/mocks/trending'
import featured from '../../assets/mocks/featured'

const trendingConfig = {
    0: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: 300
    },
    1: {
        height: 300
    },
    3: {
        height: 630,
        marginLeft: 30,
        width: 630
    }
}

const mergeStyles = (posts, config) => {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Ilya Coder'
        post.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop()

export default function Home () {
    return (
        <main className="home">
            <section className="container">
                <div className="row">
                    <section className="featured-posts-container">
                        <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
                        <MasonryPost post={lastFeatured} tagsOnTop={true} />
                    </section>
                </div>
            </section>

            <section className="bg-white">
                <section className="container">
                    <div className="row">
                        <h1>Recent Posts</h1>
                        <PostGrid posts={recentPosts} />
                    </div>
                </section>
            </section>
            
            <section className="container">
                <div className="row">
                    <PostMasonry posts={trending} columns={3} />
                </div>
            </section>
        </main>
    )
}