"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  onToggle: () => unknown;
}

const Modal = ({
  isOpen,
  children,
  title = undefined,
  onToggle,
}: ModalProps) => (
  <div
    className={`
        fixed
        top-0
        right-0
        left-0
        bottom-0
        z-100
        bg-black/90
        ${isOpen ? "block" : "hidden"}
    `}
  >
    <div
      className={`
        bg-slate-800
        rounded-md
        fixed
        top-1/10
        left-1/10
        right-1/10
        md:max-w-[50vw]
        md:left-1/2
        md:right-unset
        md:-translate-x-1/2
    `}
    >
      <div
        className={`
        flex
        items-center
        border-slate-500
        px-3
        ${title ? "py-3" : "py-1"}
        ${title ? "border-b-1" : ""}
        `}
      >
        {title && <div className="text-lg">{title}</div>}
        {onToggle && (
          <button onClick={onToggle} className="cursor-pointer ml-auto">
            &times;
          </button>
        )}
      </div>
      <div className="p-3">{children}</div>
    </div>
  </div>
);

export default Modal;
