import * as postService from "../services/post.service.js";
import { uploadToCloudinary } from "../services/cloudinary.service.js";
/* =========================
   CREATE POST
========================= */

export const createPost = async (req, res) => {
  try {
    let { title, content } = req.body;

    if (typeof content === "string") {
      content = JSON.parse(content);
    }
    const files = req.files || [];
    let fileIndex = 0;
    const updatedContent = await Promise.all(
      content.map(async (block) => {
        if (block.type === "image") {
          const file = files[fileIndex++];
          if (!file) {
            return { ...block, src: "" };
          }

          const uploaded = await uploadToCloudinary(file.buffer);

          return {
            ...block,
            src: uploaded.secure_url,
            public_id: uploaded.public_id,
          };
        }

        return block;
      }),
    );

    let result = await postService.createPost({
      data: { title, content: updatedContent },
      user: req.user,
    });
    res.json({
      success: true,
      content: updatedContent,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

/* =========================
   GET POSTS (PAGINATION + SEARCH)
========================= */
export const getPosts = async (req, res) => {
  try {
    const result = await postService.getPosts(req.query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   GET ONE POST
========================= */
export const getPostBySlug = async (req, res) => {
  try {
    const post = await postService.getPostBySlug(req.params.slug);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
