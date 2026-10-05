import hiveImg from "../assets/The_HIVE.png";
import primeImg from "../assets/Prime_Video.png";
import crafternoonImg from "../assets/Crafternoon.png";
import funkyImg from "../assets/Funky_Buddha.jpg";
import matchdayImg from "../assets/Matchday_Poster.png";
import heroImg from "../assets/CNYC_Poster.png";
import Craft1 from "../assets/craft1.jpg";

//Photography
import Sony_Creative_Space from "../assets/Photography/Sony_Creative_Space/SonyCover.jpg";
import sonySidePhoto1 from "../assets/Photography/Sony_Creative_Space/SideP1.jpg";
import PurnaRai from "../assets/Photography/PurnRaiConcert/PurnaCover.jpg";

// STEP 1: ADD NEW PHOTOGRAPHY IMAGE IMPORTS HERE.
// Put files in src/assets/Photography/<your-project-folder>/ first.
// Match spelling and capital letters exactly. Remove // to activate an import.
// The Sony cover and first gallery photo are already imported above.
// Import additional gallery photos on separate lines with unique names.

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
    // PHOTOGRAPHY PROJECT 1 OF 4: edit this existing project here.
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
    image: funkyImg, // Preview cover only; change this to your imported cover name.
    // Full project images are separate from the timeline/homepage cover above.
    // Add imported photos here as { src, alt, caption (optional) }.
    gallery: [
      { src: funkyImg, alt: "Funky Buddha bar and restaurant photoshoot" },
    ],
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
  // STEP 2: Sony below is photography project 2 of 4.
  // Purna Rai below is project 3. Copy an object into the last slot for project 4.
  // Replace the id, title, year, descriptions, and imported image names.
  // Keep the comma after every project object: },

  {
    // PHOTOGRAPHY PROJECT 2 OF 4
    id: "sony_creative_space", // Unique project URL; underscores work too.
    title: "Sony Creative Space",
    type: "Photography",
    year: 2026, // TODO: confirm year; the cover image says 03/25/2025.
    dateLabel: "Mar 2026", // Optional real date; otherwise year is shown.
    role: "Photographer",
    category: "photography", // Keep this exact value.
    featured: false, // false = photography only; true = also on the homepage.
    description: "Short preview description.", // TODO: write your project summary.
    detailDescription: "The full story for the individual project page.", // TODO: add your story.
    image: Sony_Creative_Space, // Use a name from STEP 1, without quotes.
    imageAlt:
      "Sony Creative Space photowalk cover showing a photographer and model among red rocks",
    gallery: [
      // src uses the imported variable above, not a bare filename like SideP1.jpg.
      {
        src: sonySidePhoto1,
        alt: "Portrait of a woman beside flowering trees on a trail",
      },
      // Add more photos here. A caption is optional:
      // { src: anotherPhotoImport, alt: "Description", caption: "Visible caption" },
    ],
  },

  {
    // PHOTOGRAPHY PROJECT 3 OF 4
    id: "purnarai",
    title: "Purna Rai Concert",
    type: "Photography",
    year: 2025,
    dateLabel: "Apr 2025",
    role: "Photographer",
    category: "photography",
    featured: false, //don't show on homepage
    description:
      "Photographed a live concert featuring Purna Rai and Dajubhaiharu, capturing the energy, emotion, and atmosphere of the performance. The work focuses on stage presence, crowd connection, and candid performance moments.",
    // Add detailDescription when you have a longer story; for now the page uses description.
    imageAlt: "Concert photography",
    image: PurnaRai, // Must match the imported variable at the top of this file.
    // Add more imported concert photos here independently of the preview cover.
    gallery: [
      { src: PurnaRai, alt: "Purna Rai concert photograph" },
    ],
  },

  // PHOTOGRAPHY PROJECT 4 OF 4: paste your completed object here.

  // Keep all new project objects ABOVE this closing bracket.
];
