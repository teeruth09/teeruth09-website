import Image from "next/image";

export function ProjectOverview() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Project Overview</h2>

      <p className="text-gray-700 leading-relaxed">
        This project is a stock dividend investment advisory system designed to help
        investors maximize total returns while efficiently utilizing dividend tax credits.
        The system integrates market data analysis, machine learning–based dividend prediction,
        and personalized tax computation into a unified platform.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Users can analyze dividend-paying stocks, simulate investment outcomes,
        track portfolio performance, and evaluate tax-saving opportunities
        through a web-based interface.
      </p>

      {/* Screenshot */}
      <div className="flex justify-center">
        <ProjectOverviewImages/>
        {/* <Image
          src="/projects/stockDividend/overview.png"
          alt="Stock Dividend Web Application Overview"
          width={900}
          height={500}
          className="rounded-xl shadow-md border"
        /> */}
      </div>
    </section>
  );
}

function ProjectOverviewImages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Image src="/projects/stockDividend/overview/stockHomePage.png" alt="HomePage" width={600} height={400}  />
      <Image src="/projects/stockDividend/overview/stockAnalysis.png" alt="Stock Analysis" width={600} height={400}  />
    </div>
  );
}
