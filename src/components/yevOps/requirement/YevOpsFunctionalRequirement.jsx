export function FunctionalRequirements() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">
        Functional Requirements (MoSCoW)
      </h3>

      <ClientRequirements />
      <ShopRequirements />
      <AdminRequirements/>
    </section>
  );
}

function ClientRequirements() {
  return (
    <section className="space-y-4">
      <h4 className="text-lg font-semibold">
        Customer (Client)
      </h4>

      <RequirementGroup
        title="Must Have"
        color="text-green-700"
        items={[
          "User registration",
          "Login / Logout",
          "Search and view tailoring shops",
          "Place tailoring orders",
          "Payment system",
          "Profile view and edit",
          "Order acceptance or rejection",
          "Forgot password recovery",
        ]}
      />

      <RequirementGroup
        title="Should Have"
        color="text-blue-700"
        items={[
          "Verified tailoring shop filtering",
          "Order status tracking",
          "Coupon and discount system",
          "Search shops by location",
        ]}
      />

      <RequirementGroup
        title="Could Have"
        color="text-yellow-700"
        items={[
          "Real-time chat with tailoring shops",
          "View other users’ public profiles",
        ]}
      />

      <RequirementGroup
        title="Won’t Have"
        color="text-red-700"
        items={[
          "Username modification after registration",
        ]}
      />
    </section>
  );
}

function ShopRequirements() {
  return (
    <section className="space-y-4">
      <h4 className="text-lg font-semibold">
        Tailoring Shop (Online Shop)
      </h4>

      <RequirementGroup
        title="Must Have"
        color="text-green-700"
        items={[
          "Register and open an online tailoring shop",
          "Login / Logout",
          "View order details",
          "Accept or reject customer orders",
          "Tailoring shop identity verification",
          "View and edit shop profile",
          "Bank account management",
          "Forgot password recovery",
        ]}
      />

      <RequirementGroup
        title="Should Have"
        color="text-blue-700"
        items={[
          "Refund system when shop cancels advertisement plans",
        ]}
      />

      <RequirementGroup
        title="Could Have"
        color="text-yellow-700"
        items={[
          "Advertisement system for shop promotion",
        ]}
      />

      <RequirementGroup
        title="Won’t Have"
        color="text-red-700"
        items={[
          "Username modification after registration",
        ]}
      />
    </section>
  );
}

function AdminRequirements() {
  return (
    <section className="space-y-4">
      <h4 className="text-lg font-semibold">
        Admin
      </h4>

      <RequirementGroup
        title="Must Have"
        color="text-green-700"
        items={[
          "Login / Logout",
          "Accept or reject tailoring shop",
          "View customer report",
        ]}
        />

      <RequirementGroup
        title="Should Have"
        color="text-blue-700"
        items={[
            "Forgot password recovery",
            "Delete user account",
        ]}
      />

    </section>
  );
}

function RequirementGroup({ title, color, items }) {
  return (
    <div>
      <h5 className={`font-semibold mb-2 ${color}`}>{title}</h5>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
