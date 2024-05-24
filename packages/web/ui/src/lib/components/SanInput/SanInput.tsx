import { Input, InputProps } from "antd"
/* eslint-disable-next-line */
export interface SanInputProps extends InputProps{}

export function SanInput(props: SanInputProps) {
  return <Input variant="outlined" {...props}/>
}

export default SanInput;
