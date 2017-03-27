import React from 'react'

const MyTitle = React.createClass({
  render () {
    const style = { color: this.props.color }

    return (
      <div>
        <h1 style={style}>
          { this.props.title }
        </h1>
      </div>
    )
  }
})

export default MyTitle
