import React from 'react'; 
const NavBar = () => {
    return ( 
        <nav className="navbar">
          <h1> The Dojo Blog</h1>
               <div className="links"> 
                   <a href="/">Home</a> 
                   <a href="/create" styles={{
                       color:"white",
                       backgroundColor:"tomato",
                       borderRadius: "8px"
                   }}>New Blog</a>
              </div>

        </nav>

      );
}
 
export default NavBar;