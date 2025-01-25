"use client";
import Modal from "@/app/(components)/Basic/Modal/Modal";
import Button from "@/app/(components)/Basic/Button/Button";
import { Type } from "@/app/(components)/Basic/Button/constants";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  description: string;
  siteLink?: string;
  codeLInk?: string;
}

const ProjectAboutModal = ({
  isOpen,
  onClose,
  name,
  description,
  siteLink,
  codeLInk,
}: Props) => {
  return (
    <Modal
      hasCloseButton={true}
      isOpen={isOpen}
      onClose={onClose}
      className='w-[400px]'
      title={name}
    >
      <div className=''>{description}</div>
      <div className='flex items-center gap-x-5 justify-center mt-5'>
        {codeLInk && (
          <Button
            element={Type.Link}
            href={codeLInk}
            className='w-20 text-invert'
          >
            Code
          </Button>
        )}
        <Button
          element={Type.Link}
          href={siteLink}
          className='w-20 text-invert'
        >
          Site
        </Button>
      </div>
    </Modal>
  );
};

export default ProjectAboutModal;
