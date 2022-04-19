import React from 'react';
import { render } from 'react-dom';
import Description from './components/Description/Description';

const Description = () => (
  <div>
    <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
    <p>This app will help you track your time and inform you when it's time to rest.</p>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'off',
      time: 1200,
      timer: null,
    }
  };

  formatTime(time) {
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)

    let mm;
    let ss;

    if (min <= 9) {
      mm = '0' + min;
    } else {
      mm = min;
    }
    if (sec <= 9) {
      ss = '0' + sec;
    } else {
      ss = sec;
    }
    return `${mm}:${ss}`
  };

  startTimer() {
    this.
    this.setState({ time: 1200 });
    this.setState({ status: 'work' });
  }

  step() {

  }

  render() {
    const { status, time } = this.state;
    console.log(status);
    
    return (
      <div>
        <h1>Protect your eyes</h1>
        {status === 'off' && <Description />}
        {status === 'work' && <img src="./images/work.png" />}
        {status === 'rest' && <img src="./images/rest.png" />}
        {status !== 'off' &&
          <div className="timer">
            {this.formatTime(time)}
          </div>
        }
        {status === 'off' && <button className="btn" onClick={() => this.startTimer()}>Start</button>}
        {status !== <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
