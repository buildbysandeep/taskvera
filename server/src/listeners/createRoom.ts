import { Socket } from "socket.io";
import { rooms } from "../db/index";
import { generateUniqueMeetCode } from "../lib/utils";

export const createRoom = (socket: Socket) => {
  try {
    const roomCode = generateUniqueMeetCode();
    const newUserID = crypto.randomUUID();
    rooms[roomCode] = { admin: { id: newUserID, socketID: socket.id }, tasks: [], users: [] };
    console.log(`Room created: ${roomCode} by ${socket.id}`);
    socket.join(roomCode.toString()); // Admin joins the room
    socket.emit("joinRoom", { ok: true, roomID: roomCode, user: { id: newUserID } });
  } catch (error) {
    console.error("Error creating room:", error);
    socket.emit("joinRoom", { ok: false, error: "Failed to create room" });
  }
};
