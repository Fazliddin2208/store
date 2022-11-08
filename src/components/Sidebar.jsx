import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

const sidebarNavItems = [
    {
        display: 'Главная',
        icon: <i className='fas fa-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Заказы',
        icon: <i className='fas fa-list'></i>,
        to: '/order',
        section: 'order'
    },
    {
        display: 'Товары',
        icon: <i className='fas fa-shopping-bag'></i>,
        to: '/products',
        section: 'products'
    },
    {
        display: 'Отзывы',
        icon: <i className='fas fa-star'></i>,
        to: '/comments',
        section: 'comments'
    },
    {
        display: 'Оформит заказ',
        icon: <i className='fas fa-cart-shopping'></i>,
        to: '/make',
        section: 'make'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        {/* <div className="sidebar__logo">
            Animate
        </div> */}
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar; 