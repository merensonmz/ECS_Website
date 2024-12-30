import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/HomeSlider.css';

const HomeSlider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  useEffect(() => {
    // Burada veritabanından slider verilerini çekeceğiz
    fetchSliderData();
  }, []);

  const fetchSliderData = async () => {
    try {
      // Örnek API çağrısı - backend'inize göre değişecek
      const response = await fetch('/api/slider-data');
      const data = await response.json();
      setSlides(data);
    } catch (error) {
      console.error('Slider verileri yüklenirken hata:', error);
      // Hata durumunda varsayılan veriler
      setSlides([
        {
          id: 1,
          imageUrl: '/default-slides/slide1.jpg',
          title: 'Erkek Koleksiyonu',
          link: '/erkek'
        },
        // ... diğer varsayılan slider'lar
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="slider-loading">Yükleniyor...</div>;
  }

  return (
    <div className="home-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slider-item">
            <img src={slide.imageUrl} alt={slide.title} />
            <div className="slider-content">
              <h2>{slide.title}</h2>
              <Link to={slide.link} className="shop-now-btn">
                Hemen Alışverişe Başla
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider; 