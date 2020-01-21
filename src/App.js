import React, { Component } from "react";
import PageTab from "./components/PageTab";
import Contact from "./components/Contact"
import GalleryDisplay from "./components/GalleryDisplay";
import GalleryTile from "./components/GalleryTile";
import galleryItems from "./galleryItems.json";
import "./App.css";

class App extends Component {

  state = { 
    chosen: 0,
    showGallery: true,
    showAbout: false,
    showContact: false
  }

  UNSAFE_componentWillMount() { this.setState({ tiles: this.tileMaker() }); }

  tileMaker = () => {
    let tiles = [];
    for (let i = 0; i < galleryItems.length; i++) {
      let tile = {  "id": i, 
                    "name": galleryItems[i].name, 
                    "image": galleryItems[i].image, 
                    "text": galleryItems[i].text, 
                    "link": galleryItems[i].link, 
                    "github": galleryItems[i].github
                  };
      tiles.push(tile);
    }
    return tiles;
  }

  selectTile = id => { this.setState({chosen: id}, () => { document.getElementById("headerBar").scrollIntoView(); } );}

  selectView = id => { this.setState({showAbout: false, showGallery: false, showContact: false}, () => { this.setState({[id]: true}); } );}

  sendMail = content => {

  }

  render() {
    return (
      <div className="container-fluid text-center wrapper">
          {/* Header */}
        <div className="col-12">
          <header className="page-header" id="headerBar">
            <div>
              <h1 className="subHeader">Alex Berez</h1>
              <h3 className="subHeader">Web Design Portfolio</h3>
            </div>
          </header>
          {/*<PageTab
            name="About"
            id="showAbout"
            focus={this.state.showAbout ? "active btn btn-secondary" : "inactive btn btn-secondary"}
            selectView={this.selectView}
          />
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
          />*/}
        </div>
          {/* Portfolio Gallery */}
        {this.state.showGallery 
        ? 
          <div className="row galleryBody">
               {/* Main portfolio display */}
            <div className="order-1 order-lg-2 col-12 col-lg-8 galleryMain">
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
                    image={tile.image}
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
                sendMail={this.SendMail}
              />
            </div>
          </div>
        :
          <div />
        }
          {/* Footer */}
 
          <div className="col-12 footerBar">
            <footer className="py-5">
              <div className="logoDiv">
                <img src="/images/AWB_logo.svg" className="awbLogo" alt="logo"/>
                <h3 className="logoText">AWBdesign</h3>
              </div>
              <div className="container copy">
                <p>Copyright &copy; 2019 Alex Berez</p>
              </div>
            </footer>
          </div>

      </div>
    );
  }
}

export default App;
