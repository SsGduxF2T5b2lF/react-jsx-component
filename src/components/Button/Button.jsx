import React from 'react';

export const Button = ({...props}) => {
  let {
    label,
    style,
    ...rest
  } = props;

  label = label != null && label != undefined && String(label) || '';
  style = style || {};

  return (
    <button
      style={{ style }}
      { ...rest }
    >
      {label} Ipsum
    </button>
  )
}
