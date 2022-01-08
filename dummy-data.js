const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Explore human trafficking, poverty, and Hindu culture  ",
    description:
      "Hosted by the anti-sex-trafficking group and NCP partner Shakti Samuha. Visit cultural and religious sites; meet women and girls NCP grants support for economic development and education;",
    location: "Kathmandu, Nepal",
    date: "Jan 07, 2022 ",
    image: "images/e1.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Everest Base Camp Trip - October 2022",
    description:
      "Come and see the lively markets in Kathmandu, the capital of Nepal, enjoy the local restaurants and local culture... then travel to take our exciting adventure to the famous Lukla airport From here the pace slows, the noise disappears and we're looked over by snow capped mountains all around us! As we weave our way around glacial valleys, baby blue water and flamboyant bridges, the views get better and better!",
    location: "Kathmandu Nepal",
    date: "Oct 23, 2021",
    image: "images/e2.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Startup Workshop for Entrepreneurs",
    description:
      "Going from idea to reality isn't easy. The difference between reality and idea is that reality is concrete while idea is abstract. Most people have expectations about how things will go, how the world is, what the rules of the road are, and what is supposed to happen in most situations.",
    location: "Swyambhu Marg Kathmandu Nepal",
    date: "JANUARY 2, 2022 ",
    image: "images/e3.png",
    isFeatured: false,
  },
  {
    id: "e4",
    title: "International Ethnic Folklore Festival",
    description:
      "While we do our best to ensure the accuracy of our listings, events may be postponed or cancelled without notice. Please confirm with the organizer before making any plans.",
    location: "Kathmandu Nepal",
    date: "9 June 2022 ",
    image: "images/e4.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "Himalayan Vegan Festival",
    description:
      "The Himalayan Vegan Festival is a family-friendly, educational, FREE 6-day event celebrating the health, environmental, and animal welfare benefits of following a plant-based lifestyle. This landmark event in the Himalayas will feature local, regional and internationally recognized speakers and vegan celebrities",
    location: "Kathmandu Nepal",
    date: " April 15, 2022 ",
    image: "images/e5.png",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
