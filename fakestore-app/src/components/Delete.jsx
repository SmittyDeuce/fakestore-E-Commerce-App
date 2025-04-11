import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching product details");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        alert("Product deleted successfully");
        navigate("/products");
      })
      .catch(() => {
        alert("Error deleting product");
      });
  };

  const handleCancel = () => {
    navigate("/products");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Delete Product</h2>
          <Form>
            <Form.Group controlId="productId" className="mb-3">
              <Form.Label>Product ID</Form.Label>
              <Form.Control type="text" value={product.id} readOnly />
            </Form.Group>

            <Form.Group controlId="productTitle" className="mb-4">
              <Form.Label>Product Title</Form.Label>
              <Form.Control type="text" value={product.title} readOnly />
            </Form.Group>

            <div className="d-flex gap-3">
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Delete;
