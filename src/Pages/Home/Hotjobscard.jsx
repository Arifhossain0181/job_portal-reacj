import React from 'react';
import { Link } from 'react-router';

const Hotjobscard = ({job}) => {
    const {title,company,company_logo, requirements, description,location,salaryRange,_id} = job;
    return (
       <div className="card bg-base-100  shadow-sm">
 <div className='flex gap-2 m-2'>
     <figure>
    <img
    className='w-16'
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div>
    <h4 className='text-2xl'>{company}</h4>
    <h6>{location}</h6>
  </div>
 </div>
 
  <div className="card-body">
    <h2 className="card-title">{title}
         <div className="badge badge-secondary">NEW</div>
    </h2>
    
    <p>{description}</p>
    <div className='flex gap-2 flex-wrap '>
        {
            requirements.map(skill => <h6 className='border rounded-md text-center px-2 hover:text-blue-400 hover:bg-pink-600'>{skill}</h6>)
        }
    </div>
    <div className="card-actions justify-end">
        <h6>salary : {salaryRange.min} - {salaryRange.max}-{salaryRange.currency}</h6>
<Link to={`/jobs/${_id}`}>

      <button className="btn btn-primary">APPLY NOW</button></Link>
    </div>
  </div>
</div>
    );
};

export default Hotjobscard;