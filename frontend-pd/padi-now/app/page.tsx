// app/page.tsx
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";
import MessageInput from "@/components/MessageInput";

export default function Page() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-300 justify-end p-6">
        <ChatArea />
        <MessageInput />
      </div>
    </div>
  );
}
