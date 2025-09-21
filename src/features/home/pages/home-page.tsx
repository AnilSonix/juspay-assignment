import ProjectionsVsActualsViz from "@/features/e-commerce/projections-vs-actuals/components/projections-vs-actuals-viz";
import QuickStats from "@/features/e-commerce/quick-stats/components/quick-stats";
import RevenueByLocationViz from "@/features/e-commerce/revenue-by-location/components/revenue-by-location-viz";
import RevenueViz from "@/features/e-commerce/revenue/components/revenue-viz";
import TopSellingProductsViz from "@/features/e-commerce/top-selling-products/components/top-selling-products-viz";
import TopSalesViz from "@/features/e-commerce/total-sales/components/total-sales-viz";

export default function HomePage() {
  return (
    <div className="space-y-7">
      <p className="text-[14px] font-semibold">eCommerce</p>
      <div className="space-y-7">
        <div className="flex flex-col lg:flex-row gap-7 h-fit">
          <div className="flex-1">
            <QuickStats />
          </div>
          <div className="flex-1">
            <ProjectionsVsActualsViz />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex-1">
            <RevenueViz />
          </div>
          <div className="min-w-1/3">
            <RevenueByLocationViz />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex-1">
            <TopSellingProductsViz />
          </div>
          <div className="min-w-1/3">
            <TopSalesViz />
          </div>
        </div>
      </div>
    </div>
  );
}
