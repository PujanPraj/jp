import Sidebar from "@/app/_components/_adminComponents/Sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 py-6 container">
        <div className="flex justify-center">
          <Button>
            <Link href={"/"}>Go To Home</Link>
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
