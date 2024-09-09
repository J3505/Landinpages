import PropTypes from 'prop-types';
const Card1 = ({title,description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};
Card1.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
export default Card1

