import img from '../../Assets/img.png';
import './BlogPreview.css';
import { useNavigate } from 'react-router-dom';

export const BlogPreview =  () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/blogs/9');
    }

    return (
        <div className = 'blog-preview' onClick={handleClick}>
            <div className="blog-preview-text">
            <h2 className='blog-preview-title'>A piece of blog</h2>
            <p className='three-line-clamp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis sequi sunt nobis consequatur quis.</p>
             </div>
             <div>
                 <img className="blog-thumbnail" src={img} alt=' blog thumbnail'/>
             </div>
        </div>
    );

}