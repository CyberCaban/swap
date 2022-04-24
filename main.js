const domContainer = document.querySelector("#like_button_container");
const e = React.createElement;

class Swap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImg: "kot",
    };
  }

  CycleImg(){
    switch (this.currentImg) {
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
    const imgsrc = '/img/' + {currentImg} + '.png'
    return React.createElement(<div>
        <button onClick = {this.CycleImg} ></button>
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
const image = document.querySelector('.image')
const root = ReactDOM.createRoot(image)
root.render(<Swap />)
