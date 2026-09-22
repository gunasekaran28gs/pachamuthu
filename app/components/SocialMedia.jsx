import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.facebook.com/pachamuthu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:bg-white hover:text-black hover:border hover:scale-110"
      >
        <FaFacebookF className="text-base" />
      </a>

      <a
        href="https://www.instagram.com/pachamuthu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:bg-white hover:text-black hover:border hover:scale-110"
      >
        <FaInstagram className="text-base" />
      </a>
    </div>
  );
}