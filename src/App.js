import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ My Portfolio - https://aejhay777.github.io/my-portfolio/ ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐',
			date: '15/04/2022',
		},
		{
			id: nanoid(),
			text: 'Note 1!',
			date: '24/04/2022',
		},
		{
			id: nanoid(),
			text: 'Note 2!',
			date: '28/05/2022',
		},
		{
			id: nanoid(),
			text: 'Note 3!',
			date: '03/06/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
				<Footer />
			</div>
		</div>
	);
};

export default App;
