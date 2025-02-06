import React from "react";

interface TruncateTextProps {
  children: string; // Accept the text directly
  wordLimit?: number;
  className?: string;
}

const TruncateText: React.FC<TruncateTextProps> = ({ children, wordLimit = 10, className }) => {
  const truncatedText = children.split(" ").length > wordLimit
    ? children.split(" ").slice(0, wordLimit).join(" ") + "..."
    : children;

  return <p className={className}>{truncatedText}</p>;
};

export default TruncateText;
