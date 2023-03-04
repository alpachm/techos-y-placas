import React from 'react'
import './styles/loading.css'
import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <div className='loading'>
            <img src={logo} alt="" />
        </div>
    )
}

export default Loading