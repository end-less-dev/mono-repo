'use client';
import { Card, Avatar, Row, Col } from 'antd';

const { Meta } = Card;
/* eslint-disable-next-line */
export interface SanMessageCardProps {
  avatar: string;
  title: string;
  description: string;
  currentUser: boolean;
}

export function SanMessageCard({
  avatar,
  description,
  title,
  currentUser,
}: SanMessageCardProps) {
  return (
    <Card style={currentUser ? {backgroundColor : "lightblue"} : {backgroundColor:"transparent"}}>
      <Meta
        avatar={
          <Avatar src={avatar} />
        }
        title={title}
        description={description}
      />
    </Card>
  )
}

export default SanMessageCard;
