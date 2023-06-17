import React from "react";
import JobCard from "./jobCard";

export default function JobList({ jobList, setTagsList }) {
  return (
    <div className="row">
      <ul className="col-12" id="job-list">
        {jobList?.map((job) =>
          job.shown ? (
            <JobCard job={job} key={job.id} setTagsList={setTagsList} />
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}
