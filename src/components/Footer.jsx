import React, { Component } from 'react';

class FooterComponent extends Component {
    render() { 
        return ( 
            <>
           <footer className="bg-light text-center">
                <div className="text-center p-3">
                    © 2021 Copyright: &nbsp; 
                    <a href="#" className="headerFont">BATMAN</a>
                </div>
            </footer>
            </>
          );
    }
}
 
export default FooterComponent;