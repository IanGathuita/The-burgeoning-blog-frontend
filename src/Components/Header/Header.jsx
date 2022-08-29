import css from './Header.module.css';
export const Header = () => {
    return(
        <header className={css.header}>
            <h1>THE BURGEONING BLOG</h1>
            <h2>An ever-enlarging source of stellar blogs</h2>
        </header>
    );
};
