import React from 'react';
import {FcSearch} from 'react-icons/fc';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<FcSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search for notes here...'
			/>
		</div>
	);
};

export default Search;
