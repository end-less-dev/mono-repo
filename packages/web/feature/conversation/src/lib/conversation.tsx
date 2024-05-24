'use client';
import { Space } from "antd";
/* eslint-disable-next-line */
export interface ConversationProps {}
import { SanMessageInput, SanMessageCard } from "@san/web-ui-lib"
import { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:8080', {
  transports: ['websocket'],
});

export function Conversation(props: ConversationProps) {
  const bottomRef = useRef<any>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const scrollToBottom = () => {
    bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, []);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('chat message');
    };
  }, []);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    socket.emit('chat message', input);
    setInput('');

  };
  return (
    <div>
      <h1>Welcome to Conversation!</h1>
      <div>
      <Space direction="vertical" style={{width:"100%"}} ref={bottomRef}>
      {
        messages.map((item)=>(
          <SanMessageCard avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=8" description={item} title="Sanjay" currentUser={true}/>
        ))
      }
     </Space>
      </div>
     <SanMessageInput handleSubmit={handleSubmit} setInput={setInput} input={input}/>
    </div>
  );
}

export default Conversation;