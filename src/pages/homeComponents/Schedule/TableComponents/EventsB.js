import React from "react";
import Event from "./Event";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const EventsB = () => {
  const eventA = [
    {
      event: "4:00PM",
    },
    {
      event: "Code Busters, Ornithology",
    },
    {
      event: "Chem Lab",
    },
    {
      event: "",
    },
    {
      event: "A&P",
    },
    {
      event: "Machines",
    },
  ];
  return (
    <Wrap>
      {eventA.map((ev) => (
        <Event events={ev.event} />
      ))}
    </Wrap>
  );
};

export default EventsB;