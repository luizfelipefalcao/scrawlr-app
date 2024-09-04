import { ImageContainer, NativeIcon, Overlay } from './styles';

type TIconProps = { iconName: string, selected?: boolean }

function Icon({ iconName, selected }: TIconProps): JSX.Element {
  return (
    <ImageContainer>
      <NativeIcon src={iconName} alt={iconName} />
      {selected && <Overlay />}
    </ImageContainer>
  )
}

export default Icon