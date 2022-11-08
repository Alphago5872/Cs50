import '../style/Dropdown.scss';

const Dropdown_option = (props) => {
  return (
    <div className='dropdown'>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
};

export default Dropdown_option;
