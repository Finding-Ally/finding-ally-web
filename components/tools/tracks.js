import imgSrc from "public/assets/artwork.jpg";
import imgSrc2 from "public/assets/artwork2.jpg";
import imgSrc3 from "public/assets/artwork3.jpg";
import cali from "public/assets/cali-wataboi.mp3";
import fifty from "public/assets/50-tobylane.mp3";
import iwonder from "public/assets/iwonder-dreamheaven.mp3";

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
const tracks = [
  {
    title: "Cali",
    artist: "Wataboi",
    audioSrc: cali,
    image: imgSrc,
    color: "#00aeb0"
  },
  {
    title: "50",
    artist: "tobylane",
    audioSrc: fifty,
    image: imgSrc2,
    color: "#ffb77a"
  },
  {
    title: "I Wonder",
    artist: "DreamHeaven",
    audioSrc: iwonder,
    image: imgSrc3,
    color: "#5f9fff"
  }
];

export default tracks;
