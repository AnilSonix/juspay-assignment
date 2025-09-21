import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Contact } from "../utils/get-contacts";

type Props = {
  contact: Contact;
} & React.ComponentProps<"div">;

export default function ContactItem({ contact, ...props }: Props) {
  console.log({ contact });

  return (
    <div className="flex gap-2 items-center" {...props}>
      <Avatar className="w-6 h-6">
        <AvatarImage src={contact.avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-[14px]">{contact.fullName}</p>
      </div>
    </div>
  );
}
