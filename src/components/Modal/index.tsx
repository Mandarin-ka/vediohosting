import { createPortal } from 'react-dom';

import { Blackout, StyledCloseButton, StyledCloseButtonLine, StyledModal } from './styled';
import { ClickEventType } from '@/types/clickEventType';

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
      <Blackout data-testid="blackout" onClick={close}>
        <StyledModal className={className} data-testid="modal" onClick={onModalClick}>
          <StyledCloseButton onClick={close}>
            <StyledCloseButtonLine />
          </StyledCloseButton>
          {children}
        </StyledModal>
      </Blackout>
    );
  } else {
    return null;
  }

  return createPortal(element, modalRoot);
}

export default Modal;
