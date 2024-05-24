'use client';
import { Flex, Button } from "antd";
import { SanInput } from "@san/web-ui-lib";
/* eslint-disable-next-line */
export interface SanMessageInputProps {
  handleSubmit : (e: any)=>void;
  setInput: (e:any)=> void;
  input : string
}

export function SanMessageInput({handleSubmit, setInput, input}: SanMessageInputProps) {
  return (
    <Flex gap="middle" justify="space-between" align="center">
      <SanInput onChange={(e)=>setInput(e.target.value)} value={input}/>
      <Button type="primary" onClick={handleSubmit}>Send</Button>
    </Flex>
  );
}

export default SanMessageInput;
