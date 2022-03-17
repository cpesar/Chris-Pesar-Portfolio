import notes from "../../assets/Images/notetaker.png";
import docker from "../../assets/Images/DockNFlock.png";
import bestsellers from "../../assets/Images/bestsellers.png";
import pizza from "../../assets/Images/pizza.svg.png";
import weather from "../../assets/Images/weather.svg.png";

const ProjectData = [
  {
    title: "DockNFlock",
    img: docker,
    description:
      "An app that allows users to search for parking and event tickets in one conveienent place. This was a group project completed during my bootcamp at the University of Utah",
    site: "https://dock-n-flock.netlify.app/",
    repo: "https://github.com/cpesar/dock-n-flock",
  },
  {
    title: "BestSellers",
    img: bestsellers,
    description:
      "An app that allows a user to search for a book within a selected category. The app uses the Googlebooks api to retrieve the book data. Once the user makes a selection they are redirected to Amazon's website where they can purchase the book.",
    site: "https://cpesar.github.io/the-best-sellers/",
    repo: "https://github.com/cpesar/the-best-sellers",
  },

  {
    title: "PizzaHunt",
    img: pizza,
    description: "Users can Create Read Update and Delete pizza recipes",
    site: "https://pizza-hunting.herokuapp.com/",
    repo: "https://github.com/cpesar/pizza-hut",
  },

  {
    title: "Note-Taker",
    img: notes,
    description:
      "A simple note-taker application where users can write, save, and delete notes. The app uses Express and mysql2.",
    site: "https://pesar-note-taker.herokuapp.com/",
    repo: "https://github.com/cpesar/take-notes",
  },

  {
    title: "Weather App",
    img: weather,
    description:
      "A user can search for weather by city state or zipcode. Uses the openweather api",
    site: "https://cpesar.github.io/weather-dashboard-refactor/",
    repo: "https://github.com/cpesar/weather-dashboard-refactor",
  },
];

export default ProjectData;
