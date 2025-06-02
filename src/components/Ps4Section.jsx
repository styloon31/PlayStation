import { Link } from "react-router-dom";
import { Star, Download, IndianRupee } from "lucide-react";
import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";

export default function Ps4Section() {
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
          {/* <Button id="realm-btn" title="Discover More" containerClass="" /> */}
        </div>
      </div>

      {/* Accessories Section */}
      <div id="accessories" className="max-w-7xl mx-auto mt-20">
        <AnimatedTitle
          title="Top <b>A</b>ccessories <br /> For Your PS4"
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
    title: "The Amazing Spiderman 2",
    category: "Action Adventure",
    rating: "4.8",
    downloads: "2500",
    image: "/games/amazingsm2.jpg",
  },
  {
    id: 2,
    title: "Sekiro Shadow Die Twice",
    category: "Action Adventure",
    rating: "4.8",
    downloads: "3500",
    image: "/games/sekiro.jpg",
  },
  {
    id: 3,
    title: "Read Dead Redemption",
    category: "Action Adventure",
    rating: "4.8",
    downloads: "1800",
    image: "/games/rdr.webp",
  },
  {
    id: 4,
    title: "Read Dead Redemption II",
    category: "Action Adventure",
    rating: "4.8",
    downloads: "1800",
    image: "/games/rdr2.webp",
  },
  {
    id: 5,
    title: "Need For Speed Hot Pursuit",
    category: "Racing",
    rating: "4.8",
    downloads: "1500",
    image: "/games/nfs.jpg",
  },
  {
    id: 6,
    title: "A Way Out",
    category: "Co-op Adventure",
    rating: "4.8",
    downloads: "2000",
    image: "/games/awayout.jpg",
  },
  {
    id: 7,
    title: "Jump Force",
    category: "Fighting Game",
    rating: "4.8",
    downloads: "2500",
    image: "/games/jumpforce.jpg",
  },
  {
    id: 8,
    title: "Call Of Duty Mordern Warfare Remastered",
    category: "Action",
    rating: "4.8",
    downloads: "2000",
    image: "/games/codmordern.webp",
  },
];

const accessories = [
  {
    id: 1,
    title: "PS4",
    category: "Controller",
    price: "25000",
    image: "/accessories/ps4b.jpeg",
  },
  {
    id: 2,
    title: "Red Camouflage PS4 Controller",
    category: "Controller",
    price: "3000",
    image: "/accessories/redcam.jpeg",
  },
  {
    id: 3,
    title: "Blue Camouflage PS4 Controller",
    category: "Controller",
    price: "4000",
    image: "/accessories/bluecam.jpeg",
  },
  {
    id: 4,
    title: "Red PS4 Controller",
    category: "Charging",
    price: "2500",
    image: "/accessories/redps4.jpeg",
  },
];
