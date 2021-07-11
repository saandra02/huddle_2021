import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './VideoPlayer';
import Options from './Options';
import Notifications from './Notifications';
import VideoOptions from './VideoOptions';

const useStyles = makeStyles((theme) => ({
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const VideoCallGuest = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <VideoPlayer />
      <VideoOptions/>
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default VideoCallGuest;