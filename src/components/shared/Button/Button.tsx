import style from './Button.module.scss';

type Props = {};

// const StyledButton = styled.butt

export default function Button(props: Props) {
  return <div {...props} className={style.wrapper}></div>;
}
