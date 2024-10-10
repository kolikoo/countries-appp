
import React from "react";

interface LikeButtonProps {
  onClick: () => void;
  count: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onClick, count }) => {
  return (
    <button className="likebutton" type="button" onClick={onClick}>
      Likes: {count}
    </button>
  );
};

export default LikeButton;
