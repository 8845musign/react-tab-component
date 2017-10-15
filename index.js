class Tabs extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      tab: ''
    }
    
    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick(id) {
    this.setState({
      tab: id
    })
  }
  
  handleKeyPress(e) {
  }
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class TabList extends React.Component {
  render() {
    <ul
      role="tablist"
      onClick={this.handleTabClick}
    >
      {this.props.children}
    </ul>
  }
}

class Tab extends React.Component {
  render() {
    return (
      <li role="tab">
        {this.props.children}
      </li>
    )
  }
}

class TabContent extends React.Component {
  render() {
    return (
      <div role="tabpanel">
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>content1</Tab>
          <Tab>content2</Tab>
          <Tab>content3</Tab>
        </TabList>
      </Tabs>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
