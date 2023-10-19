import classnames from 'classnames';
import React, { forwardRef } from 'react';

import LoaderIcon from '../LoaderIcon/LoaderIcon';
import styles from './Button.module.scss';

export interface IButton {
  id?: string;
  children: React.ReactNode;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: React.JSX.IntrinsicElements['button']['type'];
  className?: string;
  disabled?: boolean;
  form?: string;
  value?: string;
}

const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const { id, children, loading, onClick, type = 'button', className, disabled, form, value, ...extra } = props;

  return (
    <button
      {...extra}
      ref={ref}
      id={id}
      type={type}
      className={classnames(styles.Button, className, {
        [styles.Button_disabled]: loading || disabled,
      })}
      onClick={onClick}
      disabled={loading || disabled}
      form={form}
      value={value}
    >
      {loading ? <LoaderIcon /> : children}
    </button>
  );
});

Button.displayName = 'Button';

export default React.memo(Button);
