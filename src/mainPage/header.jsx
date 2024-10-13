import "./header.css"

function Header(){
    return(
        <div className="header">

            <h1>Numericl analysis</h1>

            <div className="navbar">

                <a href = "./gaus.html">
                    <button className="navbarButton">Gaus</button>
                </a>
                
                <a href = "./newton.html">
                    <button className="navbarButton">Newton</button>
                </a>

                <a href = "./iterative.html">
                    <button className="navbarButton">Iterative</button>
                </a>
            </div>
    
        </div>
    )
}

export default Header