// propTypes, setState, getInitialState, componentWillMount, and getDefaultProps are all react functionality. Not sure if this would actually load right but these are the basics.
var ParentComponent = React.createClass({
  render: function() {
    return(
      <div>
        <ChildComponent dropDown={true} />
      </div>
    )
  }
});

var ChildComponent = React.createClass({
// the top of your component will list all of the functions with commas in between
  propTypes: {
    dropDown: React.PropTypes.bool
  },
  getData: function() {
    API.getStuffIWant(res =>
      this.setState({
        data: res
      });
    )
  },
  handleClick: function() {
    this.setState({
      message:"You clicked the button!"
      })
  },
  getInitialState: function(){
    // generally I set an initial state for everything, even if its an empty string/array/etc
    return{
      message: "These are my components."
    }
  },
  getDefaultProps: function(){
    // if no props are passed in, these are the defaults (not always necessary but can be useful)
    return{
      dropDown: false,
      data: []
    }
  },
  componentWillMount: function() {
    this.getData();
  },
  render: function() {
    var content = <List items={this.state.data} />
    if(this.props.dropDown){
      content = <Dropdown options={this.state.data} />
    }
    // Whenever this.setState is called on message (see handleClick function for reference), this.state.message (below) will automatically render new state.
    return(
     <div>
        {this.state.message}
        {content}
        <Button onButtonClick={this.handleClick}/>
     </div>
    )
  }
)};

var Button = React.createClass({
    render: function(){
      return(
        // this component has a prop passed in above (see ChildComponent) called onButtonClick which references a function called handleClick
        <div className='btn' onClick={this.props.onButtonClick}>
         {"Click Me"}
        </div>
      )
    }
});

var Dropdown = React.createClass({
  This proptype is for
  proptypes: {
    options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render: function() {
    // Assuming data is coming in {desc: "Option 3 description", val:3}
    var options = this.props.options.map(function(item){
      <option value={item.val}>{item.desc}</option>
    })
    return(
      <select>
        {options}
      </select>
    )
  }
});

var List = React.createClass({
  proptypes: {
    options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render: function(){
    var listItems = this.props.options.map(function(item){
      <li className={item.val}>{item.desc}</li>
    })
    return(
      <ul>
        {listItems}
      </ul>
    )
  }
});
