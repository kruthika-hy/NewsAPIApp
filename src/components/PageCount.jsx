import React, { Component } from 'react';
import {
    Dropdown,
} from 'react-bootstrap';

class SelectPageDropDown extends Component {
    render() { 
        const {selectedValue,onDropDownChange,optionValues} = this.props;
        return ( 
            <>
             {/* <li className="list-group-item" id={id}>{desc}</li> */}
             <Dropdown className="col-md-3">
                <Dropdown.Toggle variant="primary btn-sm" id="dropdown-basic">
                    Select page length
                </Dropdown.Toggle>
                <Dropdown.Menu value={selectedValue}>
                    {optionValues.map(item => (
                        <Dropdown.Item onClick={() => onDropDownChange(item.value)} key={item.value} value={item.value} className={item.value === selectedValue ? 'activeDropdown' : ''}>{item.name}</Dropdown.Item>
                    ))}    
                </Dropdown.Menu>
             </Dropdown>
             {/* <select onChange={onDropDownChange} value={selectedValue}>
                {optionValues.map(item => (
                <option key={item.value} value={item.value}>
                    {item.name}
                </option>
                ))}
            </select> */}
            </>
                
         );
    }
}
 
export default SelectPageDropDown;
