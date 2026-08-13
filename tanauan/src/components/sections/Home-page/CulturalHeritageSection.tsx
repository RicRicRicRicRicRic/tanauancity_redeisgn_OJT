import { useState } from 'react';

import iluhan_ng_tubo from "../../../assets/sections/Home/CulturalHeritagePics/IluhanNgTubo.png";
import museo_ni_mabini from "../../../assets/sections/Home/CulturalHeritagePics/MuseoNiMabini.png";
import napayong_island from "../../../assets/sections/Home/CulturalHeritagePics/NapayongIsland.png";
import old_muni_hall from "../../../assets/sections/Home/CulturalHeritagePics/OldMuniHall.png";
import St_evangelist_parish from "../../../assets/sections/Home/CulturalHeritagePics/StEvangelistParish.jpg";

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
    sectorNum: 21,
    coordinates: { x: 26, y: 92 },
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
    coordinates: { x: 90, y: 58 },
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
    coordinates: { x: 92, y: 62 },
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
    coordinates: { x: 38, y: 51 },
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
          Hover or tap on the landmark pins across the barangays of Tanauan City to view archival context.
        </p>
      </header>

      <div className="map-stage">
        {/* LEFT COLUMN: Map Canvas */}
        <div className="map-card-poster">
          <div className="map-vector-wrapper">
            <svg
              viewBox="0 0 608 810"
              xmlns="http://www.w3.org/2000/svg"
              className="tanauan-svg-map"
              role="img"
              aria-label="Tanauan City, Batangas barangay map"
            >
              <g className="barangay-sectors">
                <path d="M 249 60 L 258 77 L 258 86 L 273 101 L 296 109 L 317 80 L 348 44 L 350 40 L 311 37 L 252 35 L 250 41 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="1" />
                <path d="M 75 39 L 85 57 L 89 61 L 112 71 L 139 124 L 147 125 L 184 92 L 181 80 L 183 32 L 89 32 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="2" />
                <path d="M 447 90 L 413 63 L 383 61 L 356 42 L 322 81 L 300 111 L 323 124 L 339 146 L 343 149 L 353 146 L 365 128 L 378 125 L 389 107 L 407 102 L 419 105 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="3" />
                <path d="M 188 32 L 185 78 L 189 92 L 188 140 L 211 124 L 213 124 L 230 147 L 256 187 L 259 189 L 288 160 L 291 159 L 298 163 L 320 128 L 297 114 L 286 111 L 270 104 L 254 88 L 254 79 L 245 61 L 247 35 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="4" />
                <path d="M 42 54 L 74 106 L 81 132 L 100 180 L 105 179 L 184 142 L 185 98 L 181 100 L 150 128 L 137 128 L 133 123 L 109 74 L 86 64 L 81 59 L 70 41 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="5" />
                <path d="M 438 101 L 420 111 L 411 108 L 405 108 L 391 112 L 386 122 L 380 129 L 368 132 L 356 150 L 344 154 L 340 154 L 323 133 L 302 166 L 302 172 L 309 204 L 312 204 L 372 173 L 441 144 L 441 138 L 438 129 L 441 124 L 443 116 L 438 108 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="6" />
                <path d="M 212 129 L 188 146 L 194 182 L 237 209 L 255 192 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="7" />
                <path d="M 184 148 L 181 148 L 102 185 L 115 250 L 126 245 L 122 235 L 124 230 L 190 183 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="8" />
                <path d="M 445 148 L 380 175 L 310 210 L 312 218 L 320 224 L 321 237 L 327 263 L 339 257 L 350 271 L 376 247 L 374 239 L 397 218 L 436 212 L 437 209 L 446 202 L 446 197 L 437 189 L 436 184 L 437 175 L 444 167 L 446 158 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="9" />
                <path d="M 297 168 L 290 164 L 209 244 L 219 242 L 275 223 L 305 208 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="10" />
                <path d="M 194 188 L 190 189 L 166 206 L 191 250 L 200 247 L 233 214 L 233 212 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="11" />
                <path d="M 161 209 L 127 233 L 127 236 L 130 244 L 194 309 L 194 299 L 192 293 L 188 254 L 166 215 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="12" />
                <path d="M 306 212 L 275 228 L 253 235 L 255 248 L 263 257 L 263 261 L 257 268 L 259 274 L 267 275 L 270 278 L 290 315 L 306 336 L 304 343 L 298 354 L 299 355 L 339 344 L 338 334 L 316 235 L 316 227 L 308 220 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="13" />
                <path d="M 491 263 L 480 262 L 473 257 L 466 242 L 456 234 L 446 231 L 438 221 L 436 216 L 412 219 L 397 223 L 379 240 L 381 249 L 351 276 L 349 276 L 344 271 L 338 262 L 329 269 L 333 295 L 335 299 L 335 304 L 344 343 L 444 317 L 489 267 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="14" />
                <path d="M 115 255 L 116 283 L 111 330 L 194 314 L 132 251 L 127 249 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="15" />
                <path d="M 248 237 L 203 251 L 193 266 L 208 378 L 293 356 L 301 338 L 301 335 L 286 317 L 266 280 L 258 279 L 253 271 L 253 266 L 258 260 L 258 258 L 250 248 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="16" />
                <path d="M 497 264 L 448 319 L 450 372 L 451 375 L 463 372 L 479 402 L 485 399 L 490 399 L 500 413 L 537 437 L 543 422 L 553 405 L 542 397 L 537 385 L 529 377 L 522 377 L 517 375 L 502 354 L 499 360 L 499 364 L 496 368 L 490 366 L 494 354 L 489 353 L 488 367 L 483 367 L 481 365 L 482 359 L 481 356 L 478 354 L 478 351 L 482 347 L 494 346 L 493 331 L 498 319 L 508 311 L 510 303 L 516 292 L 514 282 L 510 278 L 507 270 L 501 265 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="17" />
                <path d="M 444 396 L 446 384 L 446 356 L 443 322 L 314 355 L 299 360 L 304 366 L 318 365 L 320 367 L 324 378 L 324 382 L 318 394 L 405 395 L 437 397 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="18" />
                <path d="M 195 319 L 112 335 L 105 343 L 96 363 L 90 371 L 146 421 L 148 421 L 177 386 L 203 379 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="19" />
                <path d="M 316 370 L 303 370 L 294 361 L 290 361 L 241 375 L 180 390 L 164 410 L 191 438 L 191 442 L 186 447 L 185 451 L 200 467 L 203 467 L 255 430 L 310 396 L 320 380 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="20" />
                <path d="M 84 373 L 73 382 L 70 400 L 57 410 L 55 415 L 58 419 L 71 426 L 76 431 L 77 453 L 79 455 L 82 454 L 85 447 L 89 443 L 97 442 L 109 454 L 113 470 L 117 477 L 139 440 L 145 427 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="21" />
                <path d="M 317 398 L 317 400 L 348 448 L 368 483 L 372 484 L 397 473 L 428 465 L 436 461 L 443 404 L 441 401 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="22" />
                <path d="M 452 379 L 450 381 L 442 452 L 482 467 L 488 468 L 493 471 L 519 479 L 520 464 L 531 449 L 534 441 L 497 416 L 487 403 L 477 407 L 466 388 L 462 378 L 458 377 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="23" />
                <path d="M 572 423 L 570 427 L 567 448 L 570 444 L 576 444 L 578 446 L 580 444 L 588 444 L 585 439 L 584 431 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="24" />
                <path d="M 597 453 L 590 447 L 590 460 L 586 464 L 568 464 L 567 458 L 570 453 L 568 453 L 566 450 L 564 472 L 594 463 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="25" />
                <path d="M 311 400 L 281 419 L 280 423 L 283 431 L 285 446 L 290 464 L 290 470 L 314 506 L 318 507 L 342 496 L 362 489 L 365 486 L 314 402 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="26" />
                <path d="M 161 414 L 150 427 L 120 481 L 127 494 L 139 506 L 140 513 L 151 505 L 153 505 L 163 496 L 197 471 L 180 451 L 180 448 L 187 440 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="27" />
                <path d="M 557 408 L 551 416 L 543 435 L 535 449 L 537 455 L 535 456 L 533 454 L 524 467 L 523 480 L 537 483 L 539 485 L 538 487 L 523 485 L 523 501 L 526 514 L 540 541 L 551 538 L 551 526 L 548 490 L 539 487 L 540 485 L 547 485 L 546 465 L 539 461 L 536 457 L 539 456 L 540 458 L 549 462 L 549 470 L 551 476 L 558 474 L 560 472 L 561 454 L 557 457 L 553 454 L 550 457 L 539 456 L 540 451 L 543 449 L 544 446 L 539 445 L 539 442 L 542 439 L 548 439 L 551 442 L 551 445 L 555 439 L 559 439 L 562 449 L 567 419 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="28" />
                <path d="M 276 423 L 237 448 L 214 465 L 235 491 L 240 539 L 310 509 L 310 507 L 286 472 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="29" />
                <path d="M 441 457 L 438 479 L 448 485 L 446 494 L 446 505 L 450 514 L 476 505 L 519 498 L 519 484 L 480 471 L 447 458 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="30" />
                <path d="M 596 467 L 573 474 L 578 502 L 607 497 L 604 490 L 603 477 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="31" />
                <path d="M 568 475 L 551 480 L 552 494 L 554 492 L 554 490 L 552 489 L 553 484 L 560 483 L 562 485 L 564 483 L 570 483 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="32" />
                <path d="M 435 468 L 398 478 L 384 485 L 381 485 L 335 504 L 334 507 L 346 529 L 342 559 L 387 537 L 444 516 L 445 514 L 441 503 L 443 487 L 434 482 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="33" />
                <path d="M 572 494 L 571 493 L 571 500 L 553 499 L 553 507 L 572 504 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="34" />
                <path d="M 210 469 L 208 469 L 191 481 L 152 512 L 149 513 L 138 523 L 138 525 L 149 536 L 151 547 L 163 552 L 167 556 L 171 564 L 174 577 L 210 552 L 235 542 L 230 493 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="35" />
                <path d="M 607 502 L 555 511 L 553 514 L 556 538 L 607 533 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="36" />
                <path d="M 534 541 L 522 515 L 519 503 L 479 509 L 423 529 L 427 538 L 429 540 L 438 539 L 453 559 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="37" />
                <path d="M 536 546 L 471 560 L 471 563 L 481 588 L 487 599 L 505 594 L 511 594 L 547 586 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="38" />
                <path d="M 607 537 L 572 541 L 559 541 L 541 544 L 542 552 L 553 589 L 560 625 L 581 610 L 591 607 L 607 590 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="39" />
                <path d="M 330 507 L 319 510 L 214 556 L 235 659 L 238 667 L 251 655 L 269 634 L 336 563 L 341 537 L 341 529 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="40" />
                <path d="M 466 562 L 450 564 L 437 545 L 427 545 L 423 541 L 419 532 L 417 531 L 371 550 L 343 564 L 343 566 L 377 603 L 374 623 L 480 600 L 481 598 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="41" />
                <path d="M 210 559 L 174 583 L 171 609 L 164 640 L 153 657 L 228 642 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="42" />
                <path d="M 338 568 L 285 624 L 298 634 L 318 654 L 326 658 L 344 671 L 347 675 L 351 689 L 369 626 L 372 604 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="43" />
                <path d="M 548 591 L 541 591 L 451 611 L 453 622 L 464 625 L 472 668 L 482 665 L 556 628 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="44" />
                <path d="M 460 629 L 449 625 L 446 613 L 440 613 L 436 615 L 431 615 L 373 628 L 358 679 L 354 699 L 378 699 L 388 692 L 413 689 L 431 691 L 467 672 L 468 668 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="45" />
                <path d="M 281 627 L 243 670 L 258 674 L 268 713 L 287 743 L 291 743 L 303 735 L 307 734 L 310 731 L 312 724 L 316 718 L 320 716 L 328 718 L 337 718 L 350 701 L 350 698 L 346 689 L 343 676 L 332 667 L 315 657 L 295 637 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="46" />
                <path d="M 228 647 L 150 662 L 158 679 L 169 696 L 168 717 L 176 735 L 178 753 L 195 773 L 202 772 L 227 763 L 264 757 L 274 747 L 281 743 L 264 716 L 255 679 L 250 676 L 238 674 L 234 670 L 231 664 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" data-barangay="47" />
              </g>

              <g className="map-labels">
                <text x="291.6" y="69.6" className="map-sector-num">1</text>
                <text x="140.1" y="71.8" className="map-sector-num">2</text>
                <text x="366.0" y="98.2" className="map-sector-num">3</text>
                <text x="240.5" y="112.3" className="map-sector-num">4</text>
                <text x="111.3" y="121.0" className="map-sector-num">5</text>
                <text x="371.2" y="156.4" className="map-sector-num">6</text>
                <text x="218.6" y="176.1" className="map-sector-num">7</text>
                <text x="144.0" y="196.5" className="map-sector-num">8</text>
                <text x="378.2" y="212.9" className="map-sector-num">9</text>
                <text x="269.0" y="210.2" className="map-sector-num">10</text>
                <text x="197.5" y="221.6" className="map-sector-num">11</text>
                <text x="164.4" y="258.0" className="map-sector-num">12</text>
                <text x="299.8" y="284.3" className="map-sector-num">13</text>
                <text x="405.1" y="285.3" className="map-sector-num">14</text>
                <text x="141.7" y="299.9" className="map-sector-num">15</text>
                <text x="239.4" y="317.1" className="map-sector-num">16</text>
                <text x="493.4" y="359.0" className="map-sector-num">17</text>
                <text x="387.3" y="370.5" className="map-sector-num">18</text>
                <text x="150.0" y="369.4" className="map-sector-num">19</text>
                <text x="238.0" y="411.6" className="map-sector-num">20</text>
                <text x="100.8" y="426.7" className="map-sector-num">21</text>
                <text x="386.8" y="438.3" className="map-sector-num">22</text>
                <text x="482.2" y="439.4" className="map-sector-num">23</text>
                <text x="576.3" y="441.1" className="map-sector-num">24</text>
                <text x="579.4" y="466.0" className="map-sector-num">25</text>
                <text x="318.1" y="461.5" className="map-sector-num">26</text>
                <text x="157.1" y="469.5" className="map-sector-num">27</text>
                <text x="544.8" y="479.5" className="map-sector-num">28</text>
                <text x="261.2" y="488.4" className="map-sector-num">29</text>
                <text x="472.7" y="491.2" className="map-sector-num">30</text>
                <text x="589.9" y="490.1" className="map-sector-num">31</text>
                <text x="560.2" y="486.5" className="map-sector-num">32</text>
                <text x="389.9" y="515.0" className="map-sector-num">33</text>
                <text x="562.4" y="507.3" className="map-sector-num">34</text>
                <text x="191.9" y="527.2" className="map-sector-num">35</text>
                <text x="580.6" y="525.7" className="map-sector-num">36</text>
                <text x="482.0" y="536.0" className="map-sector-num">37</text>
                <text x="510.0" y="577.0" className="map-sector-num">38</text>
                <text x="576.0" y="579.2" className="map-sector-num">39</text>
                <text x="274.5" y="581.3" className="map-sector-num">40</text>
                <text x="411.8" y="583.3" className="map-sector-num">41</text>
                <text x="194.5" y="618.1" className="map-sector-num">42</text>
                <text x="335.3" y="627.4" className="map-sector-num">43</text>
                <text x="504.6" y="629.7" className="map-sector-num">44</text>
                <text x="411.4" y="662.3" className="map-sector-num">45</text>
                <text x="297.1" y="690.5" className="map-sector-num">46</text>
                <text x="214.1" y="715.4" className="map-sector-num">47</text>
              </g>
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
                <span className="card-barangay">📍 Brgy. {activeLandmark.barangay} {activeLandmark.sectorNum ? `(Sector ${activeLandmark.sectorNum})` : ''}</span>
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
          align-items: start;
        }

        @media (min-width: 1024px) {
          .map-stage {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }

        .map-card-poster {
          background: transparent;
          border: none;
          border-radius: 16px;
          padding: 24px;
          box-shadow: none;
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
          max-height: 700px;
        }

        .map-sector-num {
          fill: #881337;
          font-size: 12px;
          font-weight: 700;
          text-anchor: middle;
          pointer-events: none;
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
          background: #ffffff;
          border: 2px solid #881337;
          color: #881337;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(136, 19, 55, 0.25);
          transition: transform 0.3s, background 0.3s, color 0.3s;
        }

        .pin-pulse {
          position: absolute;
          left: 6px; top: 6px;
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1.5px solid #881337;
          animation: map-ping 2s infinite;
          pointer-events: none;
        }

        @keyframes map-ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.8); opacity: 0; }
        }

        .pin-tooltip {
          display: none;
          position: absolute;
          top: -32px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 11px;
          font-weight: 700;
          color: #881337;
          background: #ffffff;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #fecdd3;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
          z-index: 20;
          pointer-events: none;
        }

        .map-pin-btn:hover .pin-tooltip,
        .map-pin-btn.active .pin-tooltip {
          display: block;
        }

        .pin-icon-badge {
          background: #ffffff !important;
          color: #881337 !important;
        }

        .map-pin-btn.active .pin-icon-badge {
          transform: scale(1.3);
          background: #881337 !important;
          color: #ffffff !important;
        }

        .map-pin-btn:hover .pin-icon-badge {
          transform: scale(1.3);
        }

        .landmark-inspector {
          position: sticky;
          top: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          max-height: calc(100vh - 48px);
          overflow-y: auto;
        }

        .inspector-card {
          background: #ffffff;
          border: 1px solid #fecdd3;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(225, 29, 72, 0.06);
          width: 100%;
        }

        .card-media-wrapper {
          position: relative;
          width: 100%;
          height: 230px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-media {
          width: 100%;
          height: 100%;
          object-fit: contain;
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
          z-index: 2;
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