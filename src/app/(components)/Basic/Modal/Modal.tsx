import CloseIcon from "@/assets/icons/close.svg";
// import useOutsideClick from "@/shared/hooks/useOutsideClick";
import { SyntheticEvent, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
  disableClose?: boolean;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centeredTitle?: boolean;
}
const Modal = ({
  id,
  isOpen,
  onClose,
  hasCloseButton = false,
  className,
  children,
  disableClose = false,
  title,
  subtitle,
  centeredTitle,
}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (!ref.current?.open) {
        ref.current?.showModal();
      }
      document.body.style.overflow = "hidden";
    } else if (!disableClose) {
      ref.current?.close();
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [disableClose, isOpen]);

  const handleClose = (
    event:
      | SyntheticEvent<HTMLDialogElement, Event>
      | SyntheticEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (disableClose) return;

    onClose();
  };

  //   const modalContentRef = useOutsideClick<HTMLDivElement>({
  //     handler: () => {
  //       ref.current?.close();
  //       onClose();
  //     },
  //     enabled: isOpen && !disableClose,
  //   });

  return isOpen ? (
    <dialog id={id} ref={ref} onCancel={handleClose}>
      {/* overlay */}
      <div className='z-50 fixed inset-0 bg-black bg-opacity-50' />
      <div className='z-50 fixed top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center'>
        <div
          //   ref={modalContentRef}
          className={twMerge(
            "bg-primary border-primary border-2 relative p-5 rounded-2xl h-auto max-h-[95%] overflow-auto overflow-x-hidden custom-scroll",
            className
          )}
        >
          {title && (
            <div
              className={twMerge(
                "font-semibold -mt-2",
                subtitle ? "mb-4" : "mb-6",
                centeredTitle && "text-center"
              )}
            >
              {title}
            </div>
          )}

          {subtitle && (
            <div className={twMerge("mb-6", centeredTitle && "text-center")}>
              {subtitle}
            </div>
          )}

          {hasCloseButton && (
            <button
              className='absolute top-4 right-4  focus:outline-none'
              onClick={handleClose}
              disabled={disableClose}
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
