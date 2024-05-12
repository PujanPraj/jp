import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-slate-300 py-4">
      <div className="container flex justify-between">
        <a href="/" className="text-2xl">
          JOB PORTAL
        </a>

        <Link href={"/admin/dashboard"}>
          <Button>Dashbaord</Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
