export default function Person({ name, profession, accomplishment, imageId, isGood }) {
  return (
    <div>
      <p>{name}</p>
      <p>{profession} {isGood ? "Good" : null}</p>
      <p>{accomplishment}</p>
      <p>{imageId}</p>
    </div >
  )
}