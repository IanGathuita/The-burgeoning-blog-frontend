import './Comment.css';
export const Comment = () => {
    return (
        <div className='comment-section'>
            <h3>Comment on this blog</h3>
            <p>Share your thoughts about this blog. Your comment and username will be visible to other readers
                who visit this page. PLease use respectful language.
            </p>
            <form>
                <label>Your comment</label>
                <textarea></textarea>
                <input type='submit' value='Submit comment' />
            </form>
        </div>
    );
}