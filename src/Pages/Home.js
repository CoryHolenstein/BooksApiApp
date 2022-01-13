
import '../App.css';
import { BookContext } from '../Utility/BookContext';
import React, { useState, Component, useEffect, createContext, useContext,  useCallback  } from 'react';
import { useHistory, context, Link } from "react-router-dom";
import Pagination from '../Utility/Pagination';
import Bookdetails from '../Utility/BookDetails';
import List from '../Utility/List';




const Home = () => {


const [results, setResults] = useState([]);
const [input, setInput] = useState("");
const savedBook = useContext(BookContext);
const [resultsPerPage, setResultsPerPage] = useState(10);
const [currentPage, setCurrentPage] = useState(1);
const history = useHistory();
const indexofLastResult = currentPage * resultsPerPage;
const indexOfFirstResult = indexofLastResult - resultsPerPage;
const currentResults = results.slice(indexOfFirstResult, indexofLastResult);
const [currentView, setCurrentView] = useState("list");

    useEffect(() => {
        document.title = "Google Book API Client | Home"
    }, []);


    
    const handleToggleCurrentView = useCallback(() => {
        setCurrentView(view => (view === "list" ? "grid" : "list"));
    }, [setCurrentView]);

  const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(input);
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + input + "&maxResults=40")
            .then((res) => res.json())
            .then((data) => setResults(data.items));
            console.log(results);

    }
     const handleChange = event => {
        event.preventDefault();
        const input = event.target.value;
        setInput(input);
    }
    const viewBookDetails = bookNumber => props => {


        console.log("Current book", results[bookNumber]);
        savedBook.setTitle(results[bookNumber].volumeInfo.title);
        savedBook.setPublisher(results[bookNumber].volumeInfo.publisher);
        savedBook.setImg(results[bookNumber].volumeInfo.imageLinks.smallThumbnail);
        savedBook.setAuthor(results[bookNumber].volumeInfo.authors);
        console.log("Saved book", savedBook);

        history.push({
            pathname: '/Bookdetails'
        });

    };


          return (
        <div className="App">
    
            <div className="content-home">
                <center>
                <h1> Search </h1>

                <form onSubmit={handleSubmit}>
                        <label>
                            Use the search bar to find a book: </label> <br></br>
                        <input
                             type="text" onChange={handleChange}
                            placeholder="Search"
                            autoComplete="off"
                        />
                         <button type="submit" value="Search" disabled={!input} >Search </button>
                    </form>
                </center>
            
                 <div >
                 <center>
                        {currentResults.map(function (item, i) {
                            return <tr key={'item-' + i}> <td>{item.volumeInfo.title}</td><td> <a href={item.volumeInfo.previewLink}> {item.volumeInfo.imageLinks.smallThumbnail == null ? item.volumeInfo.imageLinks.smallThumbnail = "text" : "" } <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="image" /> </a>
                                <button type="submit" onClick={viewBookDetails(i)} > Book details </button>  </td> </tr>
                        })}
                        </center>
                    </div>

                </div>
       
        </div>

    );




}

export default Home;