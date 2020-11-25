import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/postsActions";

const App = () => {
  const { appBar, heading, image, mainContainer } = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState({});

  const passPostToForm = (data) => {
    // setPost(data);
    // console.log(post);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={appBar} position="static" color="inherit">
        <Typography className={heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts
                setCurrentId={setCurrentId}
                passPostToForm={passPostToForm}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form
                currentId={currentId}
                setCurrentId={setCurrentId}
                post={post}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
