import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Send } from "lucide-react";

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
                ssimplexa@gmail.com
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
    <li>
      <a 
        href="https://perfectmoney.is/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Perfect Money
      </a>
    </li>
    <li>
      <a 
        href="https://www.coinpayments.net/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Coinpayments
      </a>
    </li>
    <li>
      <a 
        href="https://advcash.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Advcash
      </a>
    </li>
    <li>
      <a 
        href="https://payeer.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Payeer
      </a>
    </li>
    <li>
      <a 
        href="https://www.bestchange.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Best Change
      </a>
    </li>
    <li>
      <a 
        href="https://www.blockchain.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Block Chain
      </a>
    </li>
    <li>
      <a 
        href="https://www.coinbase.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Coin Base
      </a>
    </li>
  </ul>
</div>
          <div>
  <h4 className="font-semibold mb-4">Follow Us</h4>
  <div className="flex space-x-4">
    <a 
      href="https://www.facebook.com/share/12Gh8vnw4e4/
" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-primary transition-colors"
    >
      <Facebook className="w-6 h-6" />
    </a>
    <a 
      href="https://t.me/Simplexinvestments " 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Telegram"
      className="hover:text-primary transition-colors"
    >
      <Send className="w-6 h-6" />
    </a>
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