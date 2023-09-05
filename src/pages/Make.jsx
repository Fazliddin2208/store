import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Card,CardActionArea,CardMedia,CardContent,CardActions,Typography,Rating,Pagination} from '@mui/material';
import '../styles/style.scss'

const Make = () => {

    const [products, setProducts] = useState([]);
    const [totals, setTotals] = useState();

    useEffect(()=>{
        getTotal()
    },[totals])

    const getTotal = async()=>{
        await axios.get("https://dummyjson.com/products")
        .then(res=>{
            const totals = res.data
            console.log(totals.total)
            setTotals(totals.total)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getProducts()
    },[products])

    const getProducts = async()=>{
        await axios.get(`https://dummyjson.com/products?limit=20&skip=${page*20-20}`)
        .then(res=>{
            const products = res.data
            // console.log(products.products)
            setProducts(products.products)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const [page,setPage] = useState(1)

    return (
        <div className='make'>

            <div className='breadcrumb'>
                <Link to="/order"><span>Заявка</span></Link><i className='fas fa-angle-right'></i>
                <Link to="/make"><span className="active-breadcrumb">Оформить заказ</span></Link>
            </div>

            <div className='search'>
                <h1>Оформить заказ</h1>

                <div className='search-group'>
                    <input type="text" className='search-input' placeholder='Поиск по назвавнию товара' />
                    <button className='search-button'><i className='fas fa-search'></i></button>

                </div>
            </div>

            <h5>Все товары({totals})</h5>
            <div className='my-cards'>
                {products && products.map((product,index)=>(
                    <Card sx={{ maxWidth: 345 }} key={index} className="my-card">
                        <CardActionArea>
                            <div className="extra">
                                <i className="fas fa-gift"></i>
                                <i className="fas fa-percent"></i>
                                <i className="fas fa-refresh"></i>
                            </div>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.thumbnail}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="b" component="div" className="product-title" title={product.title}>
                                <Link to={`/make/${product.id}`}>{product.title}</Link>
                                </Typography>
                                <Typography variant="body2" color="text.dark" style={{fontWeight:"700"}}>
                                {product.price*10000} сум
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className='credit-price'>от {Math.ceil(product.price*10000/3)} сум</span> <span className='credit-time'>x3</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Rating name="half-rating" defaultValue={product.rating} precision={0.5} readOnly />
                        </CardActions>
                    </Card>
                ))}         
                <Pagination 
                    count={totals/10} 
                    defaultPage={page} 
                    color="success" 
                    shape="rounded" 
                    className='my-pagination'
                    onChange={(e,value)=>setPage(value)}
                 />
            </div>
        </div>
    );
};


export default Make;
