import Image from "next/image";

export function YevOpsDatabaseSection() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">ER Diagram</h1>
        <p className="text-gray-600">
          The database schema is organized into five logical table groups,
          each designed to separate responsibilities and improve maintainability,
          scalability, and clarity of data relationships.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src="/projects/yevOps/yevOpsDB.png"
          alt="YevOps Database"
          width={900}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>

      {/* Core User & Identity Entities */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Core User & Identity Entities</h3>
        <p className="text-gray-600">
          This group defines the primary user roles and identity-related data within the system.
          These entities act as the foundation for authentication, authorization, and ownership of system resources.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Client</strong>
            <br />
            Represents customers who use the platform to search for tailoring shops, place orders,
            manage personal profiles, favorite shops, and store body measurements for tailoring.
          </li>

          <li>
            <strong>Shop</strong>
            <br />
            Represents tailoring shops that offer tailoring services, manage orders,
            define service packages, and interact with customers.
          </li>

          <li>
            <strong>User</strong>
            <br />
            A generic authentication entity used for system-level access control and credential management.
          </li>
        </ul>

        <p className="text-gray-600">
          These entities are responsible for user authentication, role separation, and ownership mapping
          across all functional domains.
        </p>
      </section>

      {/* Profile & Personal Information */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Profile & Personal Information</h3>
        <p className="text-gray-600">
          This group contains user-specific profile and personal information
          that supports customization and identity verification.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>ClientSize</strong>
            <br />
            Stores detailed body measurements of customers,
            enabling accurate and personalized tailoring services.
          </li>

          <li>
            <strong>BankAccount</strong>
            <br />
            Stores bank account and financial information for users,
            supporting payments, refunds, and financial transactions.
          </li>
        </ul>

        <p className="text-gray-600">
          These entities enhance personalization and enable secure financial operations.
        </p>
      </section>

    {/* Order & Transaction Management */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Order & Transaction Management</h3>
      <p className="text-gray-600">
        This group manages the complete lifecycle of tailoring orders,
        from customer requests to order completion.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>
          <strong>Order</strong>
          <br />
          Represents tailoring orders placed by customers,
          including order status, pricing, payment details, deadlines, and delivery states.
        </li>

        <li>
          <strong>OrderType</strong>
          <br />
          Defines tailoring service packages offered by shops,
          including pricing, details, and expected completion time.
        </li>

        <li>
          <strong>ShopReplyDescription</strong>
          <br />
          Stores shop responses to customer requests,
          such as confirmed price and delivery deadline.
        </li>

        <li>
          <strong>UserRequestDescription</strong>
          <br />
          Captures customer requirements for tailoring,
          including budget, deadline, clothing type, and reference images.
        </li>
      </ul>

      <p className="text-gray-600">
        These entities collectively support order negotiation, payment flow,
        and status tracking throughout the tailoring process.
      </p>
    </section>

    {/* Content & Interaction */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Content & Interaction</h3>
      <p className="text-gray-600">
        This group supports social interaction and communication
        between customers and tailoring shops.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>
          <strong>Post</strong>
          <br />
          Allows customers to publish tailoring requests publicly,
          enabling shops to browse and respond to customer needs.
        </li>

        <li>
          <strong>Review</strong>
          <br />
          Stores customer feedback and ratings for tailoring shops,
          supporting trust and service quality evaluation.
        </li>

        <li>
          <strong>Report</strong>
          <br />
          Enables customers to report shops for inappropriate behavior or service issues.
        </li>
      </ul>

      <p className="text-gray-600">
        These entities enhance transparency, trust, and engagement within the platform.
      </p>
    </section>

    {/* Verification & Compliance */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Verification & Compliance</h3>
      <p className="text-gray-600">
        This group handles identity verification and compliance requirements
        to ensure platform reliability and trustworthiness.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>
          <strong>VerifyRequest</strong>
          <br />
          Stores verification requests submitted by tailoring shops,
          including owner identity, business address, and product details.
        </li>

        <li>
          <strong>ShopDetail</strong>
          <br />
          Stores extended descriptive information about tailoring shops,
          including location and contact details.
        </li>
      </ul>

      <p className="text-gray-600">
        These entities support shop verification workflows and platform governance.
      </p>
    </section>

    </section>
  );
}
