import { Link } from "react-router-dom"; 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from './img.jpg';
import React, { useState, useEffect} from "react";


 
const BlogList = ({ blogs, title, body  }) => {
  const [visible, setVisible] = useState(4);

  const showMore = () => {
    setVisible(visible + 4);
  }
 
  
    return ( 
        <div className="blog-list">
          <Container className="cards">
          <Row> 
          	{blogs.slice(0, visible).map((blog) => ( //slice(0, visible) is used to display only 4 blogs at a time
                <Col md="12" lg="6">
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
                <button onClick={showMore} className="button-loads">Load more</button>
            
            </Container>
        </div>
     );
}

 
export default BlogList;

