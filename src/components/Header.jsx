import React from 'react';
import Badge from '@mui/material/Badge';
import './style.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h2>Logo</h2>
            <div>
                <Badge badgeContent={4} color="success">                 
                    <i className="fas fa-bell"></i>
                </Badge>
                <button>
                    <a href="#" className='profile'>Личный кабинет <i className='fas fa-user-circle'></i></a>
                </button>
            </div>
        </div>
    );
};


export default Header;