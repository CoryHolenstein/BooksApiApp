import '../App.css';

import React, { useState, useEffect, useContext } from 'react';
import { BookContext } from './BookContext';


const Bookdetails = props => {


    const savedBook = useContext(BookContext);


    useEffect(() => {
        console.log();
        console.log(savedBook);
    }, []);


    if (!savedBook || savedBook.title == "") {
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

                    </body>

                </body>
            </center>

        </div>

    );
};

export default Bookdetails;
