import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo2.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { FaGithub } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';
// import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // const navigate=useHistory()

  const [activeLink, setActiveLink] = useState('home');
  // const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // const onScroll = () => {
    //   if (window.scrollY > 50) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // }

    // window.addEventListener("scroll", onScroll);

    // return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" style={{

        position: "fixed",
        background: "rgba(255, 255, 255, 0.3)",  
        backdropFilter: "blur(10px)", 
      }}>
        <Container>
          <a href="#" style={{
    color: 'black',
    transition: 'color 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.color = '#116D6E';
  }}
  onMouseLeave={(e) => {
    e.target.style.color = 'white';

  }}className="logo">DRX</a>

 
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" style={{marginLeft:"-40vw",marginTop:'4vh',color:"black"}} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/commute-io-verification-portal" style={{marginLeft:"0vw",width:'5vw',color:"black"}} className={activeLink === 'application-status' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('application-status')}>Application Status</Nav.Link>
              <Nav.Link href="/PublishARide" style={{marginLeft:"5vw",color:"black"}}className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('testimonials')}>Testimonials</Nav.Link>
              <Nav.Link href="/BookARide" style={{marginLeft:"-1vw",color:"black"}} className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>  
            </Nav>
            <span className="navbar-text">

              <div className="social-icon">
                <a href="https://linktr.ee/abhishek7861"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Pradeep1409/blockchainproject.git"><FaGithub style={{color:'white',transform:'scale(1.2)'}} className="github-icon"></FaGithub></a>
                            
              </div>

           
              
                <button className="vvd" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><Link to={'/new-application-for-passenger'}><span style={{ color: isHovered ? 'black' : 'white' }}>Register</span></Link></button>
                <button className="vvd" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Link to={'/login'}><span style={{ color: isHovered ? 'black' : 'white' }}>Login</span></Link></button>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}

export default NavBar;
