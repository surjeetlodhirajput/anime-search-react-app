import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import useStyles from './style';
//import moment from 'moment';

function Post({post}){
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.image_url || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">{"Total EP:"+post.episodes}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" href={post.url} >{post.type}</Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{"Stared: "+JSON.stringify(post.start_date).slice(1,11)}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{post.end_date?"Ended: "+JSON.stringify(post.end_date).slice(1,11):"Going On"}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{"Score: "+post.score}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" >{post.synopsis}</Typography>
        </CardContent>

      </Card>
  
    );
}
export default Post;