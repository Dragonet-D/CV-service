import React from 'react';
import Button from '@material-ui/core/Button';

export default function Buttons(props) {
  const { children, ...rest } = props;
  return (
    <Button color="secondary" variant="contained" {...rest}>
      {children}
    </Button>
  );
}
