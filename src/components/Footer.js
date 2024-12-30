import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter kaydı için API çağrısı yapılacak
    console.log('Newsletter kaydı:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kurumsal</h3>
          <ul>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
            <li><Link to="/kullanim-kosullari">Kullanım Koşulları</Link></li>
            <li><Link to="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Müşteri Hizmetleri</h3>
          <ul>
            <li><Link to="/siparis-takip">Sipariş Takibi</Link></li>
            <li><Link to="/iade-politikasi">İade Politikası</Link></li>
            <li><Link to="/sss">Sık Sorulan Sorular</Link></li>
            <li><Link to="/kargo-bilgileri">Kargo Bilgileri</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Bizi Takip Edin</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div className="newsletter">
            <h3>E-Bültene Kayıt Olun</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  required
                />
                <button type="submit">
                  <FaEnvelope />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ECS Dış Ticaret. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 