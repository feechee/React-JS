import "./NavBar.css";

const NavBar = () =>{
    return (
    <nav className='navBar'>
    <ul className='listado'>
    <a href="../index.html"><li className='item'>Home</li></a>
    <a href="../index.html"><li className='item'>Productos</li></a>
    <a href="../index.html"><li className='item'>Contacto</li></a>
    </ul>
  </nav>
    );
    };

export default NavBar;

