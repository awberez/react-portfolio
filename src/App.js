import React, { Component } from "react";
import axios from 'axios'
import PageTab from "./components/PageTab";
import Contact from "./components/Contact"
import GalleryDisplay from "./components/GalleryDisplay";
import GalleryTile from "./components/GalleryTile";
import galleryItems from "./galleryItems.json";
import "./App.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      chosen: 0,
      showGallery: true,
      showAbout: false,
      showContact: false,
      name: '',
      email: '',
      message: '',
      enable: false,
      contactSent: false,
      tiles: this.tileMaker()
    }
  }

  tileMaker = () => {
    let tiles = [];
    for (let i = 0; i < galleryItems.length; i++) {
      let tile = {  "id": i, 
                    "name": galleryItems[i].name, 
                    "image": galleryItems[i].image,
                    "image_small": galleryItems[i].image_small, 
                    "text": galleryItems[i].text, 
                    "link": galleryItems[i].link, 
                    "github": galleryItems[i].github
                  };
      tiles.push(tile);
    }
    return tiles;
  }

  selectTile = id => { this.setState({chosen: id} );}

  selectView = id => { this.setState({showAbout: false, showGallery: false, showContact: false}, () => { this.setState({[id]: true}); } );}

  onNameChange = event => {
    this.setState({name: event.target.value}, ()=>{this.enableSubmit();})
  }

  onEmailChange = event => {
    this.setState({email: event.target.value}, ()=>{this.enableSubmit();})
  }

  onMessageChange = event => {
    this.setState({message: event.target.value}, ()=>{this.enableSubmit();})
  }

  enableSubmit = () => {
    console.log("checking");
    if (2 <= this.state.name.length &&
        6 <= this.state.email.length &&
        2 <= this.state.message.length) {
      this.setState({enable: true});
      console.log("true");
    }
    else { this.setState({enable: false}); };
  }

  sendMail = e => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email:this.state.email,
      message: this.state.message
    };
    axios({
      method: "POST", 
      url:"https://6prn0e5g37.execute-api.us-east-1.amazonaws.com/contact", 
      data:  data,
      headers: { 'Content-Type': 'application/json' },
    }).then((response)=>{
      this.setState({name: '', email: '', message: '', contactSent: true})
    });
  }

  render() {
    return (
      <div className="container-fluid text-center wrapper">
          {/* Header */}
        <div className="col-12">
          <div className="headerBorder">
            <header className="page-header" id="headerBar">
              <div>
                <h1 className="subHeader">Alex Berez</h1>
                <h3 className="subHeader">Web Design</h3>
              </div>
            </header>
          </div>
          {/*<PageTab
            name="About"
            id="showAbout"
            focus={this.state.showAbout ? "active btn btn-secondary" : "inactive btn btn-secondary"}
            selectView={this.selectView}
          />*/}
          <PageTab
            name="Gallery"
            id="showGallery"
            focus={this.state.showGallery ? "active btn btn-secondary" : "inactive btn btn-secondary"}
            selectView={this.selectView}
          />
          <PageTab
            name="Contact"
            id="showContact"
            focus={this.state.showContact ? "active btn btn-secondary" : "inactive btn btn-secondary"}
            selectView={this.selectView}
          />
        </div>
          {/* Portfolio Gallery */}
        {this.state.showGallery 
        ? 
          <div className="row galleryBody">
               {/* Main portfolio display */}
            <div className="order-1 order-lg-2 col-12 col-lg-8 galleryMain" id="mainDisplay">
              <div className="row">
                <GalleryDisplay
                  name={this.state.tiles[this.state.chosen].name}
                  image={this.state.tiles[this.state.chosen].image}
                  text={this.state.tiles[this.state.chosen].text}
                  link={this.state.tiles[this.state.chosen].link}
                  github={this.state.tiles[this.state.chosen].github}
                />
              </div>
            </div>        
              {/* Portfolio gallery side panel */}
            <div className="order-2 order-lg-1 col-12 col-lg-4 gallerySide">
              <div className="row">
                {this.state.tiles.map(tile => (
                  <GalleryTile
                    selectTile={this.selectTile}
                    key={tile.id}
                    id={tile.id}
                    image={tile.image_small}
                    chosen={this.state.chosen}
                  />
                ))}
              </div>
            </div>
          </div>
        : 
        this.state.showContact
        ?
          <div className="row">
            <div className="col-12">
              <Contact
                name={this.state.name}
                onNameChange={this.onNameChange}
                email={this.state.email}
                onEmailChange={this.onEmailChange}
                message={this.state.message}
                onMessageChange={this.onMessageChange}
                enable={this.state.enable}
                sendMail={this.sendMail}
                contactSent={this.state.contactSent}
              />
            </div>
          </div>
        :
          <div />
        }
          {/* Footer */}
          <div className="col-12 footerBar">
              <div className="logoDiv">
                <img src="/images/AWB_logo.svg" className="awbLogo" alt="logo"/>
                <h3 className="logoText">AWBdesign</h3>
              </div>
              <div className="container copy">
                <p>Copyright &copy; 2020 Alex Berez</p>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
