import { useState } from "react";

export const Create = () => {

    const blogTemplate = {
        'title':{value:'', valid:false},
        'body': {value:'', valid:false},
        'tags': {value:{}, valid:false}        
    };

    const [blog, setBlog] = useState(blogTemplate);

    const patterns = {
        title: /^[\w\$-]{5,50}$/,
        body: /^[\w\$-]{100,1000000}$/,
        tags: /(^#[\w]{1,20},? *$)/
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state is ',blog)
        for(let key in blog){
            if(blog[key].valid !== true){
                console.log('All inputs are not valid');
                return;
            }
        }
        console.log('All are valid');
    }

    const handleInput = ({target}) => {
        const id = target.id;
        switch(id){
            case 'blog-title' : {
                let newTitle = {...blog.title,value:target.value}
                let newBlog = {...blog, title:newTitle};
                setBlog(newBlog);
                break;
            };
            case 'blog-body' : {
                let newBody = {...blog.body, value:target.value}
                let newBlog = {...blog, body:newBody};
                setBlog(newBlog);
                break;
            }
            case 'blog-tags' : {
                let newTags = {...blog.tags, value:target.value}
                let newLoginState = {...blog, tags:newTags};
                setBlog(newLoginState);
                break;
            };
            default: return;
        }
        console.log(blog);
    }


    const validateInput = ({target},pattern) => {
        const id = target.id;
        const input = target.value;
        const stateName = id.substr(5);
        if(pattern.test(input)){
            target.style.borderColor = 'green';
            target.style.outlineColor = 'green';
            target.nextElementSibling.style.display = 'none';
            let valid = {...blog[`${stateName}`], valid: true};
            setBlog({...blog, [stateName] : valid});
        }
        else{
            target.style.borderColor = 'red';
            target.style.outlineColor = 'red';
            target.nextElementSibling.style.display = 'block';
            let valid = {...blog[`${stateName}`], valid:false};
            setBlog({...blog, [stateName] : valid});
        }     

    }
    return (
        <section>
            <h3>Create</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input onChange={e => handleInput(e)} onKeyUp={e => validateInput(e, patterns.title)} id="blog-title" />
            <p className='error'>Invalid title</p>
            <label htmlFor="" >Body</label>
            <textarea onChange={e => handleInput(e)} onKeyUp={e => validateInput(e,patterns.body)} id='blog-body'/>
            <p className ='error'>Invalid body</p>
            <label htmlFor="" >Tags</label>
            <input onChange={e => handleInput(e)} onKeyUp={e => validateInput(e,patterns.tags)} id='blog-tags'/>
            <p className ='error'>Invalid tags</p>
            <input type='submit' value={"Publish blog"} />
            </form>
        </section>
    )
}