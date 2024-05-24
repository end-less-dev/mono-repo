/* eslint-disable-next-line */
export interface ConversationProps {}
import { SanInput, SanMessageCard } from "@san/web-ui-lib"

export function Conversation(props: ConversationProps) {
  return (
    <div>
      <h1>Welcome to Conversation!</h1>
      <SanMessageCard avatar="a" description="Hello suks...." title="Sanjay"/>
      <SanMessageCard avatar="a" description="Hello san...." title="Sugi"/>
      <SanInput/>
    </div>
  );
}

export default Conversation;
