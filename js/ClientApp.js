import React from 'react'
import { render } from 'react-dom'

import MyTitle from './MyTitle'

var div = React.DOM.div
var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render () {
    return (
      div(null,
        MyTitleFact({ title: 'Props are great!', color: 'rebeccapurple' }),
        MyTitleFact({ title: 'Use props everywhere!', color: 'mediumaquamarine' }),
        MyTitleFact({ title: 'Props are the best!', color: 'peru' })
      )
    )
  }
})

render(React.createElement(MyFirstComponent), document.getElementById('app'))
