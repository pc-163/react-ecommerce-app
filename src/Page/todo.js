import React, { useState } from 'react';
import State from '../Page/state.js';
//import { Button, Container } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink, MDBBtn, MDBBtnGroup, MDBIcon } from 'mdb-react-ui-kit';


const Todo = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [todo, settodo] = useState([]);


  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8); //generate small id

  const isValid = value.length || message.length < 0;

  const submitList = (e) => {
    e.preventDefault();

    isValid
      ? settodo([...todo, { id: small_id, name: value, message: message}])
      : console.log('wjivwi');
      
      
    setValue('');
    setMessage('');

  }

  const handleChange = (e) => {
    //console.log('Work');
    setValue(e.target.value);

  }
  const getText = (e) => {
    //console.log('Work');
    setMessage(e.target.value);

  }

  const deleteList = (id) => {
    settodo(todo.filter(dt => dt.id !== id)
  
    );
   
  }

  return (
    <>
    
      <div className='spacing'>
        <MDBCol size='md-12'>
          <MDBRow style={{ margin: 'auto' }}>
            <MDBCol size='md-3'>
              <div className='head-top bg-info shadow-1-strong p-4' >
                <h3 className='text-center text-white pb-3'>
                  My Details
                </h3>
                <form onSubmit={submitList}>
                <div className="form-outline mb-4">
                  <input type="text" className="form-control" placeholder='Enter your Name' onChange={handleChange} value={value} required/>

                </div>

                <div className="form-outline mb-4">
                  <textarea className="form-control" id="form4Example3" rows="4" placeholder='Message' onChange={getText} value={message} required></textarea>
                </div>

                <input type="submit" className="w-100 btn btn-primary btn-block" value={'Submit'} />
                </form>
              </div>
            </MDBCol>
            <MDBCol size='md-9'>
              <MDBCol size='md-12'>
                <MDBRow>
                {todo.map(item => (
                  <MDBCol size='md-3 mb-3 my-color' key={item.id}>
                    <MDBCard>
                      <MDBCardBody >
                          <MDBCardTitle>{item.name}</MDBCardTitle>
                          <MDBCardText>{item.message}</MDBCardText>
                         <button type="submit" className="btn btn-block delete" onClick={()=> deleteList(item.id)}>Delete</button>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  ))}
                </MDBRow>
              </MDBCol>
            </MDBCol>

          </MDBRow>
        </MDBCol>



      </div>
      <MDBCol size='md-12'>
                 <State /> 
      </MDBCol>


    </>

  )
}
export default Todo 