import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  ...props
}) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      isCentered
      {...props}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px)"
      />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {footer && (
          <ModalFooter>
            {footer}
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal 