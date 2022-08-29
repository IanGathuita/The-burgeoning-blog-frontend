import { useState } from "react";
export const Search = () => {

    const [comment,setComment] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setComment(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //fetch
        console.log(comment);        
    }
    return (
        <section>
            <h2>Search</h2>
            <p>Search a blog by title or tag</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input type='search' placeholder="Type your search term" onChange={(e) => handleSearch(e)} id='commentInput'/>
            </form>

            {/*if blogs add blog previews*/}
        </section>
    )
}