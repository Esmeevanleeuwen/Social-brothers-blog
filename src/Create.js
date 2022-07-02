import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form' 


const Create = () => { 
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('Persoonlijk');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
 
    const handleSubmit = (e) => { 
        const blog = { title, body, category };
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST', 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(blog) // JSON.stringify() converts the object into a string
        }).then(() =>{
            console.log('Blog created'); 
            setIsPending(false); 
        })
        history.push('/'); // redirect to the home page
    }

    return ( 
        <div className="background-components">
            <form onSubmit={handleSubmit}>
            <h2 className="title-create">Plaats een nieuwe bericht</h2>
                 <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
                    <Form.Label>Berictnaam</Form.Label>
                    <Form.Control 
                        placeholder="Geen titel"
                        required 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}  /> 
                </Form.Group>
                <Form.Group className="mb-3 my-3">
                    <Form.Label>Categorie</Form.Label>
                    <Form.Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="Persoonlijk">Persoonlijk</option>
                        <option value="Zakelijk">Zakelijk</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3 my-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3 my-3">
                    <Form.Label>Blog content</Form.Label> 
                    <Form.Control  
                        as="textarea" rows={11} 
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)} 
                    ></Form.Control>	 
                </Form.Group>
                {!isPending && <button className="button-create">Add blog</button>}
                {isPending && <button className="button-create" disabled>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;