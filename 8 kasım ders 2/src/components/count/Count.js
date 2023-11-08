import React, { useState } from 'react'

function Count() {

    const [value,setValue]=useState(0)
    function sifir (){
        if ((value)>0){
            
        setValue(value - 1)
        }
    }

    function on (){
        if ((value)<10){
            
        setValue(value + 1)
        }
    }


    return (

        <div>
            <h1>
                Count = {value}         
            </h1>

            <button onClick={on} className="btn btn-success m-3"> Arttır </button>
            <button onClick={sifir} className="btn btn-danger m-3"> Azalt  </button>

        </div>
    )
}

export default Count
