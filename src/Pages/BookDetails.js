import '../App.css';

import React, { useState, useEffect, useContext } from 'react';
import { BookContext } from '../Utility/BookContext';
import { useHistory, context, NavLink } from "react-router-dom";

const BookDetails = props => {


    const savedBook = useContext(BookContext);
    let history = useHistory();

    useEffect(() => {
        console.log();
        console.log(savedBook);
    }, []);


    if (!savedBook) {
        return (
            <div>No book selected. </div>
        );
    }


    return (
        <div className="school">

            <center>
 
                <body className="App-body">
                    <body className="App-body">
                        <h2>Book Details</h2>
                        <h5>Title: {savedBook.title}</h5>
                        <img src={savedBook.img} alt="image" />

                        <h5>
                            Authors: {savedBook.author} <br></br>
                            Publisher: {savedBook.publisher}

                        </h5>
                        <button type="submit" onClick={() => history.goBack()}> Go Back </button>

                    </body>

                </body>
            </center>

        </div>

    );
};

export default BookDetails;
