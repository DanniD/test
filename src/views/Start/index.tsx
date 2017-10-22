import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
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

export const Start: React.SFC<RouterProps> = ({ history }) => {
  return (
    <div style={Style.buttonbox}>
      <RaisedButton label="form" style={Style.button} />
      <RaisedButton label="preview" style={Style.button} />
      <RaisedButton label="statics" style={Style.button} />
    </div>
  );
};
export default Start;
