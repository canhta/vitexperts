import React from "react";
import CountUp from "react-countup";

type Props = {
  number: number;
};
const Count = ({ number }: Props) => {
  return (
    <>
      <CountUp end={number} enableScrollSpy />
    </>
  );
};

export default Count;
