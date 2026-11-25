import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import FooterSection5 from '../layout/footerdemo';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-bold text-white">☕ {siteConfig.name}</p>
          <p className="mt-3 text-sm text-stone-400">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-amber-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Opening hours</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.hours.map((h) => (
              <li key={h.days}>
                <span className="block text-stone-400">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Visit us</h3>
          <address className="mt-3 space-y-2 text-sm not-italic">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </address>
          <div className="mt-4 flex gap-4 text-sm">
            {siteConfig.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-amber-400">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-5 text-center text-xs text-stone-500">
        © {currentYear} {siteConfig.name}. All rights reserved.
      </div> */}
    <FooterSection5 />
    </footer>
  );
}
