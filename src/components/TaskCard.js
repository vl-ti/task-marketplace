import React from "react";

class TaskCard extends React.Component {
  render() {
    return <div className="ui card"></div>;
  }
}
TaskCard.defaultProps = {
  task = "" 
};

export default TaskCard;
