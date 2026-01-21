import { FinancialLogic } from "@/components/stockDividend/FinancialLogic";
import { ProblemSolution } from "@/components/stockDividend/ProblemSolution";
import { YevOpsArchitectureSection } from "@/components/yevOps/YevOpsArchitectureSection";
import { YevOpsDatabaseSection } from "@/components/yevOps/YevOpsDatabaseSection";
import { YevOpsProblemSolution } from "@/components/yevOps/YevOpsProblemSolution";
import { YevOpsProjectDesign } from "@/components/yevOps/YevOpsProjectDesign";
import { YevOpsProjectHero } from "@/components/yevOps/YevOpsProjectHero";
import { YevOpsProjectLinks } from "@/components/yevOps/YevOpsProjectLinks";
import { YevOpsProjectOverview } from "@/components/yevOps/YevOpsProjectOverview";

export default function StockDividendPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">

      <YevOpsProjectHero />

      <YevOpsProjectOverview />

      <YevOpsProblemSolution />

      <YevOpsProjectDesign />

      <YevOpsArchitectureSection />

      <YevOpsDatabaseSection />

      <YevOpsProjectLinks />

    </div>
  );
}
