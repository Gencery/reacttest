import Person from "./Person";
import { people } from './data.js';

export default function People() {

  let peopleElem = people.map(person => (
    <li key={person.id}>
      < Person {...person} />
    </li>
  ))

  return (
    <ol>
      {peopleElem}
    </ol>
  )
}