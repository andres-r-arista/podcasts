import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="p-2 border-b mb-2">
      <div
        className="font-medium text-sky-800 hover:underline cursor-pointer"
        onClick={() => navigate(`/`)}
      >
        PodCaster
      </div>
    </header>
  );
};