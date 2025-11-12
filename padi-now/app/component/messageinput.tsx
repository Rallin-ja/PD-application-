// components/MessageInput.tsx
import { Send, Mic } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="bg-gray-400 p-3 flex items-center rounded-lg">
      <input
        type="text"
        placeholder="Message"
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-700 px-3"
      />
      <Mic className="text-gray-700 mx-2" />
      <button>
        <Send className="text-gray-800" />
      </button>
    </div>
  );
}
