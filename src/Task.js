import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const toNow = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  });
  const timeLeft =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3
      ? true
      : false;

  return (
    <div className="p-6 bg-[#fff] rounded-[5px] leading-normal mt-4 shadow-[0 4px 5px 0 rgb(0 0 0 / 10%)] ">
      <h3 className="text-[18px] text-[#c8781a] ">{taskObj.title}</h3>
      <div className="text-[12px] pt-1 ">
        son teslim:{" "}
        <span
          className={
            timeLeft
              ? "bg-[#ffd9d4] py-[3px] px-[8px] rounded-[2px] inline-block"
              : "bg-violet-200 py-[3px] px-[8px] rounded-[2px] inline-block"
          }
        >
          {toNow}
        </span>
      </div>
      <p className="p-[0.5rem,0,0.75rem] text-[14px] text-[#444] ">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-[5px] px-3 text-[14px] border border-solid border-[#ccc] mr-1 mb-1.5 rounded-[30px] "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0 4px 5px 0 rgb(0 0 0 / 5%)] rounded-[3px] border-0 cursor-pointer "
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
