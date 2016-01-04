
var HelloUser = React.createClass({
  getInitialState: function() {
      return {
        username: '@gawaineo'
      }
  },

  handleChange: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  render: function() {
    return (
      <div>
        Hello {this.props.name} <br />
        // Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});


var FriendsContainer =  React.createClass({
  getInitialState: function (){
    alert('In getInitialState')
    return {
      name: 'Bruce Wayne',
      friends: ['Clark Kent', 'Oliver Queen', 'Barry Allen', 'Eddy Murphy', 'Chris Rock']
    }
  },

  componentWillMount: function(){
    alert('In Component Will Mount')
  },

  componentDidMount: function(){
    alert('In Component Did Mount')
  },

  componentWillReceiveProps: function(nextProps){
    alert('In Component Will Receive Props')
  },

  componentWillUnmount: function(){},

  addFriend: function(friend) {
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  },

  render: function (){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

var AddFriend = React.createClass({
  getInitialState: function() {
    return {
      newFriend: ''
    }
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },
  handleAddNew: function() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    })
  },
  updateNewFriend: function(e) {
    this.setState({
      newFriend: e.target.value
    });
  },

  render: function(){
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
        <button type="submit" onClick={this.handleAddNew}> Add Friend</button>
      </div>
    )
  }
});


var ShowList = React.createClass({
  getDefaultProps: function(){
    return {
      names : []
    }
  },
  render: function () {
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });

    return (
      <div>
        <h3> Friends </h3>
        <ul> {listItems} </ul>
      </div>
    )
  }
});


ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('content')
);
