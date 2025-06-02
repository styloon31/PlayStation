import { Link } from "react-router-dom";
import { Star, Download, IndianRupee } from "lucide-react";
import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";

export default function Ps5Section() {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8 mt-16">
      {/* Hero Banner */}
      <div className="w-full rounded-3xl overflow-hidden mx-auto mb-12 max-w-7xl">
        <div className="relative flex items-center p-10 md:p-16 h-[300px] md:h-[400px] bg-gradient-to-r from-[#3a1a35] to-[#3a1a35]/80 rounded-3xl overflow-hidden">
          <img
            src="/img/ps5.jpg"
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
              YOUR PS5
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
          {/* <Button id="realm-btn" title="Discover More" containerClass="" /> */}
        </div>
      </div>

      {/* Accessories Section */}
      <div id="accessories" className="max-w-7xl mx-auto mt-20">
        <AnimatedTitle
          title="Top <b>A</b>ccessories <br /> For Your PS5"
          containerClass="text-left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {accessories.map((item) => (
            <AccessoryCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {/* <Button id="realm-btn" title="Browse Accessories" containerClass="" /> */}
        </div>
      </div>
    </div>
  );
}

function GameCard({ game }) {
  return (
    <a
      href="https://wa.me/919999848456" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={game.image || "/placeholder.svg"}
            alt={game.title}
            className="object-contain w-full h-full"
            width={300}
            height={200}
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg text-white font-general">
              {game.title}
            </h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm text-white">{game.rating}</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm mb-1">{game.category}</div>
          <div className="flex items-center text-[#ff3a8c]">
            <IndianRupee className="w-4 h-4 mr-1" />
            <span className="text-sm">{game.downloads}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function AccessoryCard({ item }) {
  return (
    <a
      href="https://wa.me/919999848456" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="object-contain w-full h-full"
            width={300}
            height={200}
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-white font-general mb-2">
            {item.title}
          </h3>
          <div className="text-gray-400 text-sm mb-2">{item.category}</div>
          <div className="flex items-center text-[#ff3a8c]">
            <IndianRupee className="w-4 h-4 mr-1" />
            <span className="text-sm">{item.price}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

const games = [
  {
    id: 1,
    title: "Tekken 8",
    category: "Fighting",
    rating: "4.8",
    downloads: "3000",
    image: "/games/tekken8.jpg",
  },
  {
    id: 2,
    title: "Guardians of Galaxy",
    category: "Action Adventure",
    rating: "4.8",
    downloads: "1300",
    image: "/games/gog.jpg",
  },
  {
    id: 3,
    title: "Alan Wake II",
    category: "Survival Horror",
    rating: "4.8",
    downloads: "3500",
    image: "/games/alanwake2.jpg",
  },
  {
    id: 4,
    title: "Spider Man 2",
    category: "Action Adventure",
    rating: "4.8",
    downloads: "3000",
    image: "/games/spiderman2.jpg",
  },
  {
    id: 5,
    title: "W2K25",
    category: "Sports",
    rating: "4.8",
    downloads: "3800",
    image: "/games/w2k25.jpg",
  },
  {
    id: 6,
    title: "Black Myth Wukong",
    category: "Action RPG",
    rating: "4.8",
    downloads: "4500",
    image: "/games/bmwukong.jpg",
  },
  {
    id: 7,
    title: "Call Of Duty Black Ops 6",
    category: "Spy Action Thriller",
    rating: "4.8",
    downloads: "4000",
    image: "/games/blackops6.jpg",
  },
  {
    id: 8,
    title: "Assassin's Creed Shadows",
    category: "Action",
    rating: "4.8",
    downloads: "4300",
    image: "/games/acs.jpg",
  },
];

const accessories = [
  {
    id: 1,
    title: "DualSense Wireless Controller",
    category: "Controller",
    price: "4000",
    image: "/accessories/ps5controller.jpeg",
  },
  {
    id: 2,
    title: "PS5 Skin",
    category: "Skin",
    price: "4000",
    image: "/accessories/skin.jpeg",
  },
  {
    id: 3,
    title: "PS5 Camouflage",
    category: "Controller",
    price: "4500",
    image: "/accessories/armyps5.jpeg",
  },
  {
    id: 4,
    title: "Pink PS5 Controller",
    category: "Controller",
    price: "5000",
    image: "/accessories/pink.jpeg",
  },
  {
    id: 5,
    title: "Red PS5 Controller",
    category: "Controller",
    price: "5000",
    image: "/accessories/red.jpeg",
  },
];
