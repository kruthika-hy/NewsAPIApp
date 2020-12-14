import React from 'react';
import { Navbar } from 'react-bootstrap';
export const NavigationBar = () => {
  return(
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">News App</a>
      </div>
      {/* <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul> */}
    </div>
  </nav>
  );
}
// class NavComponent extends Component {
//     render() { 
//         return ( 
          
//          );
//     }
// }
 
// export default NavComponent;