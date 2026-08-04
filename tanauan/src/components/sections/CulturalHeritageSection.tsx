import React, { useEffect } from 'react';

import iluhan_ng_tubo from "../../assets/sections/CulturalHeritagePics/IluhanNgTubo.png";
import museo_ni_mabini from "../../assets/sections/CulturalHeritagePics/MuseoNiMabini.png";
import napayong_island from "../../assets/sections/CulturalHeritagePics/NapayongIsland.png";
import old_muni_hall from "../../assets/sections/CulturalHeritagePics/OldMuniHall.png";
import St_evangelist_parish from "../../assets/sections/CulturalHeritagePics/StEvangelistParish.jpg";

interface Category {
  slug: string;
  title: string;
  intro: string;
  heroImage: string;
  fullDescription: string;
}

const categories: Category[] = [
  {
    slug: 'historical-landmarks',
    title: 'Old Municipal Hall and Tanauan Museum',
    intro:
      "Tanauan's rich historical timeline lives through its monuments and public squares. Explore century-old landmarks preserved to honor the town's founding legacy and revolutionary heroes.",
    heroImage: old_muni_hall,
    fullDescription:
      'From the century-old Historic Town Plaza in Poblacion featuring colonial pathways to the Apolinario Mabini Shrine in Talaga honoring the "Brain of the Revolution", Tanauan preserves a deeply rooted heritage. The city’s heritage zone features preserved ancestral homes showcasing traditional Filipino-Spanish architecture alongside commemorative statues and markers honoring key historical events across the city.',
  },
  {
    slug: 'religious-sanctuaries',
    title: 'St.Evangelist Parish Church',
    intro:
      "Spiritual sanctuaries dating back centuries represent the deep-rooted faith, architecture, and endurance of the local community.",
    heroImage: St_evangelist_parish,
    fullDescription:
      'At the heart of Tanauan’s spiritual life is the San Juan de Dios Church (Est. 1881), featuring classical Spanish-era architecture and historical parish archives filled with centuries-old bells and sacred art. Across local barangays, preserved chapels host traditional patron saint fiestas, while heritage procession routes through Poblacion remain central to Holy Week observances.',
  },
  {
    slug: 'museums-and-arts',
    title: 'Museo Ni Apolinario Mabini',
    intro:
      "Dedicated cultural spaces hosting historical archives, artistic works, and interactive exhibits for visitors and future generations.",
    heroImage: museo_ni_mabini,
    fullDescription:
      'Explore curated collections of historical documents and photographs at the City Historical Archives, alongside exhibition halls showcasing contemporary works by local Tanauaneño artists. Interactive multimedia displays detail the city’s rich timeline, complemented by community-led educational workshops focused on preserving local history, native crafts, and oral traditions.',
  },
  {
    slug: 'natural-wonders',
    title: 'Napayong Island',
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    heroImage: napayong_island,
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    slug: 'heritage-crafts',
    title: 'Iluhan Ng Tubo',
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    heroImage: iluhan_ng_tubo,
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
  },
];

export function CulturalHeritageSection() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal');

    items.forEach((el) => el.classList.add('is-visible'));

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
      );

      items.forEach((el) => {
        el.classList.remove('is-visible');
        io.observe(el);
      });

      return () => io.disconnect();
    }
  }, []);

  return (
    <main
      className="heritage-page"
      style={{
        '--bg-color': '#fdf2f2',
        '--accent-color': '#901c1c',
        '--accent-light': '#c0392b',
        '--text-dark': '#1c1917',
        '--text-dim': '#5a5a5a',
        '--border-color': 'rgba(144, 28, 28, 0.15)',
      } as React.CSSProperties}
    >
      {/* Hero Header */}
      <section className="hero reveal">
        <h2 className="hero-title">
          Preserving and honoring Tanauan’s rich historical landmarks, sanctuaries, and cultural treasures
        </h2>
      </section>

      {/* Heritage Categories */}
      {categories.map((cat, i) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`panel reveal ${i % 2 === 1 ? 'panel-reverse' : ''}`}
        >
          <a href={`#${cat.slug}`} className="panel-media panel-media-link">
            <img src={cat.heroImage} alt={cat.title} loading="lazy" />
            <span className="panel-media-cta">Explore {cat.title} →</span>
          </a>

          <div className="panel-body">
            <h2 className="panel-title">{cat.title}</h2>
            <p className="panel-intro">{cat.intro}</p>

            <div className="single-info-card">
              <p className="info-text">{cat.fullDescription}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Encapsulated React Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .heritage-page {
          background: var(--bg-color);
          color: var(--text-dark);
          width: 100%;
          min-height: 100vh;
          font-family: inherit;
          padding-bottom: 64px;
        }

        .hero {
          max-width: 950px;
          margin: 0 auto;
          padding: 56px 24px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(1.75rem, 3.2vw, 2.6rem);
          line-height: 1.25;
          font-weight: 800;
          max-width: 850px;
          letter-spacing: -0.015em;
          margin: 0;

          /* Gradient text using the theme colors */
          background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 50%, var(--accent-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .panel {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 24px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          border-top: 1px solid var(--border-color);
        }

        @media (min-width: 900px) {
          .panel {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 64px;
          }

          .panel-reverse .panel-media {
            order: 2;
          }

          .panel-reverse .panel-body {
            order: 1;
          }

          .panel-media {
            height: 380px;
          }
        }

        .panel-media {
          width: 100%;
          height: 280px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          display: block;
          border: 1px solid var(--border-color);
          background: #ffffff;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        /* Float upward effect on hover */
        .panel-media:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px -6px rgba(144, 28, 28, 0.15);
        }

        .panel-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .panel-media-cta {
          position: absolute;
          bottom: 16px;
          right: 16px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(144, 28, 28, 0.9);
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.3s ease;
        }

        .panel-media:hover .panel-media-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .panel-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .panel-title {
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .panel-intro {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-dim);
          max-width: 52ch;
          margin-bottom: 24px;
        }

        .single-info-card {
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }

        .info-text {
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--text-dark);
        }

        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </main>
  );
}

export default CulturalHeritageSection;