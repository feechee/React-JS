import "./NavBar.css";
import CartWidget from "./Cartwidget.js";
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
const NavBar = () =>{
    return(
      <div>
  <Navbar
    className="navBar"
    expand="md"
    light
  >
    <NavbarBrand className="marca" href="../index.html">
      TREP.ar
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="mx-auto navBar"
      >
        <NavItem>
          <NavLink className="text" href="../index.html">
            Contacto
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="../index.html">
            Envios
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Productos
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Cuerdas
            </DropdownItem>
            <DropdownItem>
              Pedulas
            </DropdownItem>
            <DropdownItem>
              Mosquetones
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>       
      </Nav>
    </Collapse>
      <a href="./index.html">
      <CartWidget />
      </a>
        

  </Navbar>
</div>
    )
    };

export default NavBar;

