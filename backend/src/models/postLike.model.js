import mongoose from "mongoose";

const { Schema } = mongoose;

const postLikeSchema = new Schema(
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
  },
  {
    timestamps: true,
  },
);

/* 1 user chỉ like 1 lần */
postLikeSchema.index({ postId: 1, userId: 1 }, { unique: true });

export default mongoose.model("PostLike", postLikeSchema);
