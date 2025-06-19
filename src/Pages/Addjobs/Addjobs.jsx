import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Addjobs = () => {
  const { user } = useAuth();

  const handleaddjobs = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const initialdata = Object.fromEntries(formdata.entries());
    console.log(initialdata);
    const { min, max, currency, ...newjob } = initialdata;
    console.log(newjob);
    newjob.salaryRange = { min, max, currency };
   // newjob.requirements = newjob.requirements.split("\n");
    console.log(newjob);
    fetch(`http://localhost:3000/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newjob),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your job has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myPostedjob");
      });
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100   shadow-2xl">
          <div className="card-body">
            {/*job title */}
            <form onSubmit={handleaddjobs} className="fieldset">
              {/* Job Title */}
              <label className="label">Job title</label>
              <input
                type="text"
                className="input"
                placeholder="Email"
                name="title"
              />

              {/* Job Location */}
              <label className="label">Job Location</label>
              <input
                type="text"
                className="input"
                placeholder="location"
                name="location"
              />

              {/* Job Type */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Job Type</legend>
                <select name="jobType" defaultValue="" className="select">
                  <option value="" disabled>
                    Pick a job type
                  </option>
                  <option value="Full time">Full time</option>
                  <option value="Intern">Intern</option>
                  <option value="Part time">Part time</option>
                </select>
                <span className="label">Optional</span>
              </fieldset>

              {/* Job Field */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Job Field</legend>
                <select name="jobField" defaultValue="" className="select">
                  <option value="" disabled>
                    Pick a job field
                  </option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Finance">Finance</option>
                </select>
                <span className="label">Optional</span>
              </fieldset>

              {/* Salary Range */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                <div className="form-control">
                  <label className="label">Max</label> <br />
                  <input
                    type="text"
                    className="input"
                    placeholder="Max"
                    name="maxSalary"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Min</label> <br />
                  <input
                    type="text"
                    className="input"
                    placeholder="Min"
                    name="minSalary"
                  />
                </div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend"> </legend>
                  <select name="currency" defaultValue="" className="select">
                    <option value="" disabled>
                      Pick currency
                    </option>
                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>
                    <option value="US">US</option>
                  </select>
                </fieldset>
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">Job Description</label> <br />
                <input
                  type="text"
                  className="input"
                  placeholder="Short description"
                  name="description"
                />
                <textarea
                  name="bio"
                  className="textarea"
                  placeholder="Bio"
                ></textarea>
              </div>
              {/* Email*/}
              <div className="form-control">
                <label className="label">Email</label> <br />
                <input
                  type="email"
                  className="input"
                  placeholder="email"
                  name="email"
                  defaultValue={user?.email}
                />{" "}
                <br />
                <label className="label">Bio</label>
                <br />
                <textarea
                  name="bio"
                  className="textarea"
                  placeholder="Bio"
                ></textarea>
              </div>
              {/* Email*/}
              <div className="form-control">
                <label className="label">Hr-Email</label> <br />
                <input
                  type="email"
                  className="input"
                  placeholder="hr_email"
                  name="hr_email"
                  
                />
                
                
              </div>
              {/* APPlication dateline*/}
              <div className="form-control">
                <label className="label">APPlication deadline</label> <br />
                <input
                  type="text"
                  className="input"
                  placeholder="deadline"
                  name="deadline"
                />{" "}
                <br />
              </div>

              {/* Company Name */}
              <div>
                <label className="label">Company Name</label> <br />
                <input
                  type="text"
                  className="input"
                  placeholder="Company name"
                  name="company"
                />
              </div>

              {/* Submit Button */}
              <button className="btn btn-neutral mt-4">Submitted</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addjobs;
