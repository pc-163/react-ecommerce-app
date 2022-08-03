import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Calculator = () => {

    const [addNumber, setNumber] = useState('');
    const [addNumber2, setNumber2] = useState('');
    const [mergeNumber, setMerge] = useState(addNumber + addNumber2);

    const calculateNumbers = () => {
        setMerge(addNumber + addNumber2);
        setNumber('');
        setNumber2('');
    }

    //6

    const [top, setTop] = useState(300);
  
    function clickUp() {
        setTop(top - 50);
    }
   
    const mystyle = {
        transform: `translateY(${top}px)`
    }
    return (
        <>
            <MDBContainer>
                <div className='spacing'>
                    <MDBRow className='row-cols-1 row-cols-md-2 g-4 mb-5'>

                        <MDBCol>
                            <div className='head-top bg-danger shadow-1-strong p-4' >
                                <div className="form-outline mb-4">
                                    <h5 className='text-center text-white'>{mergeNumber}</h5>
                                    <input type="number" className="mb-2 form-control" placeholder='' onChange={(e) => setNumber(parseFloat(e.target.value))} value={addNumber} required />
                                    <input type="number" className="mb-2 form-control" placeholder='' onChange={(e) => setNumber2(parseFloat(e.target.value))} value={addNumber2} required />

                                    <button className="w-100 btn btn-success btn-block" onClick={calculateNumbers}>Add Numbers</button>
                                </div>
                            </div>
                        </MDBCol>


                        <MDBCol>
                            <button className="w-100 btn btn-success btn-block" onClick={clickUp}>Move Up</button>
                          
                            <div
                                className="box"
                                style={mystyle}
                            />
                        </MDBCol>

                    </MDBRow>

                </div>
            </MDBContainer>
        </>
    )
}

export default Calculator