import { Nav } from "react-bootstrap";
import { Container } from "@mui/material";

const Navigation = () =>{

    return(   
      <Container>
      <Nav>
        <div className="top-navbar">
          <div className="logo">
            <img src={require('../image/brand_logo.png')} alt="" />
          </div>
          <ul className="menu">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Loaction</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="login-btn">Login</button>
        </div>
      </Nav>
    </Container>
    
    )
}
export default Navigation; 