// import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'; 

const Nav = styled.nav `
 height: 80px;
 background: #000;
 display: flex;
 justify-content: space-between;
 align-items: center;
 color: #fff
`;
const StyledLink = styled.a ` 
padding: 0rem 2rem; 
`


const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>Ian Hancock</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/' passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='/projects' passHref>
          <StyledLink>Projects</StyledLink>
        </Link>
        <Link href='/cv' passHref>
          <StyledLink>CV</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
        
      </div>
    </Nav>
  );
};

export default Navbar;
