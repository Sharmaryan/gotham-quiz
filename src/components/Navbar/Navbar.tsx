import { useState, useEffect } from 'react';
import { useTheme } from '../../context';
import './Navbar.css';

export const Navbar = () => {
    const [themeIcon, setThemeIcon] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    const themeIconHandler = () => {
        setThemeIcon((prev: boolean) => !prev);
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <div className={`navbar ${theme}`}>
            <div className="navbar__title">gotham quiz</div>
            <div className="navbar_theme" onClick={themeIconHandler}>{themeIcon ? <i className="fa fa-sun-o"></i> : <i className="fa fa-moon-o"></i>}</div>
        </div>
    )
}
