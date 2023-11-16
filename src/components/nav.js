import "../App.css";

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
export default function Nav()
{
    return(
        <>
           <nav className="border-bottom border-info navbar navbar-dark navbar-expand-lg bg-body-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Eukstera</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            
                            {/* add links here */}

                             {/*Home Link  */}
                             <Link  style={{textDecoration:'none'}} to="/WebSYS" className="nav-item" ><li data-bs-toggle="tooltip" data-bs-title="Another one here too" className="nav-link " >Home</li></Link>
                             {/* Members Link */}
                             <Link style={{textDecoration:'none'}} to="/members" className="nav-item" ><li className="nav-link" >Members</li></Link>
                             {/* Content Management Link */}
                             <Link style={{textDecoration:'none'}} to="/contentManager" className="nav-item" ><li className="nav-link" >Manage Content</li></Link>
                            

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark  ">
                                    <li><a className="dropdown-item " href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Basta Action</a></li>
                                    <li><a className="dropdown-item" href="#">Sam Ting Acshon</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
}