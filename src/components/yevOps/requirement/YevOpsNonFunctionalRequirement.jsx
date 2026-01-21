export function NonFunctionalRequirements() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">
        Non-Functional Requirements (MoSCoW)
      </h3>

      <UsabilityNFR />
      <PerformanceNFR />
      <ReliabilityNFR />
      <AdvancedNFR />
    </section>
  );
}

function UsabilityNFR() {
  return (
    <div>
      <h4 className="font-semibold text-blue-700 mb-2">
        Usability
      </h4>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>
          The system should support responsive web design to ensure usability
          across desktop, tablet, and mobile devices.
        </li>
      </ul>
    </div>
  );
}

function PerformanceNFR() {
  return (
    <div>
      <h4 className="font-semibold text-green-700 mb-2">
        Performance
      </h4>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>
          Shop search operations should complete within 1 minute under normal
          system load.
        </li>
        <li>
          Data updates submitted by users should be reflected in the system
          within 5 minutes.
        </li>
      </ul>
    </div>
  );
}

function ReliabilityNFR() {
  return (
    <div>
      <h4 className="font-semibold text-purple-700 mb-2">
        Reliability
      </h4>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>
          The system should ensure data consistency during update and retrieval
          operations.
        </li>
      </ul>
    </div>
  );
}

function AdvancedNFR() {
  return (
    <div>
      <h4 className="font-semibold text-yellow-700 mb-2">
        Advanced Capabilities
      </h4>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>
          The system could provide AI-based outfit design recommendations based
          on user preferences.
        </li>
        <li>
          The system could support installment payment options for customers.
        </li>
      </ul>
    </div>
  );
}
