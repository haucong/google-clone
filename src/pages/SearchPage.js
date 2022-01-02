import React from 'react'
import { useStateValue } from '../StateProvider';
import './SearchPage.css';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import {Link} from 'react-router-dom';
import Search from './Search'

import { SearchOutlined } from '@material-ui/icons'
import {OndemandVideoOutlined} from '@material-ui/icons'
import { BookOutlined } from '@material-ui/icons'
import { MoreVertOutlined } from '@material-ui/icons'

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();

    //LIVE API CALL
    const { data} = useGoogleSearch(term);

    //MOCK API CALL
    // const data = Response;

    console.log(data)
    return (
      <div className='searchPage'>
        <div className='searchPage__header'>
          <Link to='/'>
            <img
              className='searchPage__logo'
              src='data:image/png;base64,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'
              alt=''
            />
          </Link>
          <div className='searchPage__headerBody'>
            <Search hideButton />
            <div className='searchPage__options'>
              <div className='searchPage__optionsLeft'>
                <div className='searchPage__option'>
                  <SearchOutlined />
                  <Link to='/all'>All</Link>
                </div>
                <div className='searchPage__option'>
                  <OndemandVideoOutlined />
                  <Link to='/video'>Video</Link>
                </div>
                <div className='searchPage__option'>
                  {/* <UnsubscribeOutlinedIcon /> */}
                  <Link to='/news'>News</Link>
                </div>
                <div className='searchPage__option'>
                  <BookOutlined />
                  <Link to='/books'>Books</Link>
                </div>
                <div className='searchPage__option'>
                  <MoreVertOutlined />
                  <Link to='/add'>More</Link>
                </div>
              </div>

              <div className='searchPage__optionsRight'>
                <div className='searchPage__option'>
                  <Link to='/tools'>Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {true && (
          <div className='searchPage__results'>
            <p className='searchPage__resultCount'>
              About ({data?.searchInformation.formattedTotalResults}) results (
              {data?.searchInformation.formattedSearchTime} second) for "{term}"
            </p>
            {data?.items.map((item) => (<div className='searchPage__result'>
              <a className="searchPage__result" href={item.link}>
                <>
                {item.pagemap?.cse_image?.length> 0 && item.pagemap ?. cse_image[0]?.src && (
                  <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0].src} alt="" />
                  )}
                  </>

                {item.displayLink}
              </a>
              <a className='searchPage__result'
                Title href={item.link}
              >
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>) )}
          </div>
        )}
      </div>
    )
}

export default SearchPage
