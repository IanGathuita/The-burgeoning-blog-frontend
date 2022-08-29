import { BlogPreview } from "../BlogPreview/BlogPreview";
export const Blogs = () => {
    return(
        <section>
            <div className="filters">
                <span>Category: </span>
                <select>
                    <option>Health</option>
                    <option>Fitness</option>
                    <option defaultValue>All</option>
                    <option>Music</option>
                </select>
                <span>Sort by: </span>
                <select>
                    <option>Oldest</option>
                    <option>Newest</option>
                    <option>Most liked</option>
                </select>
            </div>
            <BlogPreview/>
            <BlogPreview/>
            <BlogPreview/>
        </section>
    );
}