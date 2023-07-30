import "./MemoryCard.css";

import React from "react";

class MemoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: "",
      nextImage: "",
      seenImages: [],
      showImage: true,
    };
  }

  images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
    "/assets/image4.jpg",
    "/assets/image5.jpg",
    "/assets/image6.jpg",
    "/assets/image7.jpg",
    "/assets/image8.jpg",
    "/assets/image9.jpg",
    "/assets/image10.jpg",
  ];

  componentDidMount() {
    const nextImage = this.images[Math.floor(Math.random() * this.images.length)];
    this.setState({ currentImage: nextImage, nextImage: nextImage });
  }

  getNextImage = () => {
    const nextImage = this.images[Math.floor(Math.random() * this.images.length)];
    this.setState({ nextImage });
  };

  handleChoice = (choice) => {
    console.log(this.state.currentImage);
    choice = choice
      ? !this.state.seenImages.includes(this.state.currentImage)
      : this.state.seenImages.includes(this.state.currentImage);
  
    if (choice) {
      alert("Game over!");
      this.setState({ seenImages: [] });
      this.props.resetScore();
    } else {
      if (!this.state.seenImages.includes(this.state.currentImage)) {
        this.setState(prevState => ({
          seenImages: [...prevState.seenImages, prevState.currentImage],
        }));
      }
      this.props.incrementScore();
    }
    
    if (this.state.seenImages.length === this.images.length) {
      alert("You win!");
      this.setState({ seenImages: [] });
      this.props.resetScore();
    }
    else {
      this.setState(prevState => ({
        currentImage: prevState.nextImage,
        showImage: true,
      }));
      this.getNextImage();

      setTimeout(() => {
        this.setState(prevState => ({
          showImage: false,
        }));
      }, 1000);
    }
  };  

  render() {
    return (
      <div className="card">
        <h4>Have you seen this I M A G E yet?</h4>
        <div id="image-box">
          {this.state.showImage ? (
            <img src={this.state.currentImage} alt="random" />
          ) : (
            <div />
          )}
        </div>
        <button
          className="choice-button"
          onClick={() => {
            this.handleChoice(true);
          }}
        >
          Yes
        </button>
        <button
          className="choice-button"
          onClick={() => {
            this.handleChoice(false);
          }}
        >
          No
        </button>
      </div>
    );
  }
}

export default MemoryCard;
