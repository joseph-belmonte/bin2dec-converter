import React, { useState, useEffect } from 'react'

const Calculator = () => {
    const [input, setInput] = useState(0)
    const [decimal, setDecimal] = useState()

    let msg = ''
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
        console.log("DIGITS:  ", realDigits)
        // largest power from the array
        const maxPower = realDigits.length - 1;
        // initialize decimal variable outside the for loop
        let decimal = 0
        // start at zero, continue until the last element in the realDigits array
        for (let i = 0; i < realDigits.length; i++) {
            decimal = decimal + (realDigits[i] * 2 ** (maxPower - i));
            console.log(decimal)
        }
        setDecimal(decimal)
        return decimal
    }

    return (
        <div>
            {/* Title */}
            <h1 className='card-title'> Binary to Decimal Calculator </h1>
            <p className='card-text'> Please enter a binary number, with a maximum of 8 digits</p>
            <div className='form-control'>
                <div id='inputs' className='py-2'>
                    <form>
                        {/* Input Binary Number */}
                        <p> Binary Number:</p>
                        <input
                            name="binary"
                            type="text"
                            placeholder="101010101010"
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <div id='outputs' className='py-2'>
                    {/* Output Decimal number */}
                    Decimal Number: {decimal}
                </div>
            </div>
        </div >
    )

}
export default Calculator