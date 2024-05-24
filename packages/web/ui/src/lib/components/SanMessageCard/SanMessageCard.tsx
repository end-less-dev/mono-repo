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
  return currentUser !== false ? (
    <Card>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={title}
        description={description}
      />
    </Card>
  ) : (
    <Card>
      <Row justify="space-between">
        <Col>
          <Meta title={title} description={description} />
        </Col>
        <Col>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        </Col>
      </Row>
    </Card>
  );
}

export default SanMessageCard;
