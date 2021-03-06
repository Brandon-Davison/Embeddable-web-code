import WebsiteModal from '../WebsiteModal/WebsiteModal';

const React = require('react')
const ms = require('pretty-ms')

class TimerTrigger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
       // let id = "";

      }


      tick() {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
      }

      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
     //   id = props.id
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      render() {
          let survey = (this.state.seconds >= this.props.timerLength) ? <WebsiteModal id={this.props.id}></WebsiteModal> : null

        return (
          <div>
            Seconds: {this.state.seconds}
            {survey}
          </div>
        );
      }
}

export default TimerTrigger;