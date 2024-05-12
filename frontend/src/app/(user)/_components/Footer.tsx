import Link from "next/link";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-slate-300 py-4">
      <div className="container flex justify-between flex-wrap">
        <div>
          <h3 className="font-bold text-xl">FOR JOBSEEKER</h3>
          <div className="flex flex-col">
            <Link href="/">Search jobs</Link>
            <Link href="/">Blogs</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl">FOR EMPLOYER</h3>
          <div className="flex flex-col">
            <Link href="/">Post a Job</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Recruitment Services</Link>
            <Link href="/">HR Insider</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl">ABOUT US</h3>
          <div className="flex flex-col">
            <Link href="/">About jobportal</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Instagram</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl">Contact Us</h3>
          <div className="flex flex-col">
            <Link href="/">+977 9876543210</Link>
            <Link href="/" className="flex items-center gap-x-2">
              <CiMail />
              jobportal@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
