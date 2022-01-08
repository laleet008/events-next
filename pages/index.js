import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventComponent from "../components/event/Event";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventComponent items={featuredEvents} />
    </div>
  );
};

export default HomePage;
