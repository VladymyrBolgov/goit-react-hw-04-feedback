import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import { Div, AppContainer } from './App.styled.jsx';
import Notification from "./Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
const onLeaveFeedback = name => {
  switch (name) {
    case 'good':
      setGood(s => s + 1);
      break;
      case 'neutral':
        setNeutral(s => s + 1);
      break;
      case 'bad':
        setBad(s => s + 1);
      break;
    default:
      return;
 }
  };

const countTotalFeedback = () => {
  const total = good + neutral + bad;
    return total;
 };
  
const countPositiveFeedbackPercentage = () => {
    const posFeedbacks = Math.floor(
      (good / countTotalFeedback()) * 100
    );
    return posFeedbacks;
  };

    return (
      <AppContainer>
      <Div>
        <Section title="Please leave feedback">
          <FeedbackOptions
              options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              posFeedbacks={countPositiveFeedbackPercentage()}
            />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </Div>
      </AppContainer>
    );
  }



  

  
  
        
        





 
        

