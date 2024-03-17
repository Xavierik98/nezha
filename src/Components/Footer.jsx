import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className=" text-dark text-center py-4 my-4">
      <div className="container">
        <div className="row justify-content-center"> 
          <div className="col-auto">
            <a href="https://www.facebook.com/nezha.larhrissi?mibextid=NTRm0r7WZyOdZZsz" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
              <FaFacebookF size={30} />
            </a>
            <a href="https://www.instagram.com/nezha.larhrissi/" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FNezhaLarhrissi" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com/in/nezhal/?originalSubdomain=ma" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.youtube.com/channel/votre_chaine_youtube/" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Nezha Larhrissi. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
