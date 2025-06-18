import React, { useEffect, useState } from 'react';
import Hotjobscard from './Hotjobscard';

const Hotjobs = () => {
    const [ jobs ,setjobs] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:3000/jobs`)
        .then(res =>res.json())
        .then(data => setjobs(data))

    },[])
    return (
        <div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <Hotjobscard job={job}key={job._id}></Hotjobscard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;