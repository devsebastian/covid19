import React from 'react';
import './App.css';
import Container from './comps/container/container'

const languages = ["English", "Hindi", "Malayalam"]
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      language: languages[0],
      languagesAreVisible: false
    }
    this.setLanguage = this.setLanguage.bind(this);
    this.toggleLanguagesAreVisible = this.toggleLanguagesAreVisible.bind(this);
  }

  setLanguage(pos) {
    this.setState({ language: languages[pos] })
    this.toggleLanguagesAreVisible();
  }

  toggleLanguagesAreVisible() {
    this.setState(oldState => {
      return { languagesAreVisible: !oldState.languagesAreVisible }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="language-selector" onClick={this.toggleLanguagesAreVisible}>{"Select Language > " + this.state.language}</div>
        {this.state.languagesAreVisible && <div className="language-list">
          {languages.map((lang, pos) => <div key={pos} className="language-item" onClick={(e) => this.setLanguage(pos)}>{lang}</div>)}
        </div>}
        <div className="credits"><a href="https://github.com/devsebastian">App Developed by <font color="#3cb4e0">Dev Sebastian</font></a></div>
        <Container language={this.state.language.toLowerCase()} />
      </div>
    );
  }
}


export default App;
