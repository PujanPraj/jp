"use client";

import { useState } from "react";
import JobsList from "../_list/jobsList";
import Jobs from "./Jobs";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = JobsList.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="md:h-[100vh] py-4">
      <div className="container">
        <h1 className="text-2xl mb-5">Current Opening</h1>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 px-3 py-2 mb-3 rounded-md"
        />
        <Jobs jobs={filteredJobs} />
      </div>
    </section>
  );
};

export default Hero;
