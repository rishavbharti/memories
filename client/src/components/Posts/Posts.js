import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId, passPostToForm }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    posts.length!==0 ? <CircularProgress /> : <p>No Post. Create One!</p>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          {/* {passPostToForm(post)} */}
          <Post post={post} setCurrentId={setCurrentId} passPostToForm={passPostToForm}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
