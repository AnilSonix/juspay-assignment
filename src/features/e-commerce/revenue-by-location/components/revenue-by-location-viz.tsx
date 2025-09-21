import AppCard from "@/components/app-card";
import LocationProgressBar from "./location-progressbar";

export default function RevenueByLocationViz() {
  return (
    <AppCard className="w-full h-full">
      <div className="flex items-center">
        <p className="text-[14px] font-semibold">Revenue by location</p>
      </div>

      <img src="/world.svg" alt="world map" className="w-full h-auto" />

      <div className="space-y-4">
        <LocationProgressBar title="New York" value="72K" progress={33} />
        <LocationProgressBar title="New York" value="72K" progress={33} />
        <LocationProgressBar title="New York" value="72K" progress={33} />
        <LocationProgressBar title="New York" value="72K" progress={33} />
      </div>
    </AppCard>
  );
}
