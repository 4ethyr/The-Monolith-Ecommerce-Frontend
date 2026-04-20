"use client";

import { NAV_ITEMS } from "@/constants/NAV_ITEMS";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile/useIsMobile";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const isMobile = useIsMobile();

  const handleOpenCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCart((prev) => !prev);
  };

  return (
    <>
      {isMobile ? (
        <>
          <header className="bg-neutral flex items-center p-4 sticky">
            <nav className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <h2 className="text-primary text-2xl font-bold">
                  THE MONOLITH
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="text-tertiary hover:text-primary"
                  onClick={handleOpenCart}
                >
                 {openCart ? <X/> : <Menu />}
                </button>
              </div>


              {openCart && (
                 <div className="transition-all ease-in-out duration-200 flex items-center absolute top-32 right-0 w-full bg-neutral z-20 h-full">
                  {/* <div className="overlay"></div> */}
                 
                    <nav className="bg-neutral w-full p-4" >
                      <ul className="flex-col">
                        {NAV_ITEMS.map((item) => (
                          <li
                            key={item.id}
                            className="text-tertiary hover:text-primary text-lg pr-8 uppercase my-4"
                          >
                            <a href={item.href}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
              )}
            </nav>
          </header>
        </>
      ) : (
        <>
          <header className="bg-neutral flex items-center md:h-26 md:p-8 background-blur-xr sticky top-0 z-10">
            <nav className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <ul className="flex p-0 m-0">
                  {NAV_ITEMS.map((item) => (
                    <li
                      key={item.id}
                      className="text-tertiary hover:text-primary text-sm mr-8 uppercase"
                    >
                      <a href={item.href} className="tracking-widest">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center">
                <h2 className="text-primary text-2xl font-extrabold ">
                  THE MONOLITH
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <button
                    className="h-8 w-8 text-md text-primary hover:text-tertiary"
                    onClick={handleOpenCart}
                  >
                    <ShoppingBag />
                  </button>
                </div>

                <div className="flex items-center">
                  <button className="h-8 w-8 text-md text-primary hover:text-tertiary">
                    <User />
                  </button>
                </div>
              </div>
            </nav>
          </header>
        </>
      )}
    </>
  );
};
export default Header;
