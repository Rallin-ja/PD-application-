// components/Sidebar.tsx
import { User, FileText, Notebook, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-200 flex flex-col items-start p-4 space-y-6">
      <div className="flex items-center space-x-3 mt-2">
        <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
          <User />
        </div>
        <span className="font-medium text-gray-800">User Name</span>
      </div>

      <nav className="flex flex-col space-y-4 mt-8 w-full">
        <button className="flex items-center space-x-3 text-gray-700 hover:text-black">
          <FileText /> <span>Question Paper</span>
        </button>

        <button className="flex items-center space-x-3 text-gray-700 hover:text-black">
          <Notebook /> <span>Notes</span>
        </button>

        <button className="flex items-center space-x-3 text-gray-700 hover:text-black">
          <BarChart2 /> <span>Analysis</span>
        </button>

        <button className="flex items-center space-x-3 text-gray-700 hover:text-black">
          <Settings /> <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}
