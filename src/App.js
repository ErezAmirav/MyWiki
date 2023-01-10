function App() {
  return (
    <div className="App">
      <header>
        <h1>My Wiki</h1>
        <form className="search-box">
          <input type="search" placeholder="Search.." />
        </form>
        <p className="search-results">Search Results: </p>
      </header>
      <div className="results">
        <div className="result">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem.</p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default App;
