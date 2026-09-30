import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaCheck,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#f7941d] bg-[#002f60] text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Footer Main */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">

          {/* About */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/logo-v1.png" alt="College Logo" width={80} height={80} />

              <div>
                <div className="text-lg font-bold text-white">
                  PACHAMUTHU
                </div>

                <div className="text-[10px] uppercase tracking-widest text-amber-300">
                  Group of Institutions
                </div>
              </div>
            </div>

            <p className="max-w-sm leading-relaxed text-slate-400">
              Dedicated to nurturing future-ready healthcare professionals,
              scientists, educators, and leaders through state-of-the-art
              academic programs in Dharmapuri.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/pachamuthu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#001f40] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f7941d] hover:text-[#002f60]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/pachamuthu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#001f40] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f7941d] hover:text-[#002f60]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#001f40] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f7941d] hover:text-[#002f60]"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#001f40] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f7941d] hover:text-[#002f60]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Our Colleges */}
          <div>
            <h4 className="mb-4 border-b border-white/[0.08] pb-2 text-xs font-bold uppercase tracking-wider text-white">
              Our Colleges
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/#institutions"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  Arts &amp; Science
                </Link>
              </li>

              <li>
                <Link
                  href="/#institutions"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  College of Nursing
                </Link>
              </li>

              <li>
                <Link
                  href="/#institutions"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  College of Pharmacy
                </Link>
              </li>

              <li>
                <Link
                  href="/#institutions"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  Physiotherapy (BPT)
                </Link>
              </li>

              <li>
                <Link
                  href="/#institutions"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  Allied Health Sciences
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Info */}
          <div>
            <h4 className="mb-4 border-b border-white/[0.08] pb-2 text-xs font-bold uppercase tracking-wider text-white">
              Portals &amp; Info
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/#achievers"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  University Rank Holders
                </Link>
              </li>

              <li>
                <Link
                  href="/#placements"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  Placement Cell
                </Link>
              </li>

              <li>
                <Link
                  href="/#committees"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  Anti-Ragging Cell
                </Link>
              </li>

              <li>
                <Link
                  href="/#committees"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  Women Empowerment
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-[#f7941d]"
                >
                  Campus Transport Routes
                </Link>
              </li>
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h4 className="mb-4 border-b border-white/[0.08] pb-2 text-xs font-bold uppercase tracking-wider text-white">
              Affiliations
            </h4>

            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-2">
                <FaCheck className="mt-0.5 shrink-0 text-[#f7941d]" />
                <span>Approved by UGC</span>
              </div>

              <div className="flex items-start gap-2">
                <FaCheck className="mt-0.5 shrink-0 text-[#f7941d]" />
                <span>Indian Nursing Council (INC)</span>
              </div>

              <div className="flex items-start gap-2">
                <FaCheck className="mt-0.5 shrink-0 text-[#f7941d]" />
                <span>Pharmacy Council of India (PCI)</span>
              </div>

              <div className="flex items-start gap-2">
                <FaCheck className="mt-0.5 shrink-0 text-[#f7941d]" />
                <span>TN M.G.R. Medical University</span>
              </div>

              <div className="flex items-start gap-2">
                <FaCheck className="mt-0.5 shrink-0 text-[#f7941d]" />
                <span>Periyar University, Salem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-[11px] text-slate-500 sm:flex-row">
          <div>
            © 2026 Pachamuthu Group Institutions. All Rights Reserved.
          </div>

          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/mandatory-disclosures"
              className="transition-colors hover:text-slate-300"
            >
              Mandatory Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}