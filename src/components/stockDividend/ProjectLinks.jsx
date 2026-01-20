'use client'
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export function ProjectLinks() {
  return (
    <div className="flex gap-6 mt-4">
      {/* GitHub */}
      <a
        href="https://github.com/teeruth09/StockDividendInvestment-Frontend"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-black transition"
      >
        <GitHubIcon fontSize="small" />
        <span>Frontend</span>
      </a>
      <a
        href="https://github.com/teeruth09/StockDividendInvestment-Backend"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-black transition"
      >
        <GitHubIcon fontSize="small" />
        <span>Backend</span>
      </a>

      {/* Live Demo */}
      {/* <a
        href="https://your-demo-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-black transition"
      >
        <OpenInNewIcon fontSize="small" />
        <span>Live Demo</span>
      </a> */}
    </div>
  );
}
