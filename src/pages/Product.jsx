import React, {useState,useEffect} from 'react';
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'
import "../styles/style.scss"

const Product = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([])

    useEffect(()=>{
        getProduct()
    },[product])

    const getProduct = async()=>{
        await axios.get(`https://dummyjson.com/products/${id}`)
        .then(res=>{
            const product = res.data
            console.log(product)
            setProduct(product)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='product'>
                <div >
                    <div className='breadcrumb'>
                        <Link to="/order"><span>Заявка</span></Link><i className='fas fa-angle-right'></i>
                        <Link to="/make"><span>Оформить заказ</span></Link><i className='fas fa-angle-right'></i>
                        <Link to={`/make/${id}`}><span className="active-breadcrumb">{product.title}</span></Link>
                    </div>

                    <div className="main-cart">
                        <div className="top">
                            <div className="title">
                                <h3>{product.title}</h3>
                                <i className='fas fa-cart-shopping'></i>
                                
                            </div>
                            <div className="main">
                                <div className="images">
                                    
                                    <div id="carouselExampleIndicators" className="carousel slide carousel-dark" data-bs-ride="true">
                                        <div className="extra">
                                            <i className="fas fa-gift"></i>
                                            <i className="fas fa-percent"></i>
                                            <i className="fas fa-refresh"></i>
                                        </div>
                                        {product.images && product.images.map((image,index)=>(
                                            <div className="carousel-inner">
                                                <div className={index===0? "carousel-item active" : "carousel-item"}>
                                                    <div className='my-carousel'>
                                                        <img src={image} className="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="informations">
                                    <div className='first'>
                                        <p className='item-title'>Цена продукта</p>
                                        <p><b>{product.price*10000} сум</b></p>
                                    </div>
                                    <div className='second'>
                                        <p className='item-title'>Обшая Цена(с наценкой)</p>
                                        <div>
                                            <p><b>{Math.ceil(product.price*10000+product.price*10000*0.05)} сум</b></p>
                                            <p>
                                                <span className='credit-price'>{Math.ceil(product.price*10000/3)} сум </span><span className='credit-time'>x3</span>
                                            </p>
                                        </div>
                                        <div className='btn-group' role="group" aria-label='Basic radio toggle button group'>
                                            <input type="radio" className='btn-check' name='btnradio' id='btnradio1' autocomplete='off' checked />
                                            <label for="btnradio1" className='btn btn-outline-success'>3мес</label>
                                            <input type="radio" className='btn-check' name='btnradio' id='btnradio2' autocomplete='off' />
                                            <label for="btnradio2" className='btn btn-outline-success'>6мес</label>
                                            <input type="radio" className='btn-check' name='btnradio' id='btnradio3' autocomplete='off' />
                                            <label for="btnradio3" className='btn btn-outline-success'>12мес</label>
                                            <input type="radio" className='btn-check' name='btnradio' id='btnradio4' autocomplete='off' />
                                            <label for="btnradio4" className='btn btn-outline-success'>24мес</label>
                                        </div>
                                        <p>Наценка: <b>5%</b></p>
                                    </div>
                                    <div className='third'>
                                        <p className='item-title'>Обшие характеристики</p>
                                        <p>{product.description}</p>
                                        <a href="#">Показат все <i className='fas fa-angle-right'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <h6>Акции</h6>
                            <div className='actions'>
                                <div className='action'>
                                    <div className="action-body">
                                        <div className="left">
                                            <i className="fas fa-refresh"></i>
                                        </div>
                                        <div className="right">
                                            <p>Обменяй свой и получи скидка на новый</p>
                                            <p style={{color:"#747577"}}>-400 000 сум</p>
                                        </div>
                                    </div>
                                    <input type="checkbox" checked />
                                </div>
                                <div className='action'>
                                    <div className="action-body">
                                        <div className="left">
                                            <i className="fas fa-gift"></i>
                                        </div>
                                        <div className="right">
                                            <p>Наушники в подарок</p>
                                            <p style={{color:"#747577"}}>Apple EarPods</p>
                                        </div>
                                    </div>
                                    <input type="checkbox" checked />
                                </div>
                                <div className='action'>
                                    <div className="action-body">
                                        <div className="left">
                                            <i className="fas fa-percent"></i>
                                        </div>
                                        <div className="right">
                                            <p>Скидка 20%</p>
                                            <p style={{color:"#747577"}}>-{product.price*10000*0.2} сум</p>
                                        </div>
                                    </div>
                                    <input type="checkbox" checked />
                                </div>

                            </div>
                            <button className='btn btn-success form-control' style={{marginTop:"15px",borderRadius:"25px"}}>Добавит в карзину</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};


export default Product;