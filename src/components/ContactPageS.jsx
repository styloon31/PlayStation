import { Mail, MapPin, Phone, Clock, X } from "lucide-react";
import Map from "./Map";
import ContactForm from "./contact-form";

export default function ContactPageS() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden mt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-50 -translate-x-16 translate-y-16" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 opacity-50 translate-y-20">
        <div className="w-full h-full transform rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24">
        <div className="w-full h-full text-green-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white rounded-full p-2">
              <X className="h-6 w-6" />
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Contact Us
            </h1>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-2 rounded-full text-red-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Store Address</h2>
                <p className="text-gray-700">
                  H-Store Locate at - F/505 , Sec -9, New Vijay Nagar, Ghaziabad
                  Near Chanakya Chowk Ram Lila Ground
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Phone</h2>
                <p className="text-gray-700">+91 9999848456</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-500">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Email</h2>
                <p className="text-gray-700">info@nextlevelgaming.co.uk</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full text-purple-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Opening Hours:</h2>
                <p className="text-gray-700">
                  Monday - Saturday: 9:00 – 8:00PM
                </p>
                <p className="text-gray-700">Sunday: 10:00AM – 6:00PM</p>
              </div>
            </div>

            <Map address="H-Store Locate at - F/505 , Sec -9, New Vijay Nagar, Ghaziabad Near Chanakya Chowk Ram Lila Ground)" />
          </div>

          {/* Right column - Form */}
          <div className="border-l pl-8 border-gray-100">
            <ContactForm />

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold mb-4">Opening Hours:</h2>
              <p className="text-gray-700">
                Monday - Saturrday: 9:00AM – 8:00PM
              </p>
              <p className="text-gray-700">Sunday: 10:00AM – 6:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
