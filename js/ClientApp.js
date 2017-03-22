/* global React ReactDOM */

var MyTitle = require('./MyTitle')

var div = React.DOM.div
var h1 = React.DOM.h1

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

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
