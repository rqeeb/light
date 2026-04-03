import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function ContactList() {
  const {
    getAllContacts,
    allContacts,
    setSelectedUser,
    isUsersLoading,
    selectedUser,
  } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <>
      {allContacts.map((contact) => {
        const isSelected = selectedUser?._id === contact._id;
        const isOnline = onlineUsers?.includes(contact._id);

        return (
          <div
            key={contact._id}
            className={`p-4 rounded-xl cursor-pointer transition-all border ${
              isSelected
                ? "bg-[#d65a38]/12 border-[#d65a38]/40"
                : "bg-[#f3eadf]/80 border-[#b8aa98]/50 hover:bg-[#efe3d4]"
            }`}
            onClick={() => setSelectedUser(contact)}
          >
            <div className="flex items-center gap-3">
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="size-12 rounded-full border border-[#b8aa98]/60">
                  <img
                    src={contact.profilePic || "/avatar.png"}
                    alt={contact.fullName}
                  />
                </div>
              </div>

              <div className="min-w-0">
                <h4 className="text-[#2f2926] font-medium truncate">
                  {contact.fullName}
                </h4>
                <p className="text-[#7a6d62] text-xs">
                  {isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ContactList;
