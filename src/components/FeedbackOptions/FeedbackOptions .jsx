import { ButtonFeedback, ButtonsList } from './FeedbackOptions.styled';

export const ButtonList = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <li key={option}>
            <ButtonFeedback
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </ButtonFeedback>
          </li>
        );
      })}
    </ButtonsList>
  );
};
