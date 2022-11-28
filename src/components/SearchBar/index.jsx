import React, { useEffect, useState } from "react";
import styles from "./searchBar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=eda25039ca2db0c207beac572dc11346";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=eda25039ca2db0c207beac572dc11346&query";

const SearchBar = () => {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=eda25039ca2db0c207beac572dc11346&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navarScroll"></Navbar.Toggle>
            <Navbar.Collapse id="nabarScroll">
              <Nav
              className="me-auto my-2 my-lg-3"
              style={{maxHeight:'100px'}}
              navbarScrool></Nav>
                <div className={styles.search__bar}>
                    <form className="d-flex" onSubmit={searchMovie} autoComplete="off">
                      <input type="search"
                      placeholder="Enter Movie Name"
                      className="inputText"
                      arial-label="search"
                      value={query} onChange={changeHandler}
                      >
                      </input>
                      <button><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default SearchBar;
