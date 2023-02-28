import Person from "./Person";
import { people } from './data.js';

export default function People() {

  let peopleElem = people.map(person => {
    < Person person={person} key={person.id} />
  })

  return (
    <>
      {peopleElem}
    </>
  )
}