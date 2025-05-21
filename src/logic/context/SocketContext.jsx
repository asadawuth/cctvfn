import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export default function SocketProvider({ children }) {
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [shopRequestCount, setShopRequestCount] = useState(0);
  const [newdataRequestWatchcctvCount, setNewdataRequestWatchcctvCount] =
    useState(0);
  const [newdataRequestSosVoiceCount, setRequestSosVoiceCount] = useState(0);
  const [newCommentCounts, setNewCommentCounts] = useState({}); // comment
  const socketRef = useRef(null);

  useEffect(() => {
    const savedNotificationsCount = parseInt(
      localStorage.getItem("notificationsCount") || 0
    );
    const savedShopRequestCount = parseInt(
      localStorage.getItem("shopRequestCount") || 0
    );
    const savedRequestWatchcctvCount = parseInt(
      localStorage.getItem("newdataRequestWatchcctvCount") || 0
    );
    const savedRequestSosVoiceCount = parseInt(
      localStorage.getItem("newdataRequestSosVoiceCount") || "0",
      10
    );
    const validCount = isNaN(savedRequestSosVoiceCount)
      ? 0
      : savedRequestSosVoiceCount;
    setRequestSosVoiceCount(validCount);
    setNotificationsCount(savedNotificationsCount);
    setShopRequestCount(savedShopRequestCount);
    setNewdataRequestWatchcctvCount(savedRequestWatchcctvCount);
  }, []);

  //  Socket.IO
  // "https://env-8549838.proen.app.ruk-com.cloud"
  // "http://localhost:8888"
  // "https://teetest.shop"
  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io("https://teetest.shop", {
        autoConnect: true,
        reconnection: true,
        transports: ["websocket"],
      });

      socketRef.current.on("newPost", () => {
        setNotificationsCount((prev) => {
          const updatedCount = prev + 1;
          localStorage.setItem("notificationsCount", updatedCount);
          return updatedCount;
        });
      });

      socketRef.current.on("newShopRequest", () => {
        setShopRequestCount((prev) => {
          const updatedCount = prev + 1;
          localStorage.setItem("shopRequestCount", updatedCount);
          return updatedCount;
        });
      });

      socketRef.current.on("newRequestWatchcctv", () => {
        setNewdataRequestWatchcctvCount((prev) => {
          const updatedCount = prev + 1;
          localStorage.setItem("newdataRequestWatchcctvCount", updatedCount);
          return updatedCount;
        });
      });

      socketRef.current.on("newSos", (data) => {
        // console.log("Received newSos event:", data);
        setRequestSosVoiceCount((prev) => {
          const currentCount = isNaN(prev) || prev === undefined ? 0 : prev;
          const updatedCount = currentCount + 1;
          // console.log("Updated newdataRequestSosVoiceCount to:", updatedCount);
          localStorage.setItem("newdataRequestSosVoiceCount", updatedCount);
          return updatedCount;
        });
      });

      socketRef.current.on("newComment", ({ postId }) => {
        setNewCommentCounts((prev) => {
          const current = prev[postId] || 0;
          const updated = { ...prev, [postId]: current + 1 };
          localStorage.setItem("newCommentCounts", JSON.stringify(updated));
          return updated;
        });
      });
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    try {
      const savedCounts = localStorage.getItem("newCommentCounts");
      if (savedCounts) {
        const parsed = JSON.parse(savedCounts);
        if (parsed && typeof parsed === "object") {
          setNewCommentCounts(parsed);
        }
      }
    } catch (err) {
      console.error("❌ Failed to load newCommentCounts:", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("newCommentCounts", JSON.stringify(newCommentCounts));
  }, [newCommentCounts]);

  // Reset functions
  const resetNotifications = () => {
    setNotificationsCount(0);
    localStorage.setItem("notificationsCount", 0);
  };

  const resetShopRequestNotifications = () => {
    setShopRequestCount(0);
    localStorage.setItem("shopRequestCount", 0);
  };

  const resetRequestWatchcctv = () => {
    setNewdataRequestWatchcctvCount(0);
    localStorage.setItem("newdataRequestWatchcctvCount", 0);
  };

  const resetNotificationsSos = () => {
    setRequestSosVoiceCount(0);
    localStorage.setItem("newdataRequestSosVoiceCount", 0);
  };

  const resetCommentForPost = (postId) => {
    setNewCommentCounts((prev) => {
      const updated = { ...prev, [postId]: 0 };
      localStorage.setItem("newCommentCounts", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <SocketContext.Provider
      value={{
        socket: socketRef.current,
        notificationsCount,
        shopRequestCount,
        newdataRequestWatchcctvCount,
        newdataRequestSosVoiceCount,
        resetNotifications,
        resetShopRequestNotifications,
        resetRequestWatchcctv,
        resetNotificationsSos,
        newCommentCounts,
        resetCommentForPost,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}
