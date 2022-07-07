import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import img from './img.jpg';

const BlogDetails = () => {
    const { id } = useParams();  
    const { data: blog, error, isPending } = UseFetch('http://localhost:8000/blogs/' + id);  // fetch the blog with the id
    const history = useHistory();  // used to redirect to the home page
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, { // delete the blog with the id
          method: 'DELETE'
        }).then(() => {
            history.push('/'); // redirect to the home page
        }) 
      }

    return ( 
        <div className="blog-details"> 
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> } 
            { blog && (
                <article className="card-details">
                    <Card className="card-style">
                       <Card.Body>
                        <h2>{ blog.title}</h2> 
                        <Card.Text>{ blog.body}</Card.Text>
                      </Card.Body>
                    </Card>
                    <button className="button-create btn-delete" onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;


