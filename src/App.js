import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import FilterTag from "./components/filterTag";
import JobList from "./components/jobList";
import jobs from "./jobs.json";

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [tagsFilter, setTagsFilter] = useState(false);

  useEffect(() => {
    setJobsList(
      jobs.jobsList.map((job) => {
        return { ...job, shown: true };
      })
    );
  }, []);

  const toggleTagsFilter = useCallback(() => {
    setTagsFilter((tagsFilter) => {
      return !tagsFilter;
    });
  }, []);
  const clearAllTags = useCallback(() => {
    setTagsList([]);
  }, []);

  useEffect(() => {
    if (tagsList.length !== 0) {
      setTagsFilter(true);
      setJobsList((jobsList) => {
        return jobsList.map((job) => {
          job.shown = false;
          let matching = 0;
          tagsList.forEach((tag) => {
            job.requirments.forEach((req) => {
              if (req === tag) {
                matching = matching + 1;
              }
            });
          });
          if (matching === tagsList.length) job.shown = true;
          return job;
        });
      });
    } else {
      toggleTagsFilter();
      setJobsList((jobList) =>
        jobList.map((job) => {
          job.shown = true;
          return job;
        })
      );
    }
  }, [tagsList]);
  return (
    <main className="App">
      <div className="container mt-5">
        <FilterTag
          tags={tagsList}
          clearAllTags={clearAllTags}
          setTagsList={setTagsList}
          tagsFilter={tagsFilter}
          toggleTagsFilter={toggleTagsFilter}
        />
        <JobList jobList={jobsList} setTagsList={setTagsList} />
      </div>
    </main>
  );
}

export default App;
