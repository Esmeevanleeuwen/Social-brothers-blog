import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from './img.jpg';

const BlogList = ({ blogs, title, body  }) => {
  
    return ( 
        <div className="blog-list">
          <Container>
          <Row> 
          	{blogs.map((blog) => (
                <Col md="12" lg="6" xxl="3">
                <div className='blog-preview' key={ blog.id }>
                  <Link to={`/blogs/${blog.id}`}> 
                    <Card className="card-style">
                      <Card.Img className="bg-img" variant="top"  src={img}/>
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

