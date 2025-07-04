import React, { useRef } from 'react';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import { CDN2_URL } from '../utils/constant';
import "../css/ItemCorousel.css";

const ItemCorousel = () => {
    const { isLoading, jsonData } = useFetchRestaurants();
    const items = jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="menu-carousel">
            {isLoading ? (
                <div className="carousel-loader">
                    <div className="loader-dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            ) : (
                items.length > 0 ? (<div className="carousel-container">
                    <h2 className="carousel-title">What's on Your Mind?</h2>
                    <div className="carousel-wrapper">
                        <button 
                            className="carousel-button left" 
                            onClick={() => scroll('left')}
                            aria-label="Scroll left"
                        >
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                            </svg>
                        </button>
                        
                        <div className="carousel-items" ref={carouselRef}>
                            {items.map((item) => (
                                <div className="carousel-item" key={item.id}>
                                    <div className="item-image-container">
                                        <img 
                                            src={CDN2_URL + item.imageId} 
                                            alt={item.accessibility?.altText || 'Menu item'} 
                                            className="item-image" 
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            className="carousel-button right" 
                            onClick={() => scroll('right')}
                            aria-label="Scroll right"
                        >
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            </svg>
                        </button>
                    </div>
                </div>) : (
                    <div className="no-items">
                    </div>
                )
            )}
        </section>
    );
};

export default ItemCorousel;