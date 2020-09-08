import React from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions";

import ReactMarkdown from "react-markdown";

class TaskGrid extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  getShortDesc(description, descriptionFormat) {
    var shortDesc = description;
    if (descriptionFormat == "HTML") {
      shortDesc = shortDesc.replace(/(<([^>]+)>)/gi, "");
    }
    return shortDesc.substring(0, 140);
  }

  renderPrizes(prizeSets) {
    return prizeSets.map((prizeSet) => {
      return prizeSet.prizes.map((prize) => {
        var currencyClassName = " sign icon";
        switch (prize.type) {
          case "USD":
            currencyClassName = "dollar " + currencyClassName;
            break;
          case "EU":
            currencyClassName = "euro " + currencyClassName;
            break;
          default:
            currencyClassName = "pound " + currencyClassName;
            break;
        }
        return (
          <div className="ui blue label">
            <i className={currencyClassName}>{prize.value}</i>
          </div>
        );
      });
    });
  }

  renderTags(tags) {
    return tags.map((tag) => {
      return (
        <div className="ui label" key={tag}>
          {tag}
        </div>
      );
    });
  }

  renderList() {
    return this.props.tasks.map((task) => {
      const taskURL = "https://www.topcoder.com/challenges/" + task.id;
      return (
        <div className="ui card" key={task.id}>
          <div className="content">
            <div className="header">{task.name}</div>
            <div className="meta">{task.status}</div>
            <div className="description">
              {this.getShortDesc(task.description, task.descriptionFormat)}
            </div>
          </div>
          <div className="meta">
            <div className="ui blue labels">
              <b>Tags:</b>
              {this.renderTags(task.tags)}
            </div>
            <div className="ui labels">
              <b>Prizes:</b>
              {this.renderPrizes(Object.values(task.prizeSets))}
            </div>
          </div>
          <div className="ui bottom attached button">
            <a href={taskURL} alt="link to task">
              <i className="eye icon"></i>
              View Task
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <select className="ui search dropdown">
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
        </select>
        <div className="ui container segment">
          <div className="ui cards ">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: Object.values(state.tasks),
  };
};

export default connect(mapStateToProps, { fetchTasks })(TaskGrid);
