import * as postService from "../services/post.service.js";
import cloudinary from "../config/cloudinary.js";
import Post from "../models/post.model.js";
import slugify from "slugify";
import User from "../models/user.model.js";
import { generateId } from "../utils/generateId.js";
/* =========================
   CREATE
========================= */

export const createPost = async ({ data, user }) => {
  if (!data?.title?.trim()) {
    throw new Error("Title is required");
  }

  const baseSlug = slugify(data.title, {
    lower: true,
    strict: true,
  });

  let slug = baseSlug;

  for (let i = 1; i < 100; i++) {
    const exists = await Post.exists({ slug });
    if (!exists) break;
    slug = `${baseSlug}-${i}`;
  }

  const author = await User.findById(user.id);
  if (!author) throw new Error("User not found");

  let id = generateId(data.title);
  console;
  const existingId = await Post.exists({ id });
  if (existingId) {
    console.warn("Duplicate ID detected, regenerating...");
    id = generateId(data.title + "-" + Date.now());
  }

  const post = await Post.create({
    title: data.title,
    subtitle: data.subtitle || "",
    slug,
    image: data.image || "",
    backgroundImage: data.backgroundImage || "",
    ctaText: data.ctaText || "",
    ctaLink: data.ctaLink || `/blog/${slug}`,
    tag: data.tag || "General",
    isFeatured: data.tag === "Featured",
    author: {
      userId: author._id,
      name: author.email || "",
      avatar: author.avatar || "",
    },
    stats: {
      views: 0,
      likesCount: 0,
      bookmarksCount: 0,
    },
    content: (data.content || []).map((b, index) => ({
      type: b.type,
      value: b.value || "",
      src: b.src || "",
      caption: b.caption || "",
      order: index,
    })),
  });
  console.log("Created post:", post);
  return post;
};
/* =========================
   GET ALL
========================= */
export const getPosts = async (query) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    tag,
    status = "published",
  } = query;

  const skip = (page - 1) * limit;

  const filter = {
    status,
  };

  if (tag) filter.tag = tag;

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { subtitle: { $regex: search, $options: "i" } },
      { slug: { $regex: search, $options: "i" } },
    ];
  }

  const [items, total] = await Promise.all([
    Post.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .select(
        "title subtitle slug image createdAt stats author tag isFeatured",
      ),

    Post.countDocuments(filter),
  ]);

  return {
    items,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  };
};

/* =========================
   GET BY SLUG
========================= */
export const getPostBySlug = async (req, res) => {
  try {
    const post = await postService.getPostBySlug(req.params.slug);

    if (!post) return res.status(404).json({ message: "Not found" });

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   UPDATE
========================= */
export const updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);

    if (!post) return res.status(404).json({ message: "Not found" });

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   DELETE
========================= */
export const deletePost = async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.id);

    if (!post) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   LIKE
========================= */
export const toggleLikePost = async (req, res) => {
  try {
    const post = await postService.toggleLikePost(
      req.params.id,
      req.user._id, // 🔥 từ middleware auth
    );

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   COMMENT
========================= */
export const addComment = async (req, res) => {
  try {
    const commentData = {
      user: {
        userId: req.user._id,
        name: req.user.name,
        avatar: req.user.avatar,
      },
      content: req.body.content,
      parentId: req.body.parentId || null,
    };

    const post = await postService.addComment(req.params.id, commentData);

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
