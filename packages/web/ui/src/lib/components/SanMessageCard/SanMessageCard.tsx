'use client';
import { Card, Avatar } from 'antd';

const { Meta } = Card;
/* eslint-disable-next-line */
export interface SanMessageCardProps {
  avatar: string;
  title: string;
  description: string;
}

export function SanMessageCard({
  avatar,
  description,
  title,
}: SanMessageCardProps) {
  
  return (
    <Card>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={title}
        description={description}
      />
    </Card>
  );
}

export default SanMessageCard;

{/* <Card>
  <Row justify="space-between">
    <Col>
      <Meta
        title={title}
        description={description}
      />
    </Col>
    <Col>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
    </Col>
  </Row>
</Card> */}
