import { useState } from 'react';

const Dropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-custom-blue-1 ring-1 shadow-xs ring-custom-blue-1 ring-inset hover:bg-gray-50 cursor-pointer"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Category
          <svg
            className="-mr-1 size-5 mt-0.5 text-gray-400"
            viewBox="0 0 20 20"
            fill="text-custom-blue-1"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute w-full right-0 z-10 mt-4 sm:w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-2" role="none">
          <a
            href="#"
            className="block px-5 py-2.5  text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Pakaian
          </a>
          <a
            href="#"
            className="block px-5 py-2.5  text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            Makanan
          </a>
          <a
            href="#"
            className="block px-5 py-2.5  text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            Aksesoris
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="block w-full px-5 py-2.5 text-left  text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Sepatu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
