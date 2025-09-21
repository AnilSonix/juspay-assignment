import { Dot } from "lucide-react";
import { type PropsWithChildren } from "react";

type Props = {};

export default function ListLink({ children }: PropsWithChildren<Props>) {
  return (
    <div className="flex items-center">
      <Dot className="text-gray-400" />
      <p className="text-[14px] font-[400] hover:underline">{children}</p>
    </div>
  );
}
