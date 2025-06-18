import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Jobdetails = () => {
  const data = useLoaderData();
  console.log('Job details data:', data); // ✅ Add this

  const {_id, title, company, deadline } = data;

  return (
    <div className='ml-4'>
        dfg
      <h3>job details for {title}</h3>
      <h3>apply for {company}</h3>
      <h3>deadline: {deadline ? deadline : 'Not provided'}</h3>
     
      <Link to={`/jobaPPly/${_id}`}>  <button className='btn bg-amber-600'>APPlay now</button> </Link>
    </div>
  );
};

export default Jobdetails;
