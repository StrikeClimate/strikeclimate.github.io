import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoadingButton = ({ href }: { href: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulate a delay (e.g., for API call or page navigation)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Button
      asChild
      onClick={handleClick}
      disabled={isLoading} // Disable the button while loading
      className={`flex items-center justify-center ${
        isLoading ? "cursor-not-allowed opacity-70" : ""
      }`}
    >
      <Link href={href}>
        {isLoading ? (
          <div className="flex items-center">
            <span className="loader border-2 border-t-2 border-gray-300 dark:border-gray-500 rounded-full w-4 h-4 animate-spin"></span>
            Loading...
          </div>
        ) : (
          "Read More"
        )}
      </Link>
    </Button>
  );
};

export default LoadingButton;
