export default function Person(props) {
  return (
    <div>
      <span>{props.id}</span>
      <span>{props.name}</span>
      <span>{props.proffession}</span>
      <span>{props.accomplishment}</span>
      <span>{props.imageId}</span>
    </div>
  )
}