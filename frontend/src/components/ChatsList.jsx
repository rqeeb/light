import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const {
    getMyChatPartners,
    chats,
    isUsersLoading,
    setSelectedUser,
    selectedUser,
  } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <>
      {chats.map((chat) => {
        const isSelected = selectedUser?._id === chat._id;
        const isOnline = onlineUsers?.includes(chat._id);

        return (
          <div
            key={chat._id}
            className={`p-4 rounded-xl cursor-pointer transition-all border ${
              isSelected
                ? "bg-[#d65a38]/12 border-[#d65a38]/40"
                : "bg-[#f3eadf]/80 border-[#b8aa98]/50 hover:bg-[#efe3d4]"
            }`}
            onClick={() => setSelectedUser(chat)}
          >
            <div className="flex items-center gap-3">
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="size-12 rounded-full border border-[#b8aa98]/60">
                  <img
                    src={chat.profilePic || "/avatar.png"}
                    alt={chat.fullName}
                  />
                </div>
              </div>

              <div className="min-w-0">
                <h4 className="text-[#2f2926] font-medium truncate">
                  {chat.fullName}
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

export default ChatsList;
