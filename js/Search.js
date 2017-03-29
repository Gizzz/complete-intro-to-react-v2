import React from 'react'

import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <div>
          {
            preload.shows.map((show) => {
              return (
                <ShowCard {...show} key={show.imdbID} />
              )
            })
          }
        </div>
      </div>
    )
  }
})

export default Search
