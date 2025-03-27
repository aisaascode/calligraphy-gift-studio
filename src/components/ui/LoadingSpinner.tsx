
import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background dark:bg-gray-900 transition-colors duration-300">
      <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin dark:border-white/20 dark:border-t-white"></div>
    </div>
  );
};

export default LoadingSpinner;
