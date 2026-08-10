import React, { useState } from 'react';

import iluhan_ng_tubo from "../../assets/sections/CulturalHeritagePics/IluhanNgTubo.png";
import museo_ni_mabini from "../../assets/sections/CulturalHeritagePics/MuseoNiMabini.png";
import napayong_island from "../../assets/sections/CulturalHeritagePics/NapayongIsland.png";
import old_muni_hall from "../../assets/sections/CulturalHeritagePics/OldMuniHall.png";
import St_evangelist_parish from "../../assets/sections/CulturalHeritagePics/StEvangelistParish.jpg";

interface Landmark {
  id: string;
  title: string;
  category: string;
  barangay: string;
  sectorNum: number;
  coordinates: { x: number; y: number };
  year: string;
  image: string;
  teaser: string;
  description: string;
  archivalNote: string;
}

const landmarks: Landmark[] = [
  {
    id: 'napayong-island',
    title: 'Napayong Island',
    category: 'Natural Wonder',
    barangay: 'Maria Paz',
    sectorNum: 48,
    coordinates: { x: 26, y: 88 },
    year: 'Pre-Colonial',
    image: napayong_island,
    teaser: 'A volcanic islet in Taal Lake off the southwestern coast of Tanauan.',
    description: 'Napayong Island is a unique volcanic island-rock located within Taal Lake. Formed through ancient volcanic activity, this islet served as a fishing outpost and refuge for generations.',
    archivalNote: 'Geological formation created by Taal Volcano’s ancient caldera-forming eruptions.'
  },
  {
    id: 'st-john-parish',
    title: 'St. John the Evangelist Parish',
    category: 'Religious Sanctuary',
    barangay: 'Poblacion Sector 1',
    sectorNum: 28,
    coordinates: { x: 88, y: 56 },
    year: 'Est. 1881',
    image: St_evangelist_parish,
    teaser: 'The spiritual heart of Tanauan showcasing classical Spanish-era architecture.',
    description: 'At the heart of Tanauan’s spiritual life is the St. John the Evangelist Parish Church, featuring classical Spanish-era architecture and historical parish archives.',
    archivalNote: 'Houses historic parish registries and original Spanish-era bronze sanctuary bells.'
  },
  {
    id: 'old-muni-hall',
    title: 'Old Municipal Hall & Museum',
    category: 'Civic Heritage',
    barangay: 'Poblacion Sector 4',
    sectorNum: 34,
    coordinates: { x: 88, y: 61 },
    year: 'Circa 1920s',
    image: old_muni_hall,
    teaser: "Tanauan's central civic anchor and historical archive repository.",
    description: "From the century-old Historic Town Plaza in Poblacion featuring colonial pathways to the Apolinario Mabini Shrine in Talaga, Tanauan preserves a deeply rooted heritage.",
    archivalNote: 'Preserves original American-colonial architectural foundations and municipal archives.'
  },
  {
    id: 'museo-mabini',
    title: 'Museo Ni Apolinario Mabini',
    category: 'National Monument',
    barangay: 'Talaga',
    sectorNum: 20,
    coordinates: { x: 42, y: 51 },
    year: 'Est. 1956',
    image: museo_ni_mabini,
    teaser: 'Dedicated shrine honoring the "Brain of the Revolution" in Brgy. Talaga.',
    description: 'Explore curated collections of historical documents and personal artifacts at the Mabini Shrine. Interactive exhibition halls showcase the revolutionary era.',
    archivalNote: 'Located on the birth site of Apolinario Mabini with replica structures of his ancestral home.'
  },
  {
    id: 'iluhan-ng-tubo',
    title: 'Iluhan Ng Tubo',
    category: 'Agricultural Heritage',
    barangay: 'Balele',
    sectorNum: 40,
    coordinates: { x: 45, y: 72 },
    year: '19th Century',
    image: iluhan_ng_tubo,
    teaser: 'Traditional carabao-driven sugarcane mill symbolizing early agrarian pride.',
    description: 'The "Iluhan ng Tubo" (traditional sugarcane press) represents the foundation of Tanauan\'s early agricultural economy. Farmers utilized carabao-driven mills to extract juice for raw sugar.',
    archivalNote: 'Symbolic artifact representing Tanauan’s pre-industrial sugarcane trade.'
  }
];

