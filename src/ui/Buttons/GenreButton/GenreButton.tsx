import * as styles from './GenreButton.module.scss';

function GenreButton({
  text,
  onClick,
  className,
}: {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}) {
  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default GenreButton;
