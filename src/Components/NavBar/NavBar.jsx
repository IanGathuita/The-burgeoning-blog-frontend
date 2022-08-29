import css from './NavBar.module.css';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    const handleMobileMenu = () => {
        const menuItems = document.getElementById('menu-items');
        if(menuItems.hidden === true){
            menuItems.hidden = false;
        }
        else{
            menuItems.hidden = true;
        }
    }

    return(
        <nav>
            <span className={css.menu} onClick = {handleMobileMenu}>&#9776;</span>
            <ul className={css.menuItems} id='menu-items' hidden>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/search'>Search</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/logout'>Log out</Link></li>
                <li><Link to='/create'>Write a blog</Link></li>
            </ul>
        </nav>
    );    
}