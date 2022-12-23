const Paragraph = (props) => {
  return (
    <p>
      This web is made by {props.name} from {props.place} on {props.date}
    </p>
  );
};

export default Paragraph
