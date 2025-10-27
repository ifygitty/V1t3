import { Link, useLocation } from "react-router";

const Breadcrumb = ({ className = "" }) => {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, "");
  const segments = pathname.split("/").filter(Boolean);

  // Custom breadcrumb items for product page
  const getBreadcrumbItems = () => {
    if (segments[0] === "product" && segments[1]) {
      return [
        { label: "Home", href: "/" },
        { label: "Women", href: "/women" },
        { label: "Women's Shirts & Tops", href: "/women/shirts-tops" },
        { label: "Long Sleeve Overshirt, Khaki, 6", href: null }, // Current page
      ];
    }

    // Default breadcrumb for other pages
    return [
      { label: "Home", href: "/" },
      ...segments.map((seg, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/");
        const label = seg.charAt(0).toUpperCase() + seg.slice(1);
        return { label, href };
      }),
    ];
  };

  const items = getBreadcrumbItems();
  const lastIndex = items.length - 1;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="inline-flex font-template-primary items-center gap-x-1 text-base font-normal text-[#6C7275]">
        {items.map((item, idx) => (
          <li key={item.href || idx} className="inline-flex items-center">
            {idx !== 0 && (
              <span className="mx-2 text-base text-[#6C7275]">&gt;</span>
            )}
            {idx === lastIndex ? (
              <span className="text-[#292929] text-base font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-[#000000] text-base font-medium transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
