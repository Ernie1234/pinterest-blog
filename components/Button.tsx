"use client";

interface IBtn {
  title: string;
  isOutlined?: boolean;
  large?: boolean;
  handleClick: () => void;
}

function Button({ title, large, isOutlined, handleClick }: IBtn) {
  return (
    <button
      className={`border-2 border-slate-900 rounded-full font-medium capitalize 
      ${isOutlined ? "bg-slate-900 text-white" : "bg-transparent"} 
      ${large ? "px-6 py-3" : "px-4 py-2"}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
