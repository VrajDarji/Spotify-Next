"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
interface DialogProps {
  title: string;
  desc: string;
  children: React.ReactNode;
  isOpen: boolean;
  onChange: (open: boolean) => void;
}
const Dialog: React.FC<DialogProps> = ({
  title,
  desc,
  children,
  isOpen,
  onChange,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onChange} backdrop="blur">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 justify-center items-center">
              <p className="text-xl">{title}</p>
              <p className="text-base font-light">{desc}</p>
            </ModalHeader>

            <ModalBody>{children}</ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Dialog;
