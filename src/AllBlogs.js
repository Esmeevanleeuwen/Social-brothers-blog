import BlogList from './GetAllBlogs';
import UseFetch from './UseFetch';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Create from './Create';

const AllBlogs = () => {
  const { data: blogs, isPending, error } = UseFetch("http://localhost:8000/blogs");
    return (
        <Container>
          <Row> 
            <Col>
            <div className="background-components">
              { error && <div>{ error} </div>}
              { isPending && <div>loading...</div> }
              { blogs && <BlogList blogs={blogs} title="all blogs"  /> }
            </div>
            </Col>
          </Row>
        </Container>
      );
}
 
export default AllBlogs ;