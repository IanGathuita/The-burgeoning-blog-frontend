import { Comment } from "../Comment/Comment";
import  {useNavigate} from 'react-router-dom';

export const Blog = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    return (
        <section>
            <i onClick={handleBack}>back</i>
            <h2>Blog title right here could be longer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga cum temporibus obcaecati minima inventore amet iure dicta excepturi ipsam! Autem ratione modi cumque, error sint atque quae placeat quisquam facilis distinctio pariatur expedita ullam vero dolor est. Similique libero sit officiis quia! Cumque quam provident, explicabo eum quibusdam esse deleniti a natus cupiditate repudiandae quaerat? Amet debitis itaque corrupti quidem et eum incidunt nemo assumenda. Quasi soluta excepturi officia facilis. Laudantium, similique ex, nemo voluptas velit est quis nesciunt tempore magni libero aut suscipit culpa quam cum iure? Odit placeat perspiciatis magni error harum officiis optio iure! Nihil, cum.</p>
            <Comment/>
        </section>
    )
}