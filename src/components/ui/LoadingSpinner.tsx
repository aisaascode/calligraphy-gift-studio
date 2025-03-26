
import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
