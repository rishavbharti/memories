import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.send(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  // console.log(post);

  const newPost = new PostMessage(post);
  // console.log(newPost);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const updates = req.body;
  // console.log(postId, updates);

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(postId, updates, {
      new: true,
    });
    res.status(201).json(updatedPost);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  try {
    await PostMessage.deleteOne({ _id: postId });
    res.status(201).json({ message: `Deleted Post with ID ${postId} !` });
  } catch (error) {
    console.log(error);
  }
};
