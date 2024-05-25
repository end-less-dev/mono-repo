import models from '../models';
import { Request, Response } from 'express';
import { Server as SocketIOServer } from "socket.io"

interface CreateMessageReqType {
  username: string;
  message: string;
  email: string;
}

interface IoWithRequestType extends Request {
    io?: SocketIOServer
}

const createMessage = async (request: IoWithRequestType, response: Response) => {
    const { email, message, username } = request.body;
  
    if (!email || !message || !username) {
      return response.status(400).json({
        message: 'All fields are required: email, message, and username',
      });
    }
  
    const createMessageData: CreateMessageReqType = {
      email,
      message,
      username,
    };
  
    try {
      const result = await models.Message.create(createMessageData);
  
      // Emit the 'chat message' event via Socket.IO
      const io = request.io;
      io.emit('chat message', createMessageData);
  
      response.status(201).json({
        message: 'Message posted successfully!',
        data: result,
      });
    } catch (error) {
      response.status(500).json({
        message: 'Something went wrong!',
        error: error.message,
      });
    }
  };
  
export {
  createMessage
};
