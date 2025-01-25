"use client";
import Modal from "@/app/(components)/Basic/Modal/Modal";
import Button from "@/app/(components)/Basic/Button/Button";

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
      className='w-[300px]'
      title='Abount'
      subtitle={name}
    >
      <div>{description}</div>
      <div className='flex items-center justify-between'>
        <Button className='w-20 text-invert'>Code</Button>
        <Button className='w-20 text-invert'>Site</Button>
      </div>
    </Modal>
  );
};

export default ProjectAboutModal;
