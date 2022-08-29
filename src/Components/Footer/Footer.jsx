import css from './Footer.module.css';
export const Footer = () => {
    return (
        <footer >
            <div className="categories horizontal-div">
                <ul>
                    <li><a href="#">Health</a></li>
                    <li><a href="#">Finance</a></li>
                    <li><a href="#">Fitness</a></li>
                </ul>
            </div>
            <div className="Quick-actions horizontal-div">
                <ul>
                    <li><a href="#">Log out</a></li>
                    <li><a href="#">See latest</a></li>
                    <li><a href="#">Find a blog</a></li>
                </ul>
            </div>
            <div className="socials horizontal-div">
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>

        </footer>
    );
};