import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Croc from '../assets/croc.jpg';


const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    pinkAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: pink[500],
    },
    greenAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: green[500],
    },
  });

  const Avatars = () =>  {
    const classes = useStyles();

    return(
            <div>
                <Avatar alt="Croc" src={Croc} className={classes.bigAvatar} />
            </div>
    );
  };

  export default Avatars