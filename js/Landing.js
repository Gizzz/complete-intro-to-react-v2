import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setSearchTerm } from './actionCreators'

const { func, object, string } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
   router: object
 },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  goToSearch (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input 
            type='text' placeholder='Search' 
            value={this.props.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </form>
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
