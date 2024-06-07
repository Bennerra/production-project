import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense, useContext, useState} from 'react';

import {AboutPageAsync} from "./pages/AboutPage/AbounPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
	const {theme, toggleTheme} = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading</div>}>
				<Routes>
						<Route path={'/about'} element={<AboutPageAsync />}/>
						<Route path={'/'} element={<MainPageAsync />}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;