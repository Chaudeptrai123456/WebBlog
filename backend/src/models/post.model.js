// import mongoose from "mongoose";

// const { Schema } = mongoose;

// /* =========================
//    CONTENT BLOCK
// ========================= */
// const contentBlockSchema = new Schema(
//   {
//     type: {
//       type: String,
//       enum: ["heading", "paragraph", "image"],
//       required: true,
//       index: true,
//     },

//     value: String,
//     src: String,
//     caption: String,

//     order: {
//       type: Number,
//       default: 0,
//       index: true,
//     },
//   },
//   { _id: false },
// );

// /* =========================
//    AUTHOR SNAPSHOT
// ========================= */
// const authorSchema = new Schema(
//   {
//     userId: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     name: String,
//     avatar: String,
//   },
//   { _id: false },
// );

// /* =========================
//    STATS (READ-OPTIMIZED)
// ========================= */
// const statsSchema = new Schema(
//   {
//     views: { type: Number, default: 0, index: true },
//     likesCount: { type: Number, default: 0 },
//     commentsCount: { type: Number, default: 0 },
//   },
//   { _id: false },
// );

// /* =========================
//    TAGS
// ========================= */
// const tagSchema = new Schema(
//   {
//     name: String,
//     slug: String,
//   },
//   { _id: false },
// );

// /* =========================
//    POST
// ========================= */
// const postSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//       index: "text",
//     },

//     subtitle: String,

//     slug: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//       lowercase: true,
//       trim: true,
//     },

//     image: String,
//     backgroundImage: String,

//     ctaText: String,
//     ctaLink: String,

//     tag: String,
//     tags: [tagSchema],

//     author: authorSchema,

//     status: {
//       type: String,
//       enum: ["draft", "published"],
//       default: "published",
//       index: true,
//     },

//     stats: statsSchema,

//     content: [contentBlockSchema],

//     isFeatured: {
//       type: Boolean,
//       default: false,
//       index: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// /* =========================
//    INDEX OPTIMIZATION
// ========================= */
// postSchema.index({ createdAt: -1 });
// postSchema.index({ "author.userId": 1 });
// postSchema.index({ status: 1, createdAt: -1 });
// postSchema.index({ isFeatured: 1, createdAt: -1 });

// export default mongoose.model("Post", postSchema);
// Tag lookup — sparse vì không phải post nào cũng có tags

import mongoose from "mongoose";
const { Schema } = mongoose;

const contentBlockSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["heading", "paragraph", "image"],
      required: true,
    },
    value: String,
    src: String,
    caption: String,
    order: { type: Number, default: 0 },
  },
  { _id: false },
);

const authorSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    avatar: String,
  },
  { _id: false },
);
const statsSchema = new Schema(
  {
    views: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
  },
  { _id: false },
);

const tagSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, lowercase: true, trim: true },
  },
  { _id: false },
);
const ctaSchema = new Schema(
  {
    text: String,
    link: String,
  },
  { _id: false },
);

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },

    subtitle: String,

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    image: String,
    backgroundImage: String,

    cta: ctaSchema,

    tags: [tagSchema],

    author: authorSchema,

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },

    stats: statsSchema,

    content: {
      type: [contentBlockSchema],
      validate: {
        validator: (v) => v.length <= 500,
        message: "Content quá dài, tối đa 500 blocks",
      },
    },

    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

postSchema.index({ title: "text", subtitle: "text" });

postSchema.index({ status: 1, createdAt: -1 }); // feed chính
postSchema.index({ isFeatured: 1, createdAt: -1 }); // featured posts
postSchema.index({ "author.userId": 1, createdAt: -1 }); // posts của 1 user

postSchema.index({ "tags.slug": 1 }, { sparse: true });

export default mongoose.model("Post", postSchema);
