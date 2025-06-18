import React from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2'

const JobaPPly = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  console.log(id, user);

  const submitted = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkden = form.linked.value;
    const github = form.github.value;
    const reasume = form.reasume.value;
    const values = { linkden, github, reasume };
    console.log(values);
    const jobaPPlication = {
      job_id: id,
      aPPlication_email: user.email,
      linkden,
      github,
      reasume,
    };
    fetch("http://localhost:3000/job-aPPlication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobaPPlication),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
                navigate('/myaPPlication')
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">APPLy job and good luck</h1>
          <p className="py-6"></p>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body">
            <form onSubmit={submitted} className="fieldset">
              <label className="label">Linkden In URL</label>
              <input
                type="url"
                className="input"
                placeholder="Linkdenin url"
                name="linked"
              />
              <label className="label">Github URL</label>
              <input
                type="url"
                className="input"
                placeholder="GITHUB"
                name="github"
              />
              <label className="label">Reasume ULR</label>
              <input
                type="url"
                className="input"
                placeholder="Reasome"
                name="reasume"
              />

              <button className="btn btn-neutral mt-4">APPLY</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobaPPly;
