import React from "react";
import "./BurialList";
interface BurialCardProps {
  [key: string]: string;
}
class BurialCard extends React.Component<BurialCardProps> {
  render() {
    const oneItem = this.props;
    return (
      <div className="Box">
        <h1 className="H1Box">ID {oneItem.id}</h1>
        <h2>Hair Color: {oneItem.haircolor}</h2>
        <h4>Area: {oneItem.area}</h4>
      </div>
    );
  }
}
export default BurialCard;
