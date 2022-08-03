import React, { useState } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


const State = () => {
    const [value, setValue] = useState('Hello');
    const [getvalue, settValue] = useState('Your Name');

    const handleChange = (e) => {
        //console.log('Work');
        setValue(e.target.value);

    }
    const submitName = () => {
        settValue('Prakash Chand');
    }

    //4 alert input
    const doAlert = value === 'Pc';
    doAlert ? alert('Already Exist') : console.log('Not Exist');


    return (
        <>

            <div className='spacing'>
                <MDBCol size='md-12'>
                    <MDBRow style={{ margin: 'auto' }}>
                        <MDBCol size='md-3'>
                            <div className='head-top bg-info shadow-1-strong p-4' >



                                <div className="form-outline mb-4">
                                    <h3 className='text-center text-white pb-3'>
                                        {value}
                                    </h3>
                                    <input type="text" className="mb-2 form-control" placeholder='Enter your Name' value={value} onChange={handleChange}  required />
                                    <h3 className='text-center text-white pb-3'>
                                        {getvalue}
                                    </h3>
                                    <input type="submit" className="w-100 btn btn-primary btn-block" value={'Your Name'} onClick={submitName} />
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>



            </div>

        </>

    )
}
export default State 