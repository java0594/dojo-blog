const Home  = () => {
    const handleClick = () => {
        console.log('Hello, ninjas');
    }
    const handleClickAgain = (name) => {
        alert('hello' + name);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('mario')}>Click me again</button>
        </div>
     );
}
 
export default Home;