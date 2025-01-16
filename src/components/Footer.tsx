import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Epaisa Crypto</h3>
            <p className="text-gray-400">
              We are all strong believers in the future of digital currencies and we love being part of this growing community!
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                admin@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Building A Ealing Studios, Ealing, London, Middlesex, W5 5EP
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Perfect Money</li>
              <li>Coinpayments</li>
              <li>Advcash</li>
              <li>Payeer</li>
              <li>Best Change</li>
              <li>Block Chain</li>
              <li>Coin Base</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 hover:text-primary cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-primary cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-primary cursor-pointer" />
              <Linkedin className="w-6 h-6 hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Epaisa Crypto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};