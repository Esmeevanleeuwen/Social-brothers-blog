import BlogList from './BlogList';
import UseFetch from './UseFetch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Create from './Create';

const Home = () => {
    const { data: blogs, isPending, error } = UseFetch("http://localhost:8000/blogs");

    return (
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <Create />
                </Col>
                <Col xs={12} lg={6}>
                    <div className="background-components">
                        { error && <div>{ error } </div>}
                        { isPending && <div>loading...</div> }
                        { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
