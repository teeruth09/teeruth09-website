function UserStoryCard({ title, asA, iWant, soThat, scenarios }) {
  return (
    <div className="bg-gray-50 pl-6 rounded-xl space-y-4">
      <h4 className="font-semibold text-lg">{title}</h4>

      <p className="text-gray-700">
        <strong>As a</strong> {asA} <br />
        <strong>I want</strong> {iWant} <br />
        <strong>So that</strong> {soThat}
      </p>

      <div>
        <h5 className="font-semibold mb-2">Acceptance Criteria</h5>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {scenarios.map((s, index) => (
            <li key={index}>
              <strong>Scenario:</strong> {s.scenario} <br />
              <strong>Given:</strong> {s.given} <br />
              <strong>When:</strong> {s.when} <br />
              <strong>Then:</strong> {s.then}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function UserStories() {
  return (
    <section className="space-y-8">
      <h3 className="text-xl font-semibold">User Stories</h3>

      {/* Authentication Feature */}
      <UserStoryCard
        title="User Story: Login"
        asA="customer or tailoring shop owner"
        iWant="to log in to the system"
        soThat="I can access personalized features and manage my orders"
        scenarios={[
          {
            scenario: "Login with non-existing username",
            given: "The user submits login credentials",
            when: "The username does not exist in the system",
            then: "An error message is displayed indicating that the username is not found",
          },
          {
            scenario: "Login with incorrect password",
            given: "The username exists",
            when: "The password does not match",
            then: "An error message is displayed indicating an incorrect password",
          },
          {
            scenario: "Successful login",
            given: "Valid username and password",
            when: "The credentials are verified",
            then: "The user is logged in and redirected to the home page",
          },
        ]}
      />

      {/* Order Management Feature */}
      <UserStoryCard
        title="User Story: Manage Tailoring Order"
        asA="customer and tailoring shop owner"
        iWant="to manage tailoring orders"
        soThat="both parties can track and control order status"
        scenarios={[
          {
            scenario: "Customer places a tailoring order",
            given: "Customer fills in tailoring details",
            when: "Customer submits the order",
            then: "System sends order request to tailoring shop and sets status to Pending",
          },
          {
            scenario: "Shop accepts the order",
            given: "A pending order exists",
            when: "Shop accepts the order",
            then: "System updates order status to Payment and notifies customer",
          },
          {
            scenario: "Customer completes payment",
            given: "Order status is Payment",
            when: "Customer pays successfully",
            then: "System updates order status to In Progress",
          },
        ]}
      />
    </section>
  );
}
