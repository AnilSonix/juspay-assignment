import ActivitiesPanel from "@/features/activities/activities-list/components/activities-panel";
import ContactsPanel from "@/features/contacts/contacts-list/components/contacts-panel";
import NotificationsPanel from "@/features/notifications/notifications-list/components/notifications-panel";

export default function AppAsideBarContent() {
  return (
    <div className="p-5 space-y-6 overflow-y-auto">
      <NotificationsPanel />
      <ActivitiesPanel />
      <ContactsPanel />
    </div>
  );
}
