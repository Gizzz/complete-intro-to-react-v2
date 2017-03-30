import React from 'react'

import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is the default searchTerm'
    }
  },
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input type='text' placeholder='Search' 
            value={this.state.searchTerm} 
            onChange={this.handleSearchTermChange} 
          />
        </header>
        <div>
          {
            preload.shows
              .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
              .map((show, index) => (
                <ShowCard {...show} key={index} id={index} />
              ))
          }
        </div>
      </div>
    )
  }
})

export default Search
