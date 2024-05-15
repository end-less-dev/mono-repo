import useNumbric from "./components/useNumbric";
/* eslint-disable-next-line */
export interface NumbricProps {
  value :  number | string;
}

export function Numbric({ value }: NumbricProps) {
  const { numbric } = useNumbric({value})
 

  return (
    <>{numbric}</>
  );
}

export default Numbric;
