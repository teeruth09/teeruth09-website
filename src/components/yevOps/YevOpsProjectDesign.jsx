import Image from "next/image";
import { FunctionalRequirements } from "./requirement/YevOpsFunctionalRequirement";
import { NonFunctionalRequirements } from "./requirement/YevOpsNonFunctionalRequirement";
import UserStories from "./userStories/YevOpsUserStory";

export function YevOpsProjectDesign() {
  return (
    <section>
        <h2 className="text-2xl font-semibold mb-3">
            YevOps Project Design
        </h2>

        <div className="mb-5">
          <FunctionalRequirements />
        </div>

        <div className="mb-5">
          <NonFunctionalRequirements /> 
        </div>

        <UserStories />

    </section>
  );
}



function ProjectRequirements() {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold mb-3">
        Project Requirements
      </h3>

      <p className="text-gray-700 mb-3">
        The system combines Ex-Dividend (XD) timing with technical indicators
        to identify high-probability entry and exit points.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>RSI (14)</strong> is used to detect oversold and overbought
          conditions around the XD period.
        </li>
        <li>
          <strong>MACD</strong> is applied to confirm trend strength and momentum
          before entering a position.
        </li>
        <li>
          Pre-XD oversold signals indicate potential rebound opportunities,
          while post-XD overbought signals warn of sell-on-fact behavior.
        </li>
      </ul>
      <div className="flex justify-center mt-6">
        <Image
          src="/projects/stockDividend/signalGeneration.png"
          alt="Example signalGeneration"
          width={900}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>

    </div>
  );
}

// function UserStories() {
//   return (
//     <section className="space-y-4">
//       <h3 className="text-xl font-semibold">
//         User Stories
//       </h3>

//       <div className="bg-gray-50 p-6 rounded-xl space-y-4">
//         <h4 className="font-semibold text-lg">User Story: Login</h4>

//         <p className="text-gray-700">
//           <strong>As a</strong> customer or tailoring shop owner <br />
//           <strong>I want</strong> to log in to the system <br />
//           <strong>So that</strong> I can access personalized features and manage my orders.
//         </p>

//         <div>
//           <h5 className="font-semibold mb-2">Acceptance Criteria</h5>

//           <ul className="list-disc pl-6 text-gray-700 space-y-2">
//             <li>
//               <strong>Scenario:</strong> Login with non-existing username <br />
//               <strong>Given:</strong> The user submits login credentials <br />
//               <strong>When:</strong> The username does not exist in the system <br />
//               <strong>Then:</strong> An error message is displayed indicating that the username is not found.
//             </li>

//             <li>
//               <strong>Scenario:</strong> Login with incorrect password <br />
//               <strong>Given:</strong> The username exists <br />
//               <strong>When:</strong> The password does not match <br />
//               <strong>Then:</strong> An error message is displayed indicating an incorrect password.
//             </li>

//             <li>
//               <strong>Scenario:</strong> Successful login <br />
//               <strong>Given:</strong> Valid username and password <br />
//               <strong>When:</strong> The credentials are verified <br />
//               <strong>Then:</strong> The user is logged in, redirected to the home page,
//               and access/refresh tokens are stored securely in the browser.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }


function TotalScoreRanking() {
  return (
    <div className="mt-3">
      <h3 className="text-xl font-semibold mb-3">
        Total Score & Stock Ranking
      </h3>

      <p className="text-gray-700 mb-3">
        To support objective decision-making, the system computes a
        Total Score that balances return and risk factors.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          Dividend Yield adjusted by dividend trap risk.
        </li>
        <li>
          Expected post-XD price recovery measured by TEMA.
        </li>
        <li>
          Technical momentum confirmation from RSI and MACD.
        </li>
      </ul>

      <p className="mt-3 text-gray-700">
        Stocks are ranked by Total Score to help investors prioritize
        high-quality dividend opportunities within SET50.
      </p>

      <div className="flex justify-center mt-6">
        <Image
          src="/projects/stockDividend/totalScoreResult.png"
          alt="TotalScore Result"
          width={600}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>
    </div>
  );
}
