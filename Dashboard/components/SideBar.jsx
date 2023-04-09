import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import {FaCarSide, FaClipboardList} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className=" fixed w-56 h-full bg-white shadow-sm w-1/4">
      <div className="flex justify-center mt-6 mb-14">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Navitrack</p>
      </div>
      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/controlers">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/controlers"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>List of controlers</p>
            </div>
          </div>
        </Link>
        <Link href="/vehicles">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/vehicles"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <FaCarSide className="h-5 w-5" />
            </div>
            <div>
              <p>List of vehicles</p>
            </div>
          </div>
        </Link>
        <Link href="/drivers">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/drivers"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <BsFillPersonLinesFill className="h-5 w-5" />
            </div>
            <div>
              <p>List of drivers</p>
            </div>
          </div>
        </Link>
        <Link href="/missions">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/missions"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <FaClipboardList className="h-5 w-5" />
            </div>
            <div>
              <p>List of missions</p>
            </div>
          </div>
        </Link>
        <Link href="/login">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/login"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Log out</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
