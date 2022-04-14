import React,{useEffect} from 'react';
import { TextField,Container,Grid } from '@material-ui/core';
import { getPosts } from './action/index';
import { useDispatch } from 'react-redux';
import './index.css';
import Posts from './Posts/Posts';
import * as api from './api';
import {setPosts} from './action/index';
function App(){
const dispatch=useDispatch();
//this function wrk ass both compnent did mount and component didnotmount
const fetchAllPosts=async(name)=>{
  try{
    name=name?name:"nar";
 const {data}=await  api.fetchPosts(name);
// console.log(data);
  dispatch(setPosts(data));
  }
  catch(error){
   //   console.log(error.message);
  }

}
useEffect(()=>{
fetchAllPosts();
},[])

    return (
<div>
    <Container maxWidth={false} className='contain' style={{overflow:"hidden",width:"100vw"}}>
    <TextField label="search" onChange={(e)=>fetchAllPosts(e.target.value)}  id='txt-field'></TextField>
        <Grid container justifyContent="space-between" style={{marginTop:"5px",marginLeft:"29%"}} className="post-grid" alignItems="stretch"  spacing={3}>
        <Grid item xs={12} sm={6} md={6} >
        <Posts/>
            </Grid>
          </Grid>

        </Container>
</div>
    );
}
export default App;