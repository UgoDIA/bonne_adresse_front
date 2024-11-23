import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 flex items-center">
        <div className="flex items-center">
          <Link href="/">
            {/* Logo SVG */}
            <Image
              src="/src/logo/logo-la-bonne-adresse.svg"
              alt="La Bonne Adresse"
              width={250}
              height={250}
              className="mr-3"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
