import { NativeButton } from './styles';

export type TButtonProps = {
  onPressButton?: () => void
  selected?: boolean
  disabled?: boolean
  rounded?: boolean
  children?: JSX.Element
}

function Button({ children, onPressButton, selected, disabled = false, rounded }: TButtonProps): JSX.Element {
  return (
    <NativeButton onClick={onPressButton} selected={selected} disabled={disabled} rounded={rounded}>
      {children}
    </NativeButton>
  )
}

export default Button