import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export const Navbar = () => {
  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Product",
      path: "/product",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "About",
      path: "/about",
    },
  ];

  return (
    <header className="w-full">
      <div className="container mx-auto py-5 flex justify-between">
        <div className="font-serif">Miralou</div>
        <nav className="flex gap-4 items-center">
          {links.map((link) => (
            <Link to={link.path}>{link.label}</Link>
          ))}
        </nav>
        <div>
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
