/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({ style: { color: this.props.color } }, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)

// replace render method
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
