// makes global.Reflect available
import 'reflect-metadata'

const plane = {
  color: 'red'
};

// defines metadata of note: 'hit there' to plane.note
Reflect.defineMetadata('note', 'hi there', plane)

// defines metadata of note: 'hit there' to plane.note.color
Reflect.defineMetadata('note', 'hi there', plane, 'color')


// fetches metadata value plane.note
const note = Reflect.getMetadata('note', plane);

// returns value attached to keys metadataKey + metadataValue key
console.log(note)