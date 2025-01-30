import { createContext, useState, useEffect } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "./../utils/Localstorage";
import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/user/getdata")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (registerInputObj) => {
    try {
      const res = await axios.post("/user/createIdEmployee", registerInputObj);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (credential) => {
    try {
      const res = await axios.post("/user/login", credential);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const updateUserData = async (updataTextInputObj) => {
    try {
      const res = await axios.patch("/user/updateDataId", updataTextInputObj);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const updataProfile = async (dataProfile) => {
    try {
      const res = await axios.patch("/user/updateProfile", dataProfile);
      if (res && res.data) {
        return res.data; // ส่งกลับข้อมูล data ที่ได้มา
      } else {
        throw new Error("No response data");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const setProfileDefaults = async () => {
    try {
      const response = await axios.patch("/user/changeProfiletoDefaultImage");
      if (!response.data.defaultProfileUrl) {
        setAuthUser((prev) => ({
          ...prev,
          profile: null,
        }));
      } else {
        throw new Error("Default profile URL not found in response.");
      }
    } catch (error) {
      console.error("Error setting default profile:", error);
    }
  };

  const changePassword = async (changePasswordInputObj) => {
    try {
      const res = await axios.patch(
        "/user/changepassworduser",
        changePasswordInputObj
      );
      setAuthUser(res.data.user);
      return true;
    } catch (error) {
      throw error;
    }
  };

  const changeEmail = async (changeEmailInputObj) => {
    try {
      const res = await axios.patch("/user/changeemail", changeEmailInputObj);
      res.data.message;
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        updateUserData,
        updataProfile,
        setProfileDefaults,
        changePassword,
        changeEmail,
        setAuthUser,
        loading,
        authUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
