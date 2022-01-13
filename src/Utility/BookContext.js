import React, { useState, useEffect, createContext } from 'react';
import '../App.css';

import Bookdetails from './BookDetails';
import { useHistory, context, Link } from "react-router-dom";
import { Form } from "react-bootstrap";



export const BookContext = React.createContext();
export const BookProvider = ({ children }) => {
    const [title, setTitle] = useState("");
    const [publisher, setPublisher] = useState("");
    const [img, setImg] = useState("");
    const [author, setAuthor] = useState([]);

    return (
        <BookContext.Provider
            value={{
                title,
                publisher,
                img,
                author,
                setTitle,
                setPublisher,
                setImg,
                setAuthor
            }}
        >
            {children}
        </BookContext.Provider>
    );
};