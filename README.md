API_URL : "https://api.themoviedb.org/3/movie/popular?api_key=eda25039ca2db0c207beac572dc11346"
API_IMG = "https://image.tmdb.org/t/p/w500/"
API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=eda25039ca2db0c207beac572dc11346&query"


https://api.themoviedb.org/3/search/movie?api_key=eda25039ca2db0c207beac572dc11346&query


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

      <div className={styles.container}>
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
  );
}



  const [movies, setMovies] = useState([]);
  const [query, setQuery]=useState('');


  const renderMovies = () => {
    movies.map(movie => {
      <MovieCard
          key={movie.id}
          movie={movie}
      />
    })
  }

  const fetchMovies = async () => {
    const {data} = await axios.get(`${API_URL}/discover/movie?api_key=eda25039ca2db0c207beac572dc11346`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    })
    console.log(data)
    setMovies(data.results)
    setMovies(data.results[0])

  }

  useEffect(() => {
    fetchMovies()
  }, [])


 <div className={styles.card__params}>
          <div className={styles.card_body}>
            <img className={styles.card__img} src={API_IMG+poster_path} onClick={handleClick}  />

            <div className={styles.card_body}>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img className={styles.card__img} src={API_IMG+poster_path} />
                    <h3>{title}</h3>
                    <h4>ImDB: {vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <br></br>
                    <h6>Overview</h6>
                    <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
          </div>
      </div>


  <Navbar bg="black" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/home">AlloMovies</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScrool"></Navbar.Toggle>
              <Navbar.Collapse id="nabarScroll">
                <Nav
                className="me-auto my-2 my-lg-3"
                style={{maxHeight:'100px'}}
                navbarScroll></Nav>

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
              </Navbar.Collapse>
          </Container>
        </Navbar>
