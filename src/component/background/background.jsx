import { arrayOf, shape, string } from 'prop-types';
import { Box, Panel, Button, Chevron } from '..';
import * as S from './background.style';

const Background = ({ section, goTo }) => {
  const { id, link, text, type, buttonList = [] } = section;
  return (
    <S.Background
      image={id}
      id={id}
    >
      <Panel
        text={text}
        title={type}
        link={link}
      />
      <Box gap='large'>
        <Box gap='small'>
          {buttonList.map((buttonText, key) => (
            <Button nuance={key}>{buttonText}</Button>
          ))}
        </Box>

        <Chevron
          id={id}
          goTo={goTo}
        />
      </Box>
    </S.Background>
  );
};

Background.defaultProps = {
  section: {
    id: '',
    link: '',
    text: '',
    type: '',
    buttonList: [],
  },
};

Background.propTypes = {
  section: shape({
    id: string.isRequired,
    link: string.isRequired,
    text: string.isRequired,
    type: string.isRequired,
    buttonList: arrayOf(string),
  }),
};

export default Background;
