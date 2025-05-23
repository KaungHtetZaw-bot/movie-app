import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const signIn = async (logInInfo) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      logInInfo.email,
      logInInfo.password
    );
    return { success: true, user: userCredential.user };
  } catch (error) {
    return {
      success: false,
      error: true,
      message: error.message || "Login failed",
    };
  }
};

export const signUp = async (userInfo) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    await updateProfile(userCredential.user, { displayName: userInfo.name });
    // console.log("user", userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return {
      success: false,
      error: true,
      message: error.message || "Sign-up failed",
    };
  }
};

export const isAuthenticated = () => {
  return localStorage.getItem("user");
};
