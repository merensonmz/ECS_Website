import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>İletişim</h1>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Adınız" />
          <input type="email" placeholder="E-posta" />
          <textarea placeholder="Mesajınız"></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 