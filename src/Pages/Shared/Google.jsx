import React, { useContext } from 'react';
import Authcontext from '../../Context/Authcontext';

const Google = () => {
    const {signinwithgoogle} = useContext(Authcontext);
    const handlegooglesing =() =>{
        signinwithgoogle()
        .then(result=>{
            console.log(result,user);
        })
        .catch(error =>{
            console.log(error.message)
        });
        

    }
    return (
        <div>
            <button onClick={handlegooglesing} className='btn  bg-amber-600 '>Google </button>
        </div>
    );
};

export default Google;