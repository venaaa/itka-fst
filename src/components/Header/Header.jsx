import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img className={s.logo} src="https://cdn.discordapp.com/attachments/628470495372640267/773192494492942364/bc.png" alt="logo" />
		</header>
	);
};

export default Header;