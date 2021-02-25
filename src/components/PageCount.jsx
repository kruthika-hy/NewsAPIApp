import React, { Component } from 'react';
import {
    Dropdown,
} from 'react-bootstrap';

class SelectPageDropDown extends Component {
    render() { 
        const {selectedValue,onDropDownChange,optionValues,apiValue} = this.props;
        return ( 
            <>
             <p className='selectLabel'>Select page length: </p>
             <Dropdown className="col-md-3">
                <Dropdown.Toggle variant="primary btn-sm btn-general" id="dropdown-basic">
                    {selectedValue}
                </Dropdown.Toggle>
                <Dropdown.Menu value={selectedValue}>
                    {optionValues.map(item => (
                        <Dropdown.Item onClick={() => onDropDownChange(item.value,apiValue)} key={item.value} value={item.value} className={item.value === selectedValue ? 'activeDropdown' : ''}>{item.name}</Dropdown.Item>
                    ))}    
                </Dropdown.Menu>
             </Dropdown>
            </>
         );
    }
}
 
export default SelectPageDropDown;
