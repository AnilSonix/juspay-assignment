import { Progress } from "@/components/ui/progress";

type Props = {
  title: string;
  value: string;
  progress: number;
};

export default function LocationProgressBar({ title, value, progress }: Props) {
  return (
    <div className="space-y-1 text-3">
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <p>{value}</p>
      </div>
      <Progress className="h-1" value={progress} />
    </div>
  );
}
