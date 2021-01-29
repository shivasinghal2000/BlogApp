import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Comment = ({ src, author, time, commenttext }) => {
  return (
      <div>
        <a href='/'>
          <img alt='avatar' src={src} style={{ height: 70, width: 70 }} />
        </a>
        <div>
          <a href='/'>{author}</a>
          <div>
            <span> Today at {time}</span>
          </div>
          <div>{commenttext}</div>
        </div>
      </div>
  )
}

export default Comment
