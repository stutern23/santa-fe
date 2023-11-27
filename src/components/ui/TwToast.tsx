import { toast, Toast } from "react-hot-toast";
export function TwToast({
  t,
  message,
  title,
}: {
  t: Toast;
  message: string;
  title?: string;
}) {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="ml-3 flex-1">
          {title && (
            <p className="text-sm font-medium text-gray-900">{title}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">{message}</p>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
