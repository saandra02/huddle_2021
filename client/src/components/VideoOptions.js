import React, {useContext} from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const VideoOptions = () => {
    const { muteMic, muteCam } = useContext(SocketContext);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button variant="contained" color="primary" onClick={muteMic}>
            Mute Audio
          </Button>
          <Button variant="contained" color="primary" onClick={muteCam}>
            Mute Video
          </Button>
        </div>
  );
};

export default VideoOptions;