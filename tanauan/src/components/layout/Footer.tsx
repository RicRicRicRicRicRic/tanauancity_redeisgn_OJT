import tanauanSeal from '../../assets/sections/footer/tanauan_seal.png'
import depoLogo from '../../assets/sections/footer/depo-xZWdLTcz.webp'
import bagongPilipinasLogo from '../../assets/sections/footer/Bagong-Pilipinas-Logo-Cpl11dF7.svg'
import safetySeal from '../../assets/sections/footer/safety_seal-DFSDBvoY.webp'

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const getInTouch = [
  { label: 'Talisay - Tanauan Rd, Tanauan, 4232 Batangas', href: '#' },
  { label: '(043) 728-9800', href: '#' },
  { label: 'info@tanauancity.gov.ph', href: 'mailto:info@tanauancity.gov.ph' },
]

const governmentLinks = [
  { label: 'Office of the President', href: 'https://www.op.gov.ph/' },
  { label: 'Office of the Vice President', href: 'https://www.ovp.gov.ph/' },
  { label: 'Senate of the Philippines', href: 'https://www.senate.gov.ph/' },
  { label: 'House of Representatives', href: 'https://www.congress.gov.ph/' },
  { label: 'Supreme Court', href: 'https://sc.judiciary.gov.ph/' },
  { label: 'Court of Appeals', href: 'https://ca.judiciary.gov.ph/' },
]

const quickLinksLeft = [
  { label: 'Home', href: '#' },
  { label: 'Barangays', href: '#barangays' },
  { label: 'E-Services', href: '#e-services' },
  { label: 'City Officials', href: '#officials' },
  { label: 'News', href: '#news' },
]

const quickLinksRight = [
  { label: 'Mission & Vision', href: '#mission-vision' },
  { label: 'PWD Services', href: '#pwd-services' },
  { label: 'Senior Citizen', href: '#senior-citizen' },
  { label: 'Documents', href: '#documents' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-r from-[#151826] to-[#7a1d1d] text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:px-8">
        {/* Title */}
        <h2 className="text-white text-2xl md:text-3xl font-normal tracking-wide mb-2">
          CITY OF TANAUAN <span className="font-normal text-lg">REPUBLIC OF THE PHILIPPINES</span>
        </h2>
        <div className="border-t border-slate-500 mb-8" />

        {/* Three columns + Seal */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Link Columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Get In Touch */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-2">
                {getInTouch.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-white hover:underline transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Government Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Government Links</h3>
              <ul className="space-y-2">
                {governmentLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 hover:text-white hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links - 2 columns */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {quickLinksLeft.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-300 hover:text-white hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {quickLinksRight.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                      className="text-sm text-slate-300 hover:text-white hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* City Seal */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <img
              src={tanauanSeal}
              alt="Official Seal of Tanauan City"
              className="w-40 h-40 md:w-48 md:h-48 object-contain opacity-90 brightness-0 invert"
            />
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-slate-500 mt-10 mb-4" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-6">
          {/* Top row: Social icons (left) and logos (right) */}
          <div className="flex items-center justify-between w-full">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-slate-300 transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-white hover:text-slate-300 transition-colors"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white hover:text-slate-300 transition-colors"
              >
                <YoutubeIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-slate-300 transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-4">
              <img
                src={depoLogo}
                alt="DEPO Logo"
                className="h-20 w-auto object-contain "
              />
              <img
                src={bagongPilipinasLogo}
                alt="Bagong Pilipinas Logo"
                className="h-20 w-auto object-contain "
              />
                            <img
                src={safetySeal}
                alt="Bagong Pilipinas Logo"
                className="h-16 w-auto object-contain "
              />
            </div>
          </div>

          {/* Copyright - centered below */}
          <p className="text-xs text-slate-400 text-center">
            Built by the City Government of Tanauan
            <br />
            © {currentYear} TanauanCity.gov.ph
          </p>
        </div>
      </div>
    </footer>
  )
}