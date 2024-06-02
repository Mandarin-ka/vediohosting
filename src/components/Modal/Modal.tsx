import { createPortal } from 'react-dom';

import { ClickEventType } from '@/types/clickEventType';

import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal');

function Modal({
  isActive,
  setIsActive,
  children,
}: {
  isActive: boolean;
  setIsActive: (value: React.SetStateAction<boolean>) => void;
  children?: React.ReactNode;
}) {
  const close = (e: ClickEventType) => {
    e.stopPropagation();
    setIsActive((prevValue: boolean) => !prevValue);
  };

  const onModalClick = (e: ClickEventType): void => {
    e.stopPropagation();
  };

  let element: JSX.Element;
  const className = isActive && 'active';

  if (isActive) {
    element = (
      <div className={styles.blackout} onClick={close} data-testid='blackout'>
        <div
          className={`${styles.modal} ${styles[className]}`}
          data-testid='modal'
          onClick={onModalClick}
        >
          <button className={styles.close} onClick={close}>
            <div className={styles.line} />
          </button>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }

  return createPortal(element, modalRoot);
}

export default Modal;
