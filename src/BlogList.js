import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BlogList = ({ blogs, title, body  }) => {
  
    return ( 
        <div className="blog-list">
          <Container>
          <Row> 
          	{blogs.map((blog) => (
                <Col md="12" lg="6">
                <div className='blog-preview' key={ blog.id }>
                  <Link to={`/blogs/${blog.id}`}> 
                    <Card className="card-style">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <h2>{ blog.title}</h2>
                        <Card.Text>{ blog.body}</Card.Text>
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

