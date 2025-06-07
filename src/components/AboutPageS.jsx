import { Check, MapPin, Phone } from "lucide-react";

export default function AboutPageS() {
  return (
    <div className="min-h-screen bg-black text-white mt-16">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-5xl font-bold text-center text-sky-400 mb-2 font-robert-medum">
          ABOUT PLAYSTATION UNIVERSE
        </h1>
        <h2 className="text-xl text-center mb-12">
          YOUR TRUSTED SOURCE FOR PRE-OWNED PLAYSTATION GEAR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-circular-web">
          <div>
            <p className="text-xl mb-6">
              At <span className="text-sky-400">Playstation Universe</span>, we
              believe every gamer deserves access to top-tier PS5{" "}
              <span className="text-sky-400">x</span> stion- games, and
              accessories at unbeatable prices—all heetly price tag. *
            </p>

            <h2 className="text-3xl font-bold text-sky-400 mb-6">
              WHY CHOOSE US?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-2">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <span className="font-bold">Fully Tested & Refurbished</span>
                  <p>Every 12-point inspection</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <span className="font-bold">Huge Selection- </span>
                  <p>
                    Thousands of games in stock, from retro gems to the latest
                    releases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <span className="font-bold">Competitive Prices- </span>
                  <p>Save up to 50% compared to new.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <span className="font-bold">Trade-In Program- </span>
                  <p>Fast-in Program with sop ceditt</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-sky-400 mt-10 mb-6">
              BY THE NUMBERS
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-sky-400 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-black relative">
                    <div className="absolute right-0 bottom-0 w-6 h-6 bg-black"></div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-sm">happy gamers served</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-sky-400 flex items-center justify-center">
                  <div className="text-black text-2xl font-bold">%</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98.7%</div>
                  <div className="text-sm">positive customer feedback</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-sky-400 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h0c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75h0c1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">12,000+</div>
                  <div className="text-sm">PlayStation games available</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-sky-400 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">2-3 days</div>
                  <div className="text-sm">average delivery time</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <img
                src="/img/about.png"
                alt="PlayStation 5 console with controller and games"
                className="w-full"
              />
            </div>

            <h2 className="text-3xl font-bold text-sky-400 mb-6">
              OUR QUALITY GUARANTEE
            </h2>

            <p className="mb-6">
              We don't just sell used gaming gear- we restore it to near-new
              concion.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center text-black font-bold">
                  1
                </div>
                <div className="font-bold">Full Diagnostic Check</div>
              </div>

              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center text-black font-bold">
                  2
                </div>
                <div className="font-bold">Deep Cleaning & Sanitization</div>
              </div>

              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center text-black font-bold">
                  3
                </div>
                <div className="font-bold">90-Day Warranty</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-sky-400 mb-6">
              VISIT OR CONTACT US
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p>H-Store</p>
                <p>F/505, Sec-9</p>
                <p>New Vijay Nagar</p>
                <p>Ghaziabad</p>
                <p>Near Chanakya Chowk</p>
                <p>Ram Lila Ground</p>
              </div>

              <div>
                <p>Mon-Fri: 10AM–6 PM</p>
                <p>Sat: 9AM–9 PM</p>
                <p>Sun: 11AM–6 PM</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-2xl">Game smart. Play hard.</div>
              <div className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h0c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75h0c1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="text-sky-400" />
            <div>
              <p>H-Store F/505, Sec-9 New Vijay Nagar</p>
              <p>Mon-Fri: 10AM – 8 PM</p>
              <p>Sat: 9AM – 9 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="text-sky-400" />
            <div>
              <p>+91 9999848456</p>
              <p>+91 9310679998</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
