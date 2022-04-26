const domContainer = document.querySelector("#like_button_container");
const e = React.createElement;

class Swap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImg: "kot",
    };
  }

  CycleImg=()=>{
    this.state.currentImg
    switch (this.state.currentImg) {
      case "kot":
        this.setState({currentImg:'pes'})
        break;
      case "pes":
        this.setState({currentImg:'prikol'})
        break;
      case "prikol":
        this.setState({currentImg:'kot'})
        break;
    }
  }

  render() {
    const imgsrc = '/img/' + this.state.currentImg + '.png'
    return (<div>
        <button onClick = {this.CycleImg} >Swap</button>
        <img src={imgsrc} alt="sss" />
      </div>);
  }
}

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       liked: false,
//     };
//   }

//   render() {
//     if (this.state.liked) {
//       return "You liked this.";
//     }

//     return e(
//       "button",
//       { onClick: () => this.setState({ liked: true }) },
//       "Like"
//     );
//   }
// }

// ReactDOM.render(e(LikeButton), domContainer);
const container = document.getElementById('image')
const root = ReactDOM.createRoot(container);
root.render(<Swap />)
