import './App.css';
import { useReducer, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { counterReducer } from './reducer/counter-reducer';
import { v4 as uuid } from 'uuid';
import CounterApp from './components/CounterApp';

export default function App() {
	return (
		<div className="App">
			<CounterProvider>
				<CounterApp />
			</CounterProvider>
		</div>
	);
}

export const CounterProvider = ({ children }) => {

	const groupMetadata = JSON.parse(localStorage.getItem('groupMetadata'))
	const [data, dispatchData] = useReducer(counterReducer, groupMetadata ?? { [uuid()]: newGroupMetadata });

	useEffect(() => { localStorage.setItem('groupMetadata', JSON.stringify(data)); }, [data]);

	return <AppContext.Provider value={ { data, dispatchData } }> { children } </AppContext.Provider>;
};

export const newCounterMetadata = { value: 0, label: 'New Counter' };

let counters = {
	[uuid()]: { label: 'cigarette butts', value: 0 },
	[uuid()]: { label: 'beverage cans', value: 0 },
	[uuid()]: { label: 'bottle caps', value: 0 },
	[uuid()]: { label: 'coffee cups and lids', value: 0 },
	[uuid()]: { label: 'food containers', value: 0 },
	[uuid()]: { label: 'food wrappers', value: 0 },
	[uuid()]: { label: 'glass bottles', value: 0 },
	[uuid()]: { label: 'paper', value: 0 },
	[uuid()]: { label: 'plastic bags', value: 0 },
	[uuid()]: { label: 'plastic bottles', value: 0 },
	[uuid()]: { label: 'plastic cups', value: 0 },
	[uuid()]: { label: 'six pack holders', value: 0 },
	[uuid()]: { label: 'straws', value: 0 },
	[uuid()]: { label: 'takeout containers', value: 0 },
	[uuid()]: { label: 'utensils', value: 0 },
	[uuid()]: { label: 'personal protective equipment', value: 0 },
	[uuid()]: { label: 'styrofoam pieces', value: 0 },
	[uuid()]: { label: 'plastic pieces (tiny bits)', value: 0 },
}

export const newGroupMetadata = {
	label: 'New List',
	negativeValueAllowed: false,
	limit: 10000,
	incrementBy: 1,
	counters: counters
};