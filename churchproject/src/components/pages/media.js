import React, { useRef, useState } from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'

export default function Media () {
    const [isPlaying, setIsPlaying] = useState(false)
    const player = useRef()

    return (
        <div className="media container">
            <h1>media</h1>
            <audio ref={player} controls>
                <source src="https://feeds.soundcloud.com/stream/904925059-ilya-klimov-824490915-aleksey-gamov-tri-printsipa-v-molitve-270920-g.mp3"/>
            </audio>
            <div onClick={() => {
                if (isPlaying) {
                    setIsPlaying(false)
                    player.current.pause()
                } else {
                    setIsPlaying(true)
                    player.current.play()
                }
            }} className="custom-player">
                <PlayCircleOutlined />
            </div>
        </div>
    )
}