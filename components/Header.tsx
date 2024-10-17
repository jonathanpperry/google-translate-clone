import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();

  return (
    <header className="flex items-center justify-between px-8 border-b mb-5">
      <div className="flex items-center justify-center h-20 overflow-hidden">
        {/* Link */}
        <Link href="/">
          <Image
            src="https://links.papareact.com/xgu"
            alt="logo"
            width={200}
            height={100}
          />
        </Link>
      </div>

      {userId ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <SignInButton forceRedirectUrl="/translate" mode="modal" />
      )}
    </header>
  );
};

export default Header;
