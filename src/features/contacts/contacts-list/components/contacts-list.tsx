import EmptyScreen from "@/shared/empty-screen";
import { Newspaper } from "lucide-react";
import type { Contact } from "../utils/get-contacts";
import ContactItem from "./contact-item";

type Props = {
  contacts?: Contact[];
};

export default function ContactList({ contacts }: Props) {
  if (contacts?.length == 0) {
    return (
      <EmptyScreen
        title="No new contacts"
        subtitle="Check later"
        Icon={Newspaper}
      />
    );
  }
  return (
    <div className="space-y-4 space-x-2">
      {contacts?.map((a) => (
        <ContactItem key={a.id} contact={a} />
      ))}
    </div>
  );
}
