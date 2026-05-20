// config/passport.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        let user = await User.findOne({ email });


        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: email,
            avatar: profile.photos[0]?.value,
            googleId: profile.id,
            role: "USER",
          });
          console.log("New user created:", user);
        } else {
          if (!user.googleId) {
            user.googleId = profile.id;
            await user.save();
            console.log("Existing user updated with Google ID:", user);
          }
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);

export default passport;
