import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
      index: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    parentId: {
      type: Schema.Types.ObjectId,
      default: null, // reply comment
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

/* INDEX */
commentSchema.index({ postId: 1, createdAt: -1 });
commentSchema.index({ parentId: 1 });

export default mongoose.model("Comment", commentSchema);
