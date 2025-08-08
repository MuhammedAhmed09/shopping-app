import { RingLoader } from "react-spinners";

export default function LoaderPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RingLoader color="#3b82f6" size={80} />
    </div>
  );
}
