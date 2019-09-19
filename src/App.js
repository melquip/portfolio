import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { App as AppCSS } from './AppStyles';

function App({ env, data }) {
	return (
		<AppCSS>
			<header>
				<div className="column">
					<ul>
						{data.menu.map((menu, i) => <li key={i}>
							<Link to={menu.url}>{menu.title}</Link>
						</li>)}
					</ul>
				</div>
				<div className="column">
					<img src="" alt="" />
				</div>
				<div className="column">
					<ul>
						{Object.keys(data.socials).map((social) => <li key={social}>
							<a href={data.socials[social]} target="_blank" rel="noopener noreferrer">{social}</a>
						</li>)}
					</ul>
				</div>
			</header>
			<main>

			</main>
			<footer>

			</footer>
		</AppCSS>
	);
}

export default App;
