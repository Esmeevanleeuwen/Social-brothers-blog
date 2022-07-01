import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";



const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = UseFetch('http://localhost:8000/blogs/' + id);  

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
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;


