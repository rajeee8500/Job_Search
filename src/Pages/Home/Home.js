import React from "react";
import Header from "../../Components/Header/Header";
import JobFilterSection from "../../Components/JobFilterSection/JobFilterSection";
import MostPopularVacanciesContainer from "../../Components/MostPopularVacanciesContainer/MostPopularVacanciesContainer";
import JendoWorkingProcessContainer from "../../Components/JendoWorkingProcessContainer/JendoWorkingProcessContainer";
import PopularCategoryContainer from "../../Components/PopularCategoryContainer/PopularCategoryContainer";
import FeaturedJobContainer from "../../Components/FeaturedJobContainer/FeaturedJobContainer";
import FeaturedCompaniesContainer from "../../Components/FeaturedCompaniesContainer/FeaturedCompaniesContainer";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import CandidateContainer from "../../Components/CandidateContainer/CandidateContainer";
import JobpilotForm from "../../Components/JobpilotForm/JobpilotForm";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <JobFilterSection />
      <MostPopularVacanciesContainer />
      <JendoWorkingProcessContainer />
      <PopularCategoryContainer />
      <FeaturedJobContainer /> */
      <FeaturedCompaniesContainer />
      <TestimonialCard />
      <JobpilotForm />
    </div>
  );
};

export default Home;
