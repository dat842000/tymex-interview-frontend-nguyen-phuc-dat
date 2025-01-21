import React from "react";
import ImgIcon from "./ImgIcon";
import { IAuthor } from "../types/author";

type SelfProps = {
  author: IAuthor;
};

const Avatar = ({ author }: SelfProps) => {
  return (
    <div className="avatar-author">
      <ImgIcon alt="avatar-author" src={author.avatar} />
      <div className="status">
        {author.onlineStatus === "online" ? (
          <ImgIcon alt="status" src={"/icons/status-online.svg"} size={12} />
        ) : (
          <ImgIcon alt="status" src={"/icons/status-other.svg"} size={12} />
        )}
      </div>
    </div>
  );
};
export default Avatar;
