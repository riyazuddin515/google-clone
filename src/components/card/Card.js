import React from 'react'
import './Card.css'

const Card = ({ link, displayLink, title, snippet, pagemap }) => {
    const img = pagemap.cse_thumbnail ?
        pagemap.cse_thumbnail[0].src
        : pagemap.cse_image ?
            pagemap.cse_image[0].src
            :
            "https://ik.imagekit.io/surinderbhomra/Blog/ASP.NET/BrokenImage.jpg?tr=w-1000"
    return (
        <div className='card'>
            <img src={img} alt="" />
            <a href={link} target='_blank' rel="noreferrer">{displayLink}</a>
            <br />
            <a className='title' href={link} target='_blank' rel="noreferrer">{title}</a>
            <p>{snippet}</p>
        </div>
    )
}

export default Card