export function CulturalHeritageSection() {
  const [activeLandmark, setActiveLandmark] = useState<Landmark>(landmarks[2]);

  return (
    <section className="map-heritage-root">
      <header className="heritage-header">
        <span className="heritage-kicker">Cradle of Noble Heroes</span>
        <h1 className="heritage-title">Getting to Know Tanauan City, Batangas</h1>
        <p className="heritage-subtitle">
          Hover or tap on the landmark pins across the 48 barangays of Tanauan City to view archival context.
        </p>
      </header>

      <div className="map-stage">
        {/* LEFT COLUMN: Map Canvas */}
        <div className="map-card-poster">
          <div className="map-vector-wrapper">
            <svg viewBox="0 0 500 650" className="tanauan-svg-map">
              <path
                d="M 60 60 
                   L 145 35 L 205 40 L 290 45 L 370 70 L 320 110 L 370 115
                   L 325 150 L 365 180 L 360 210 L 420 215 L 400 240 L 425 320
                   L 405 380 L 485 385 L 480 435 L 500 480 L 490 540 L 460 545
                   L 460 580 L 410 610 L 290 625 L 235 580 L 245 530 L 140 525
                   L 80 620 L 155 425 L 115 400 L 135 345 L 45 320 L 80 270
                   L 95 190 L 85 140 L 60 60 Z"
                className="tanauan-map-border"
              />

              <path
                d="M 60 60 L 155 125 L 290 45 M 155 125 L 105 170 M 155 125 L 210 200
                   M 370 70 L 255 150 M 255 150 L 365 180 M 210 200 L 270 300
                   M 270 300 L 425 320 M 270 300 L 135 345 M 135 345 L 260 420
                   M 260 420 L 405 380 M 260 420 L 180 500 M 180 500 L 280 570
                   M 280 570 L 410 610 M 180 500 L 140 525"
                className="barangay-sector-lines"
              />

              <text x="110" y="110" className="map-sector-num">5</text>
              <text x="180" y="80" className="map-sector-num">2</text>
              <text x="240" y="85" className="map-sector-num">4</text>
              <text x="285" y="65" className="map-sector-num">1</text>
              <text x="330" y="100" className="map-sector-num">3</text>
              <text x="145" y="170" className="map-sector-num">8</text>
              <text x="195" y="270" className="map-sector-num">16</text>
              <text x="210" y="335" className="map-sector-num">20</text>
              <text x="120" y="295" className="map-sector-num">19</text>
              <text x="95" y="340" className="map-sector-num">21</text>
              <text x="145" y="370" className="map-sector-num">27</text>
              <text x="175" y="415" className="map-sector-num">35</text>
              <text x="225" y="475" className="map-sector-num">40</text>
              <text x="170" y="515" className="map-sector-num">42</text>
              <text x="185" y="575" className="map-sector-num">47</text>
              <text x="115" y="580" className="map-sector-num font-bold">48</text>
              <text x="440" y="350" className="map-sector-num">17</text>
              <text x="440" y="380" className="map-sector-num">28</text>
              <text x="440" y="400" className="map-sector-num">34</text>
              <text x="350" y="600" className="map-sector-num">45</text>
            </svg>

            {landmarks.map((item) => {
              const isActive = activeLandmark.id === item.id;
              return (
                <button
                  key={item.id}
                  className={`map-pin-btn ${isActive ? 'active' : ''}`}
                  style={{ left: `${item.coordinates.x}%`, top: `${item.coordinates.y}%` }}
                  onClick={() => setActiveLandmark(item)}
                  onMouseEnter={() => setActiveLandmark(item)}
                  aria-label={item.title}
                >
                  <span className="pin-pulse" />
                  <div className="pin-icon-badge">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="pin-tooltip">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Landmark Detail Panel */}
        <div className="landmark-inspector">
          <div className="inspector-card">
            <div className="card-media-wrapper">
              <img src={activeLandmark.image} alt={activeLandmark.title} className="card-media" />
              <span className="card-year-badge">{activeLandmark.year}</span>
            </div>

            <div className="card-body">
              <div className="card-header">
                <span className="card-category">{activeLandmark.category}</span>
                <span className="card-barangay">📍 Brgy. {activeLandmark.barangay} (Sector {activeLandmark.sectorNum})</span>
              </div>

              <h2 className="card-title">{activeLandmark.title}</h2>
              <p className="card-teaser">{activeLandmark.teaser}</p>
              <p className="card-description">{activeLandmark.description}</p>

              <div className="archival-box">
                <span className="archival-title">ARCHIVAL RECORD</span>
                <p className="archival-text">{activeLandmark.archivalNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* WHITE & LIGHT-RED THEME ROOT */
        .map-heritage-root {
          background-color: #fcf8f8;
          color: #1e293b;
          padding: 48px 24px 64px;
          min-height: 100vh;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .heritage-header {
          max-width: 800px;
          margin: 0 auto 32px;
          text-align: center;
          padding: 0 16px;
        }

        .heritage-kicker {
          color: #dc2626;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .heritage-title {
          font-size: clamp(1.75rem, 3.2vw, 2.5rem);
          font-weight: 900;
          color: #881337;
          margin: 0 0 10px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .heritage-subtitle {
          color: #64748b;
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .map-stage {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 1024px) {
          .map-stage {
            grid-template-columns: 1.2fr 1fr;
            align-items: start;
          }
        }

        .map-card-poster {
          background: #ffffff;
          border: 1px solid #fecdd3;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(225, 29, 72, 0.06);
          position: relative;
        }

        .map-vector-wrapper {
          position: relative;
          width: 100%;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tanauan-svg-map {
          width: 100%;
          height: 100%;
          max-height: 580px;
        }

        .tanauan-map-border {
          fill: #fff1f2;
          stroke: #e11d48;
          stroke-width: 2.5;
          stroke-linejoin: round;
        }

        .barangay-sector-lines {
          fill: none;
          stroke: rgba(225, 29, 72, 0.25);
          stroke-width: 1.2;
          stroke-dasharray: 3 2;
        }

        .map-sector-num {
          fill: #9f1239;
          font-size: 12px;
          font-weight: 600;
          text-anchor: middle;
          pointer-events: none;
          opacity: 0.7;
        }

        .map-sector-num.font-bold {
          fill: #be123c;
          font-weight: 800;
          opacity: 1;
        }

        .map-pin-btn {
          position: absolute;
          transform: translate(-50%, -50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pin-icon-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #be123c;
          border: 2px solid #ffffff;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(190, 18, 60, 0.35);
          transition: transform 0.3s, background 0.3s;
        }

        .pin-pulse {
          position: absolute;
          left: 6px; top: 6px;
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1.5px solid #e11d48;
          animation: map-ping 2s infinite;
          pointer-events: none;
        }

        @keyframes map-ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.8); opacity: 0; }
        }

        .pin-tooltip {
          font-size: 11px;
          font-weight: 700;
          color: #881337;
          background: #ffffff;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #fecdd3;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        }

        .map-pin-btn:hover .pin-icon-badge,
        .map-pin-btn.active .pin-icon-badge {
          transform: scale(1.3);
          background: #e11d48;
        }

        .landmark-inspector {
          position: sticky;
          top: 24px;
        }

        .inspector-card {
          background: #ffffff;
          border: 1px solid #fecdd3;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(225, 29, 72, 0.06);
        }

        .card-media-wrapper {
          position: relative;
          width: 100%;
          height: 230px;
        }

        .card-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-year-badge {
          position: absolute;
          bottom: 12px; left: 12px;
          background: #e11d48;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .card-body {
          padding: 24px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-category {
          color: #be123c;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .card-barangay {
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #881337;
          margin: 0 0 10px;
        }

        .card-teaser {
          font-size: 14px;
          color: #334155;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .card-description {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .archival-box {
          background: #fff1f2;
          border-left: 3px solid #e11d48;
          padding: 12px 16px;
          border-radius: 0 8px 8px 0;
        }

        .archival-title {
          font-size: 10px;
          font-weight: 800;
          color: #be123c;
          display: block;
          margin-bottom: 4px;
        }

        .archival-text {
          font-size: 12px;
          color: #475569;
          margin: 0;
          font-style: italic;
        }
      `}} />
    </section>
  );
}

export default CulturalHeritageSection;