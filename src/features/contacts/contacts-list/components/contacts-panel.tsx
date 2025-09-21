import ErrorScreen from "@/shared/error-screen";
import LoadingSkeletonList from "@/shared/loading-skeleton-list";
import useContacts from "../hooks/use-contacts";
import ContactsList from "./contacts-list";

export default function ContactsPanel() {
  const query = useContacts();

  console.log(query.error);

  if (query.isLoading) {
    return <LoadingSkeletonList />;
  }
  if (query.isError) {
    return (
      <ErrorScreen title="Unable to get contacts" subtitle="Try again later" />
    );
  }

  return (
    <div className="space-y-4 space-x-2">
      <p className="text-[14px] font-semibold">Contacts</p>
      <ContactsList contacts={query.data} />
    </div>
  );
}
