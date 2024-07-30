import { Link } from "react-router-dom"; 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BlogList = ({ blogs, title }) => {
  return ( 
    <div className="blog-list">
      <Container>
        <Row> 
          {blogs.map((blog) => (
            <Col md="12" lg="6" key={blog.id}>
              <div className='blog-preview'>
                <Link to={`/blogs/${blog.id}`}> 
                  <Card className="card-style">
                    {blog.image && <Card.Img className="bg-img" variant="top" src={blog.image} />}
                    <Card.Body>
                      <h2>{ blog.title }</h2>
                      <Card.Text>{ blog.body }</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>  
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BlogList;
