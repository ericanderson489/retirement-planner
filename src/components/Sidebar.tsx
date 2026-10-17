
import "./Sidebar.css";

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const pages = [
    "Dashboard",
    "Calculator",
    "Projections",
    "Expenses",
    "Portfolio",
    "Settings"
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">RetireWise</h2>

      <nav className="sidebar-nav">
        {pages.map((page) => (
          <button
            key={page}
            className={
              activePage === page
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
