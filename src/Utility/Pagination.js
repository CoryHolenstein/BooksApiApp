import '../App.css';

import React, { useState, useEffect, useContext } from 'react';
import { BookContext } from './BookContext';
import { useHistory, context, NavLink, Link } from "react-router-dom";

const Pagination = ({ resultsPerPage, totalResults, paginate}) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalResults / resultsPerPage); index++) {
        pageNumbers.push(index);
    }


    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link
                           
                            onClick={() => paginate(number)}
                            className='page-link'
                        >
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );



    
}
export default Pagination;
