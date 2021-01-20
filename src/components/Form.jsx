// React
import React from 'react';
// React-Reveal (animations)
import Fade from 'react-reveal/Fade';

const Form = (props) => {
    // JSx
    return (
        <div className='form-container'>
            <Fade right cascade>
                <form onChange={props.handleInput}>
                    <label htmlFor='email'><i class="far fa-envelope"/> Email :</label>
                    <input id='email' name='email' value={props.email} type="email" placeholder='Enter yout Email address' required/>

                    <label htmlFor='name'><i class="far fa-address-card"/> Name :</label>
                    <input id='name' name='name' value={props.name} type="text" placeholder='Enter yout whole name' required/>

                    <label htmlFor='address'><i class="fas fa-map-marker-alt"/> Address :</label>
                    <input id='address' name='address' value={props.address} type="text" placeholder='Enter yout address' required/>

                    <button onClick={props.createOrder} className='btn-submit' type='submit'>Submit</button>
                </form>
            </Fade>
        </div>
    ); 
}

export default Form;