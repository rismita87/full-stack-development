function TodoRow(props) {
  return (
    <tr>
      <td>{props.description}</td>
      <td>{props.deadline}</td>
    </tr>
  );
}

export default TodoRow;
