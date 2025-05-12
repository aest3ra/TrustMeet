import { Button as ChakraButton } from '@chakra-ui/react'

const Button = ({
  children,
  variant = 'solid',
  size = 'md',
  isLoading,
  loadingText,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <ChakraButton
      variant={variant}
      size={size}
      isLoading={isLoading}
      loadingText={loadingText}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default Button 