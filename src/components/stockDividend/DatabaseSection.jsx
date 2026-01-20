import Image from "next/image";

export function DatabaseSection() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">ER Diagram</h1>
        <p className="text-gray-600">
          The database schema is organized into four logical table groups,
          each designed to separate responsibilities and improve maintainability,
          scalability, and clarity of data relationships.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src="/projects/stockDividend/stockDatabase.png"
          alt="Stock Database"
          width={900}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>

      {/* Core Entities */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Core Entities</h3>
        <p className="text-gray-600">
          This group contains the fundamental entities that serve as the backbone of the system.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Stock</strong>
            <br />
            Stores master data of listed stocks, including sector information and corporate tax attributes.
            This table acts as a central reference for all market data, transactions, and predictions.
          </li>
          <li>
            <strong>User</strong>
            <br />
            Represents system users and serves as the ownership anchor for portfolios,
            transactions, dividend income, and tax-related records.
          </li>
        </ul>

        <p className="text-gray-600">
          These entities provide stable reference data that is shared across all system domains.
        </p>
      </section>

      {/* Market Data */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Market Data</h3>
        <p className="text-gray-600">
          This group manages historical, event-based, and predictive stock market information.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>HistoricalPrice</strong>
            <br />
            Stores daily stock price data using a composite key of stock symbol and trading date,
            enabling efficient time-series analysis.
          </li>
          <li>
            <strong>Dividend</strong>
            <br />
            Records dividend announcements, including XD date, record date, and payment date,
            which are critical for dividend-based investment strategies.
          </li>
          <li>
            <strong>Prediction</strong>
            <br />
            Stores machine learning–generated forecasts related to dividend events and payment schedules,
            allowing the system to integrate predictive analytics with real market data.
          </li>
        </ul>

        <p className="text-gray-600">
          This separation allows market data and ML outputs to evolve independently from user activity data.
        </p>
      </section>

      {/* User Transactions */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">User Transactions</h3>
        <p className="text-gray-600">
          This group captures all user-level investment activities and their financial outcomes.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Transaction</strong>
            <br />
            Records individual buy and sell operations performed by users.
          </li>
          <li>
            <strong>Portfolio</strong>
            <br />
            Maintains the current holdings of each user per stock,
            acting as a derived snapshot based on transaction history.
          </li>
          <li>
            <strong>DividendReceived</strong>
            <br />
            Represents actual dividend income received by users,
            linking dividend events with user holdings on the record date.
          </li>
        </ul>

        <p className="text-gray-600">
          This design clearly distinguishes between transactional events
          and aggregated investment states.
        </p>
      </section>

      {/* Tax Management */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Tax Management</h3>
        <p className="text-gray-600">
          This group handles tax computation and optimization related to dividend income.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>UserTaxInfo</strong>
            <br />
            Stores personal income and deduction data for each user by tax year,
            enabling accurate tax calculations.
          </li>
          <li>
            <strong>TaxCredit</strong>
            <br />
            Represents dividend tax credits derived from received dividends,
            supporting tax-saving analysis and credit utilization tracking.
          </li>
        </ul>

        <p className="text-gray-600">
          By isolating tax-related data, the system ensures auditability
          and flexibility for future changes in tax regulations.
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold">Summary</h3>
        <p className="text-gray-600">
          Overall, the database design follows a domain-driven approach that
          cleanly separates core entities, market data, user activities,
          and tax management.
        </p>
        <p className="text-gray-600">
          This structure supports accurate financial analysis, scalable data processing,
          and seamless integration with backend services and machine learning components.
        </p>
      </section>
    </section>
  );
}
