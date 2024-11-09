import React, {useRef} from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {
    const locationRef = useRef('')
    const checkInRef = useRef('')
    const checkOutRef = useRef('')
    const guestSizeRef = useRef(0)
    const fields = [
        { label: 'Location', icon: 'ri-map-2-line', type: 'text', placeholder: 'Where are you going?', ref: locationRef },
        { label: 'Check In', icon: 'ri-calendar-line', type: 'date', placeholder: '', ref: checkInRef },
        { label: 'Check Out', icon: 'ri-calendar-line', type: 'date', placeholder: '', ref: checkOutRef },
        { label: 'Guests', icon: 'ri-group-line', type: 'number', placeholder: '0', guestSizeRef },
    ];

  

    const searchHandler = ()=>{
        const location = locationRef.current.value
        const checkIn =  checkInRef.current.value
        const checkOut = checkOutRef.current.value
        const guestSize = guestSizeRef.current.value
        if(location === '' || checkIn === '' || checkOut === '' || guestSize === ''){
            return alert("Please fill out all fields.");
        }
    }
    return (
        <Col>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
            {fields.map((field, index) => (
                <FormGroup
                key={index}
                className={`d-flex gap-3 form__group ${index === fields.length - 1 ? 'form__group-last' : 'form__group-fast'}`}
                >
                <span>
                    <i className={field.icon}></i>
                </span>
                <div>
                    <h6>{field.label}</h6>
                    <input type={field.type} placeholder={field.placeholder} ref={field.ref}/>
                </div>
                </FormGroup>
            
            ))}
            <span className="search__icon" type = "submit" onClick={searchHandler}>
                <i class="ri-search-line"></i>
            </span>
            </Form>
        </div>
        </Col>
    );
};

export default SearchBar;
