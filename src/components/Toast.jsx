import { useEffect } from "react";

export const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500/90" : "bg-red-500/90";

  const icon = type === "success" ? "✓" : "✕";

  return (
    <div
      className={`fixed top-20 right-4 ${bgColor} backdrop-blur-lg text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-slide-in`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white/80 hover:text-white transition"
      >
        ✕
      </button>
    </div>
  );
};
