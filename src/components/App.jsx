import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import { Div, AppContainer } from './App.styled.jsx';
import Notification from "./Notification";

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (count, acc) => count + acc,
      0
    );
    return total;
 };
  
 countPositiveFeedbackPercentage = () => {
    const positiveFeedbacks = Math.floor(
      (this.state.Good / this.countTotalFeedback()) * 100
    );
    return positiveFeedbacks;
  };



  render() {
    const { Good, Neutral, Bad } = this.state;
    return (
      <AppContainer>
      <Div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={this.countTotalFeedback()}
              posFeedbacks={this.countPositiveFeedbackPercentage()}
            />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </Div>
      </AppContainer>
    );
  }
}


  

  
  
        
        





 
        

