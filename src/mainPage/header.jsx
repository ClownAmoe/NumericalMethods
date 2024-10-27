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
                    <button className="navbarButton">Fixed point iteration</button>
                </a>

                <a href = "./interpolation.html">
                    <button className="navbarButton">Lagrange interpolation</button>
                </a>

                <a href = "./interpolNew.html">
                    <button className="navbarButton">Newton's interpolation</button>
                </a>
            </div>
    
        </div>
    )
}

export default Header