import React, { useState, useEffect } from 'react'

const Calculator = () => {
    const [input, setInput] = useState(0)

    let msg = ''
    let output = ''
    useEffect(() => {
        //   update the decimal display
        let output = bin2dec(input)
        // console.log(decimal)
    }, [input]);


    const handleChange = function (evt) {
        setInput(evt.target.value)
        if (isBinary(input) === true) {
            bin2dec(input)
            // console.log(decimal)
        }
        else {
            msg = "Not a binary number!"
            return msg
        }
    }

    // one function to check if a number is binary
    const isBinary = function (num) {
        if (/^[0-1]+$/.test(num) === true) {
            return true
        } else {
            return false
        }
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
        // largest power from the 
        const maxPower = realDigits.length;
        console.log("maxPower:  ", maxPower)
        let decimal = 0
        for (let i = 0; i < maxPower - 1; i++) {
            decimal = decimal + (realDigits[i] * 2 ** (maxPower - i));
            console.log("Converted number:  ", decimal)
        }
        return decimal
    }

    return (
        <div>
            {/* Title */}
            <h1> Binary to Decimal Calculator </h1>
            <div id='inputs'>
                <form>
                    {/* Input Binary Number */}
                    Binary Number:
                    <input
                        name="binary"
                        type="text"
                        placeholder='1010....'
                        onChange={handleChange}
                    />
                </form>
            </div>
            <hr />
            <div id='outputs'>
                {/* Output Decimal number */}
                Decimal Number: {msg}
            </div>
        </div >
    )

}
export default Calculator