import { Item } from './item';
import { List } from './list';

function shuffle(list) {
    list.sort((a, b) => Math.random() - 0.5);
    return list;
}

function randomPick(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function randomChop(list) {
    const alpha = 0.5;
    const index = Math.floor((alpha + (1 - alpha) * Math.random()) * list.length);
    return list.slice(0, index);
}

function buildSampleList(): List {
    const itemTitles = ['foo', 'bar', 'baz', 'qux', 'quux'];
    const listTitles = ['Foobar', 'Barfoo', 'Foobaz', 'Barbaz', 'Fooqux', 'Barqux'];

    const listTitle = randomPick(listTitles);
    const items = itemTitles.map(itemTitle => new Item(itemTitle))
    return { title: listTitle, items: shuffle(randomChop(items)) };
}

export function generateRandomLists(min, max): List[] {
  const LIST_COUNT = min + Math.floor((1 + max - min) * Math.random());
  return Array.from(new Array(LIST_COUNT), buildSampleList);
}

