import React from "react";

interface LikeButtonProps {
  onClick: () => void;
  count: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onClick, count }) => {
  return (
    <button
      style={{ height: "40px" }}
      className="likebutton"
      type="button"
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      Likes: {count}
    </button>
  );
};

export default LikeButton;
