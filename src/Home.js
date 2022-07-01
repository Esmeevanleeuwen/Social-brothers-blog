import BlogList from './BlogList';
import UseFetch from './UseFetch';

const Home = () => {
  const { data: blogs, isPending, error } = UseFetch("http://localhost:8000/blogs");
    return (
        <div className="background">
          { error && <div>{ error} </div>}
          { isPending && <div>loading...</div> }
          { blogs && <BlogList blogs={blogs} title="all blogs"  /> }
        </div>
      );
}
 
export default Home ;