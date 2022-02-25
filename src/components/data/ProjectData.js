import mugshot from "../../assets/Headshots/uk_dl.png";
import mountains from "../../assets/Background/mtns.jpeg";
import snow from "../../assets/Background/mtns-at-night.jpeg";
import yung from "../../assets/Images/yung.png";
import pizza from "../../assets/Images/pizza.svg.png";
import weather from "../../assets/Images/weather.svg.png";

const ProjectData = [
  {
    title: "PizzaHunt",
    img: mugshot,
    description:
      "An app that allows users to create edit and delete pizza recipes",
    site: "https://pizza-hunting.herokuapp.com/",
    repo: "https://github.com/cpesar/pizza-hut",
  },

  {
    title: "ShopShop",
    img: yung,
    description:
      "A simple e commerce app where users can add items to their cart and checkout using Stripe",
    site: "https://the-online-store.herokuapp.com/",
    repo: "https://github.com/cpesar/the-online-store",
  },

  {
    title: "DockNFlock",
    img: mountains,
    description:
      "An app that allows users to search for parking and tickets in one conveienent place",
    site: "https://dock-and-flock.herokuapp.com/",
    repo: "https://github.com/cpesar/dock-n-flock",
  },

  {
    title: "BestSellers",
    img: snow,
    description:
      "A simple app that allows a user to search for a book within a selected category. The user can then checkout their item which will link them to Amazon",
    site: "https://cpesar.github.io/the-best-sellers/",
    repo: "https://github.com/cpesar/the-best-sellers",
  },

  {
    title: "GoogleBooks",
    img: yung,
    description: "Simple book search app",
    site: "https://the-book-store-2.herokuapp.com/",
    repo: "https://github.com/cpesar/the-book-store-2",
  },

  {
    title: "mugshotApp",
    img: weather,
    description:
      "A user can search for weather by city state or zipcode. Uses the openweather api",
    site: "https://cpesar.github.io/weather-dashboard-refactor/",
    repo: "https://github.com/cpesar/weather-dashboard-refactor",
  },

  {
    title: "DeepThoughts",
    img: pizza,
    description: "A thought blog",
    site: "https://deep-thinker.herokuapp.com/",
    repo: "https://github.com/cpesar/deep-thoughts",
  },

  {
    title: "ZooAnimals",
    img: mugshot,
    description: "A zoo animal blog that uses CRUD routes",
    site: "https://zoanimals.herokuapp.com/",
    repo: "https://github.com/cpesar/zookeeper",
  },
];

export default ProjectData;
