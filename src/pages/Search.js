import { Button } from '@material-ui/core'
import { Mic, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

const Search = ({ hideButton = false}) => {
  const [input, setInput] = useState('');
  const [ {}, dispatch] = useStateValue();

  let navigate = useNavigate()
  const Search = (e) => {
    e.preventDefault()
    console.log(input)
    navigate('/searchPage');

    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })
  }

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchOutlined className='search__input-icons' />
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Mic />
      </div>
      {!hideButton ? (
        <div className='search__buttons'>
          <Button type='submit' onClick={Search} className='outlined'>
            Google Search
          </Button>
          <Button className='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonHider'
            type='submit'
            onClick={Search}
            variant='outlined'
          >
            Google Search
          </Button>
          <Button className='search__buttonHider' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  )
}

export default Search
