import React from "react";
import BiologyData from "./eventsData/BiologyData";
import styled from "styled-components";
import BuildData from "./eventsData/BuildData";

export const Events = () => {
  return (
    <div className="events">
      <h1>Events</h1>
    </div>
  );
};

const BubbleCard = styled.div`
  background: yellow;
  border-radius: 30px;
  height: 400px;
  width: 500px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;

  &:hover {
    margin-top: -0.5px;
    cursor: normal;
  }
`;

export const Biology = () => {
  return (
    <div className="events">
      {BiologyData.map((event) => (
        <BubbleCard>
          <h6>{event.eventName}</h6>
          <h8>{event.description}</h8>
        </BubbleCard>
      ))}
    </div>
  );
};

export const Build = () => {
  return (
    <div className="events">
      {BuildData.map((event) => (
        <BubbleCard>
          <h6>{event.eventName}</h6>
          <h8>{event.description}</h8>
        </BubbleCard>
      ))}
    </div>
  );
};

export const Chemistry = () => {
  return (
    <div className="events">
      <h1>Events/Events3</h1>
    </div>
  );
};

export const Physics = () => {
  return (
    <div className="events">
      <h1>Events/Events4</h1>
    </div>
  );
};

export const Trial = () => {
  return (
    <div className="events">
      <h1>Events/Events5</h1>
    </div>
  );
};
