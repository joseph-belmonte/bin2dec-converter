import React, { useState, useEffect } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [input, setInput] = useState(0)
    const [decimal, setDecimal] = useState()
    const [error, setError] = useState('')
    const [isBinary, setIsBinary] = useState(true)

    useEffect(() => {
        //   update the decimal display
        bin2dec(input)
    }, [input]);


    const handleChange = function (evt) {
        setInput(evt.target.value)
    }

    //  Reference number conversion
    // Index       0       1      2        3      4         5       6       7      8        9       10
    // Binary 	   1	   0	  0	       1	  0         1	    0	    1	   1	    0       1	
    // Decimal 	1×2^10 + 0×2^9 + 0×2^8 + 1×2^7 + 0×2^6 + 1×2^5 + 0×2^4 + 1×2^3 + 1×2^2 + 0×2^1 + 1×2^0 =	1197
    // check number of places (2 digits, 3 digits, 4 digits, etc.)

    // a separate function that takes in a binary number and outputs a decimal
    const bin2dec = function (bin) {
        // convert binary into a string and split each digit
        const digits = bin.toString().split('');
        // map each digit into an array, realDigits
        const realDigits = digits.map(Number);
        // largest power from the array
        const maxPower = realDigits.length - 1;
        // initialize decimal variable outside the for loop
        let decimal = 0
        // start at zero, continue until the last element in the realDigits array
        for (let i = 0; i < realDigits.length; i++) {
            if (realDigits[i] !== 0 && realDigits[i] !== 1) {
                setIsBinary(false)
                setError('Not a binary number!')
                break;
            } else {
                setIsBinary(true)
                decimal = decimal + (realDigits[i] * 2 ** (maxPower - i));
            }
        }
        setDecimal(decimal)
        return decimal
    }

    if (isBinary === true) {
        return (
            <div id='container' className='my-auto col-lg-12'>
                {/* Title */}
                <p className='fs-5 text-wrap col-lg-12 mx-auto my-auto py-1'> Binary to Decimal Calculator </p>
                <hr id='title-hr' />
                <p className='fs-6 col-lg-12 mx-auto my-auto py-1'> Please enter a binary number</p>
                <div className='form-control form-control-sm container-sm no-border'>
                    <div id='inputs' >
                        <form className='row justify-content-center'>
                            {/* Input Binary Number */}
                            <p className='col-lg-4 align-items-center my-auto'> Binary Number:</p>
                            <input
                                className='col-lg-4'
                                name="binary"
                                type="text"
                                placeholder="10101"
                                autoComplete='off'
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                    <hr id='minor-hr' />
                    <div id='outputs' className='row justify-content-center'>
                        {/* Output Decimal number */}
                        <p className='col-lg-4 align-items-center my-auto'> Decimal Number: </p>
                        <p className='col-lg-4 align-items-center my-auto'> {decimal} </p>
                    </div>
                </div>
            </div >
        )
    }
    else {
        return (
            <div id='container' className='my-auto col-lg-12'>
                {/* Title */}
                <p className='fs-5 text-wrap col-lg-12 mx-auto my-auto py-1'> Binary to Decimal Calculator </p>
                <hr id='title-hr' />
                <p className='fs-6 col-lg-12 mx-auto my-auto py-1'> Please enter a binary number</p>
                <div className='form-control form-control-sm container-sm no-border'>
                    <div id='inputs' >
                        <form className='row justify-content-center'>
                            {/* Input Binary Number */}
                            <p className='col-lg-4 align-items-center my-auto'> Binary Number:</p>
                            <input
                                className='col-lg-4'
                                name="binary"
                                type="text"
                                placeholder="10101"
                                autoComplete='off'
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                    <hr id='minor-hr' />
                    <div id='error' className='row justify-content-center'>
                        {/* Output Decimal number */}
                        <p className='col-lg-4 align-items-center my-auto'> Decimal Number: </p>
                        <p className='col-lg-4 align-items-center my-auto'> {error} </p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Calculator