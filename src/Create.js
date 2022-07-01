import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('john');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const blog = { title, author, body };
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('Blog created');
            setIsPending(false);
        })
    }

    return ( 
        <div>
            <h1>Create a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <label>Blog content</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>	
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="John">John</option>
                    <option value="Jane">Jane</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;