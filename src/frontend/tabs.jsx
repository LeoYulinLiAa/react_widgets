import React from 'react'

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  render() {
    return (
      <div className="tabs">
        <ul>
          {this.props.tabs.map((tab, idx) => <Header title={tab.title} content={tab.content} clickyThingy={() => {
            console.log(tab.title);
            this.setState({ tabIndex: idx })
          }} active={ this.state.tabIndex === idx }/>)}
        </ul>
        <article>{this.props.tabs[this.state.tabIndex].content}</article>
      </div>
    )
  }
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.content = this.props.content;
  }

  render() {
    return (
      <li onClick={this.props.clickyThingy} className={ this.props.active ? "active" : "" }>
        {this.title}
      </li>
    );
  }

}