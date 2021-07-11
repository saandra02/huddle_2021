import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h5>{call.name} wants to join</h5>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Admit
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;