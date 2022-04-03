import React from 'react';

export const Text = ({...props}) => {
  let { label, ...rest } = props;
  label = label != null && label != undefined && String(props.label) || '';

  return (
    <p
      { ...rest } 
    >
      {label}
    </p>
  )
}
