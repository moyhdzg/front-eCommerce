import React, {useContext, useEffect, useState} from 'react'
import { productContext } from '../context/productContext'
import Header from './Header'
import Footer from './Footer'
import {Container, Row, Card, Button, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductView = () => {
    const [products,setProducts] = useState([])
    const [singleProduct, setSingleProduct] = useState({})
    const {productData}= useContext(productContext)


    const getProducts = async() => {
        const url = 'https://back-e-commerce-2.vercel.app/apis/v1/products'
        const productos = await axios.get(url)
        setProducts(productos.data)
    }
    
    const findProduct = async () => {
        console.log(productData);
        if (productData) {
          try {
            const singleElement = products.find((element) => element._id === productData);
            console.log(singleElement);
            if (singleElement) {
              setSingleProduct(singleElement);
            } else {
              console.log('Elemento no encontrado');
            }
          } catch (error) {
            console.log('Error al buscar el producto:', error);
          }
        } else {
          console.log('No se proporcionó productData');
        }
      };



    const navigation = useNavigate()
    
    const buyProducts = () => {
        navigation('/login')
    }
    

    useEffect(()=>{
        getProducts();
        if (products.length > 0){
            findProduct();
        }
      },[]);
    
      useEffect(()=>{
        if (products.length > 0){
            findProduct();
        }
      },[products]);

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={6}>
                    <Card style={{witdh:'18rem'}}>
                    {singleProduct && (
                        <>
                        <Card.Img variant="top" src={singleProduct.image} />
                                <Card.Body>
                                <Card.Title>{singleProduct.name}</Card.Title>
                                <Card.Text>
                                    {singleProduct.description}
                                </Card.Text>
                                <Card.Text>
                                    {singleProduct.price}
                                </Card.Text>
                                <Button variant="primary" onClick={buyProducts}>Agregar al Carrito / Add to Cart</Button>  
                            </Card.Body>
                        </>
                        )}
                    </Card> 
                    </Col>    
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ProductView
