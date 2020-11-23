import React, { useState, useMemo, useEffect } from 'react'
import TagRow from './tag-row'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'

export default function PostGrid ({posts}) {
    const [pageSize, setPageSize] = useState(9)
    const [current, setCurrent] = useState(1)

    const paginatedPosts = useMemo(() => { // useMemo helps us to conroll a component's rerendering 
        const lastIndex = current * pageSize 
        const firstIndex = lastIndex - pageSize 

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize])

    useEffect(() => {
        window.scroll({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }, [current, pageSize])

    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">
                { paginatedPosts.map((post, index) => (
                    <div className="post-container" key={index}>
                        <figure>
                            <Link to={post.link}>
                                <img src={require(`../../assets/images/${post.image}`)}/>
                            </Link>
                        </figure>
                        <TagRow tags={post.categories} />
                        <h2>{post.title}</h2>
                        <div className="author-text">
                            <span>
                                By:
                                <Link to={`/authors/${post.author}`}>
                                    {post.author}
                                </Link>
                            </span>
                            <span>
                                - {post.date}
                            </span>
                            <p className="description-text">
                                {post.description}
                            </p>
                            <Link to={post.link}>Read More...</Link>
                        </div>
                    </div>
                ))}
            </section>
            <Pagination 
                simple 
                showSizeChanger 
                onShowSizeChange={setPageSize} 
                pageSize={pageSize}
                total={posts.length}
                defaultCurrent={current}
                onChange={setCurrent}
            />
        </section>
    )
}
