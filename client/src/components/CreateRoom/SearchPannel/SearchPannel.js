import React, { useEffect, useState } from 'react';
import Track from '../../Track/Track';
import SearchBar from '../Searchbar/SearchBar';
import './SearchPannel.css';

function SearchPannel() {
  const [audioAll, setAudioAll] = useState();

  const findAudioFetch = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/audio`, {
      credentials: 'include',
    });
    const result = await response.json();
    // console.log(result);
    setAudioAll(result);
  };

  useEffect(() => {
    findAudioFetch();
  }, []);

  return (
    <div className="track">
      <SearchBar placeholder="Enter a auidio name..." audioAll={audioAll} />
      <ul className="tracklist scroll-block">
        <li className="track"><Track /></li>
      </ul>
    </div>
  );
}

export default SearchPannel;
