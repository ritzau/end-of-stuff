import { Item } from './item';

export class List {
    title: string;
    items: Item[];
}

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

export function buildSampleList(): List {
    const itemTitles = ['foo', 'bar', 'baz', 'qux', 'quux'];
    const listTitles = ['Foobar', 'Barfoo', 'Foobaz', 'Barbaz', 'Fooqux', 'Barqux'];

    const listTitle = randomPick(listTitles);
    const items = itemTitles.map(itemTitle => new Item(itemTitle))
    return { title: listTitle, items: shuffle(randomChop(items)) };
}
