import { Link } from "react-router-dom";
import { Star, Download } from "lucide-react";
import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";

export default function Ps5Section() {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8 mt-16">
      {/* Hero Banner */}
      <div className="w-full rounded-3xl overflow-hidden mx-auto mb-12 max-w-7xl">
        <div className="relative flex items-center p-10 md:p-16 h-[300px] md:h-[400px] bg-gradient-to-r from-[#3a1a35] to-[#3a1a35]/80 rounded-3xl overflow-hidden">
          <img
            src="/img/Ps4.jpg"
            alt=""
            className="absolute w-full h-full object-cover left-0"
          />
          <div className="relative z-10 max-w-xl">
            <p className="text-lg mb-2 font-general">
              Welcome To Play Station Universe
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-zentry">
              <span className="text-black">
                BU<b>Y</b>
              </span>{" "}
              YOUR PS4
              <br />
              NOW
            </h1>
            <Button id="realm-btn" title="Buy Now" containerClass="mt-5" />
          </div>
        </div>
      </div>

      {/* Popular Games Section */}
      <div id="games" className="max-w-7xl mx-auto">
        <AnimatedTitle
          title="M<b>o</b>st Popular <br />  G<b>a</b>mes"
          containerClass="text-left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button id="realm-btn" title="Discover More" containerClass="" />
        </div>
      </div>
    </div>
  );
}

function GameCard({ game }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          className="object-cover w-full h-full"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg text-white font-general">{game.title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm text-white">{game.rating}</span>
          </div>
        </div>
        <div className="text-gray-400 text-sm mb-1">{game.category}</div>
        {/* <div className="flex items-center text-[#ff3a8c]">
          <Download className="w-4 h-4 mr-1" />
          <span className="text-sm">{game.downloads}</span>
        </div> */}
      </div>
    </div>
  );
}

const games = [
  {
    id: 1,
    title: "Fortnite",
    category: "Sandbox",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "PubG",
    category: "Battle S",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Dota2",
    category: "Steam-X",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "CS-GO",
    category: "Legendary",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Mini Craft",
    category: "Legendary",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Eagles Fly",
    category: "Matrix Games",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Warface",
    category: "Max 3D",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Warcraft",
    category: "Legend",
    rating: "4.8",
    downloads: "2.3M",
    image: "/placeholder.svg",
  },
];
