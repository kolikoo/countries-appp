import React from "react";

interface LikeButtonProps {
  onClick: () => void;
  likeCount: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onClick, likeCount }) => {
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
      Likes: {likeCount}
    </button>
  );
};

export default LikeButton;
