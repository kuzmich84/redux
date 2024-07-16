import { v4 as uuidv4 } from 'uuid';

export default function createBookWithID(book) {
  return { ...book, isFavorite: false, id: uuidv4() };
}
