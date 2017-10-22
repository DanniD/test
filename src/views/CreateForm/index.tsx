import * as React from 'react';
import { RouterProps } from 'react-router';

const Style = {
  buttonbox: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between' as 'space-between',
    height: '300px',
    alignItems: 'center' as 'center',
  },
  button: {
    width: '20px',
  },
};

export const CreateForm: React.SFC<RouterProps> = ({ history }) => {
  return (
    <div style={Style.buttonbox}>
      <button name="form" style={Style.button} />
    </div>
  );
};

export default CreateForm;
