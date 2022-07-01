import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = UseFetch('http://localhost:8000/blogs/' + id);  // fetch the blog with the id
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
            history.push('/');
        }) 
      }

    return ( 
        <div className="blog-details"> 
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p>written by { blog.author }</p>
                    <div>
                        { blog.body }
                    </div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;


