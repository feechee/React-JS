import "../NavBar/NavBar.css";
import CartWidget from "../Cartwidget/Cartwidget.js";
import { Navbar, NavbarToggler, Nav, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import CategoryButton from "../CategoryButtons/CategoryButton";
const NavBar = () => {
  return (
    <div>
      <Navbar className="navBar" expand="md" light>
        <Link to="/" className="marca">
          TREP.ar
        </Link>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar className="nav">
          <Nav>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/envios" className="link">
              Envios
            </Link>
            <Link to="/contacto" className="link">
              Contacto
            </Link>
          </Nav>
          <CategoryButton className="link" />
        </Collapse>
        <CartWidget />
      </Navbar>
    </div>
  );
};

export default NavBar;
