import React, { Component } from 'react';
import {
    Dropdown,
} from 'react-bootstrap';
class SelectAPIDropDown extends Component {
    render() { 
        const {selectedValue,onDropDownChange,optionValues} = this.props;
        return ( 
            <>
             {/* <li className="list-group-item" id={id}>{desc}</li> */}
             {/* <select onChange={onDropDownChange} value={selectedValue}>
                {optionValues.map(item => (
                <option key={item.value} value={item.value}>
                    {item.name}
                </option>
                ))}
            </select> */}
            <Dropdown className="col-md-3">
                <Dropdown.Toggle variant="primary btn-sm" id="dropdown-basic">
                    Select API
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
