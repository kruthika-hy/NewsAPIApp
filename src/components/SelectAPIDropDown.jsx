import React, { Component } from 'react';
import {
    Dropdown,
} from 'react-bootstrap';
class SelectAPIDropDown extends Component {
    render() { 
        const {selectedValue,onDropDownChange,optionValues} = this.props;
        return ( 
            <>
            <p className='selectLabel'>Select API: </p>
            <Dropdown className="col-md-3">
                <Dropdown.Toggle variant="primary btn-sm btn-general" id="dropdown-basic">
                    {selectedValue === "nyTimes" ? "NY Times" : "News API"}
                </Dropdown.Toggle>
                <Dropdown.Menu  value={selectedValue}>
                    {optionValues.map(item => (
                        <Dropdown.Item onClick={() => onDropDownChange(item.value)} className={item.value === selectedValue ? 'activeDropdown' : ''} key={item.value} value={item.value}>{item.name}</Dropdown.Item>
                    ))}    
                </Dropdown.Menu>
             </Dropdown>
            </>
                
         );
    }
}
 
export default SelectAPIDropDown;
