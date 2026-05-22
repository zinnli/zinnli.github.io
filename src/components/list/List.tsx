import Link from "next/link";
import React from "react";

import FolderIcon from "../../assets/icons/ic_folder.svg";
import CalendarIcon from "../../assets/icons/ic_calendar.svg";

interface ListProps {
  isPost: boolean;
  title: string;
  desc: string;
  date: string;
  category: string;
  path: string;
}

const List = ({ isPost, title, desc, date, category, path }: ListProps) => {
  return (
    <Link
      href={path}
      className={`flex flex-col ${isPost ? "py-3" : "py-5 pt-3"} px-4  border-b w-full border-b-gray_sub/30  hover:text-primary`}
    >
      <h3
        className={`text-18 sm:text-20 ${isPost ? "mb-1" : "mb-2"} font-bold text-black hover:text-primary`}
      >
        {title}
      </h3>
      <span
        className={`block size-full ${isPost ? "mb-3" : ""} text-12 text-gray break-words text-overflow`}
      >
        {desc}
      </span>
      {isPost && (
        <div className="flex justify-end gap-2">
          <p className="flex gap-x-1">
            <FolderIcon className="h-[18px] w-[18px] fill-gray" />
            <span className="text-12  text-gray min-w-[50px]">{category}</span>
          </p>
          <p className="flex gap-x-1">
            <CalendarIcon className="h-[18px] w-[18px] fill-gray" />
            <span className="text-12  text-gray">{date}</span>
          </p>
        </div>
      )}
    </Link>
  );
};

export default List;
