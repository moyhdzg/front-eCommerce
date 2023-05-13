import React, {useContext} from 'react'
import { productContext } from '../context/productContext'
import Header from './Header'
import Footer from './Footer'
import {Container, Row, Card, Button, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductView = () => {
    const {productData}= useContext(productContext)
    
    const navigation = useNavigate()
    
    const goHome = ( ) => {
        navigation('/')
    }
    
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={6}>
                        <Card style={{witdh:'18rem'}}>
                            <Card.Img variant="top" src={productData.image} />
                            <Card.Body>
                                <Card.Title>{productData.name}</Card.Title>
                                <Card.Text>
                                    {productData.description}
                                </Card.Text>
                                <Card.Text>
                                    {productData.price}
                                </Card.Text>
                                <Button variant="primary" onClick={goHome}>Regresa a los productos/Home</Button>
                                {/* El sguiente boton te manda a login, pero la intencion es mandarlo al carrito de compras eventualmente */}
                                <Button variant="primary">Agregar al Carrito / Add to Cart</Button> 
                            </Card.Body>
                        </Card>
                    </Col>    
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ProductView
