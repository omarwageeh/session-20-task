import React from "react";

export default function JobList({ job, setTagsList }) {
  return (
    <li className={`job-card ${job.priority?.[0]} ${job.priority?.[1]}`}>
      <div className="job-card__info">
        <div className="d-md-flex align-items-center">
          <div className="img-c">
            <img src={job.imgSrc} alt="job" />
          </div>
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <p>{job.company}</p>
                <p className="tag-new">New!</p>
                <p className="tag-featured">Featured</p>
              </div>
              <ul className="job-card__tags">
                {job.requirments?.map((req, i) => (
                  <li
                    key={i}
                    onClick={() =>
                      setTagsList((tagList) => {
                        if (!tagList.find((tag) => tag === req))
                          return [...tagList, req];
                        else return [...tagList];
                      })
                    }
                  >
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <a href={void 0}>
              <h6>{job.position}</h6>
            </a>
            <ul>
              {job.desc?.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
