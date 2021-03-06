class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
      this.state = {
        visibility: false
      };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details</p>
          </div>)}
       </div>
    )
  }
}

ReactDOM.render(
  <VisibilityToggle/>,
  document.getElementById('app')
);

// let visibility = false;

// const toggleDetails = () => {
//   visibility = !visibility;
//   render();
// }

// const render = () => {
//   const challenge = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details</p>
//         </div>)}
//     </div>
//   )
  
//   ReactDOM.render(
//     challenge, 
//     document.getElementById('app')
//   );
// };

// render();