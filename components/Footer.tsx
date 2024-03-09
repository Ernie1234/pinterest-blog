import { FaRegCopyright } from "react-icons/fa";
import { Logo } from ".";

function Footer() {
  return (
    <div className="bg-slate-900 text-white flex justify-between py-16 lg:px-28 md:px-12 px-8">
      <div className="flex flex-row justify-between md:flex-col ">
        <Logo />
        <p className="flex gap-1">
          <FaRegCopyright />
          2024 Ernie
        </p>
      </div>
      <div className="flex gap-6 md:gap-12 lg:gap-20">
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-xl">About</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/about" target="_blank" rel="noreferrer">
                What is Pinterest?
              </a>
            </li>
            <li>
              <a href="/about#profile" target="_blank" rel="noreferrer">
                Our Pinterest profile
              </a>
            </li>
            <li>
              <a href="/contact" target="_blank" rel="noreferrer">
                Contact
              </a>
            </li>
            <li>
              <a href="/about#career" target="_blank" rel="noreferrer">
                Careers
              </a>
            </li>
            <li>
              <a href="/about#brand" target="_blank" rel="noreferrer">
                Brand guidelines
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-xl">Resources</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/about#Help Centre" target="_blank" rel="noreferrer">
                Help Centre
              </a>
            </li>
            <li>
              <a href="/about#media" target="_blank" rel="noreferrer">
                Media gallery
              </a>
            </li>
            <li>
              <a href="/contact" target="_blank" rel="noreferrer">
                Subscribe via RSS
              </a>
            </li>
            <li>
              <a href="/about#career" target="_blank" rel="noreferrer">
                For businesses
              </a>
            </li>
            <li>
              <a href="/create" target="_blank" rel="noreferrer">
                For creators
              </a>
            </li>
            <li>
              <a href="/about#developer" target="_blank" rel="noreferrer">
                For developers
              </a>
            </li>
            <li>
              <a href="/about#investor" target="_blank" rel="noreferrer">
                For investors
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-xl">Policies</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/about#Help Centre" target="_blank" rel="noreferrer">
                Copyright and Trademark
              </a>
            </li>
            <li>
              <a href="/about#media" target="_blank" rel="noreferrer">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/about#media" target="_blank" rel="noreferrer">
                Privacy and Cookies
              </a>
            </li>
            <li>
              <a href="/about#media" target="_blank" rel="noreferrer">
                Personalised ads
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
