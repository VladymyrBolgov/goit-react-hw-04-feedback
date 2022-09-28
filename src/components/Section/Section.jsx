import { Div, H2 } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Div>
       {title ? <H2>{title}</H2> : ''}
      {children}
    </Div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;