export default function View({ list, handleIncrement }) {

  return (
    <>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.count}
            <button onClick={() => handleIncrement(item.id)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  )
}