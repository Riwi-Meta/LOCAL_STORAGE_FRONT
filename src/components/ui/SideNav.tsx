import { Link } from "react-router-dom";
import { LINKS_ROUTES_GENERAL, LINKS_ROUTES_PERSONAL } from "../../utils";

export const SideNav = () => {
  return (
    <aside className="w-[220px] border-1.5 flex flex-col items-center justify-center gap-4 bg-gray-100 h-screen py-4">
      <figure className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300 py-2 px-4">
        <img src="/brand/logo.svg" alt="logo" className="w-7 h-7" />
        <h2 className="text-xl font-bold">LocalStorage</h2>
      </figure>

      <div className="flex flex-col flex-1 gap-4">
        {LINKS_ROUTES_GENERAL.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300 py-2 px-4"
          >
            <i className={`${link.icon} text-xl`} role="img" aria-hidden="true" />
            <span className="text-xl">{link.title}</span>
          </Link>
        ))}
      </div>

      <div>
        {LINKS_ROUTES_PERSONAL.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300 py-2 px-4"
          >
            <i className={`${link.icon} text-xl`} role="img" aria-hidden="true" />
            <span className="text-xl">{link.title}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
