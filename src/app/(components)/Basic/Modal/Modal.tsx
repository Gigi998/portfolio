import CloseIcon from "@/assets/icons/close.svg";
import { SyntheticEvent, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
  className?: string;
  children: React.ReactNode;
  title?: string;
}
const Modal = ({
  isOpen,
  onClose,
  hasCloseButton = false,
  className,
  children,
  title,
}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (!ref.current?.open) {
        ref.current?.showModal();
      }
      // Disable outside scroll
      document.body.style.overflow = "hidden";
    } else {
      ref.current?.close();
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = (
    event:
      | SyntheticEvent<HTMLDialogElement, Event>
      | SyntheticEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    onClose();
  };

  return isOpen ? (
    <dialog ref={ref} onCancel={handleClose}>
      {/* overlay */}
      <div className='z-50 fixed inset-0 bg-black bg-opacity-50' />
      <div className='z-50 fixed inset-0 flex items-center justify-center'>
        <div
          className={twMerge(
            "bg-primary border-primary border-2 relative p-5 rounded-2xl h-auto max-h-[95%] overflow-auto overflow-x-hidden",
            className
          )}
        >
          {title && (
            <div className='font-semibold -mt-2 text-center mb-4'>{title}</div>
          )}
          {hasCloseButton && (
            <button
              className='absolute top-4 right-4  focus:outline-none'
              onClick={handleClose}
            >
              <CloseIcon className='fill-invert' />
            </button>
          )}
          {children}
        </div>
      </div>
    </dialog>
  ) : null;
};

export default Modal;
