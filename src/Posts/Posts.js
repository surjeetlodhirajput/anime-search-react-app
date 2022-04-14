import React from "react";
import { useSelector } from "react-redux";//use for fetch data from global redux store
import Post from './Post/Post';
import {Grid,CircularProgress} from '@material-ui/core';

function Posts(){
  const posts=useSelector((state)=>state.posts);
//  console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid  container alignItems="stretch"   rowSpacing={1} columnSpacing={2} spacing={12} >
              {posts.map((post) => (
                <Grid key={post.mal_id} item xs={8} sm={8} md={10} style={{marginTop:"20px"}}>
                  <Post post={post} />
                </Grid>
              ))}
            </Grid>
          )
      
    );
}
export default Posts;