import { Film, Instagram, Twitter, Youtube, Facebook, Mail, Phone } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" }
];

const contactInfo = [
  { icon: Mail, text: "contact@firstfighter.com" },
  { icon: Phone, text: "+1 (555) 123-4567" }
];

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Film className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">First Fighter</span>
            </div>
            <p>Logo goes here</p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Me</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start text-gray-400">
                  <item.icon className="h-5 w-5 mr-2 text-primary" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary mb-4">Follow Me</h3>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} First Fighter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}