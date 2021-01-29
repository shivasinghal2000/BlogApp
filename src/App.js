import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment/Comment'
import faker from 'faker'
import ApprovalCard from './Approval/ApprovalCard'

class App extends Component {
  render () {
    return (
      <div>
        <div className='ui container comments'>
          <ApprovalCard>
            <Comment
              src={faker.image.animals()}
              author={faker.name.findName() + ' ' + faker.name.lastName()}
              time='4:00PM'
              commenttext='Nice Blog!!'
            />
          </ApprovalCard>
          <ApprovalCard>
            <Comment
              src={faker.image.fashion()}
              author={faker.name.findName() + ' ' + faker.name.lastName()}
              time='4:20PM'
              commenttext='Loving it!!'
            />
          </ApprovalCard>
          <ApprovalCard>
            <Comment
              src={faker.image.food()}
              author={faker.name.findName() + ' ' + faker.name.lastName()}
              time='4:30AM'
              commenttext='Keep it up!'
            />
          </ApprovalCard>
        </div>
      </div>
    )
  }
}

export default App
