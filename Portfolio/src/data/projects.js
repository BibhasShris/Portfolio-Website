import hiveImg from "../assets/The_HIVE.png";
import primeImg from "../assets/Prime_Video.png";
import crafternoonImg from "../assets/Crafternoon.png";
import funkyImg from "../assets/Funky_Buddha.jpg";
import matchdayImg from "../assets/Matchday_Poster.png";
import heroImg from "../assets/CNYC_Poster.png";
import Craft1 from "../assets/craft1.jpg";

export const projects = [
  {
    id: "hive",
    title: "THE HIVE",
    type: "Video",
    year: 2025,
    role: "Video Producer",
    category: "videography",
    featured: true, // show on homepage
    description:
      "Video project highlighting what THE HIVE @ ALTEC represents as a collaborative community space.",
    detailDescription:
      "The HIVE is a community space located @ALTEC that goes beyond learning. A place where languages connect us, cultures come alive, and people grow together.",
    imageAlt: "Video still from The HIVE project",
    image: hiveImg,
  },
  {
    id: "prime-video",
    title: "PRIME VIDEO",
    type: "UI/UX",
    year: 2025,
    role: "UI/UX Designer",
    category: "uiux",
    featured: true,
    description:
      "A redesign concept exploring how Prime Video could increase retention by transforming the platform from a passive watching experience into a more interactive and community-driven space.",
    imageAlt: "Prime Video case study thumbnail",
    image: primeImg,
  },
  {
    id: "crafternoon",
    title: "CRAFTERNOON",
    type: "Graphic Design",
    year: 2025,
    role: "Graphic Designer",
    category: "graphic",
    featured: true,
    description:
      "Poster design created for the annual ALTEC event at the University of Colorado Boulder. The event promotes cultural awareness through fun, hands-on crafting and language activities.",
    detailDescription:
      "I work as a Graphic Designer for ALTEC which stands for The Anderson Language and Technology Center. \nPoster design created for the annual ALTEC event at the University of Colorado Boulder. The event promotes cultural awareness through fun, hands-on crafting and language activities.",
    detailImage: Craft1,
    imageAlt: "Crafternoon event poster",
    image: crafternoonImg,
  },
  {
    id: "funky-buddha",
    title: "FUNKY BUDDHA",
    type: "Photography",
    year: 2025,
    role: "Photographer & Photo Editor",
    category: "photography",
    featured: true,
    description:
      "Photoshoot for The Funky Buddha Bar & Restaurant in Denver, CO. Captured interior, food, and ambiance photography for marketing and menu content.",
    imageAlt: "Funky Buddha bar and restaurant photoshoot",
    image: funkyImg,
  },
  {
    id: "matchday-poster",
    title: "Matchday Poster",
    type: "Graphic Design",
    year: 2025,
    role: "Graphic Designer",
    category: "graphic",
    featured: false, //don't show on homepage
    description:
      "Designed a matchday poster for the championship match of the 4th TPLA Cup, featuring Colorado Nepali Youth Club (CNYC) vs. Young Star.",
    detailImage: heroImg,
    imageAlt: "Matchday poster for the 4th TPLA Cup",
    image: matchdayImg,
  },
];
