class List<T> {
  value: T;
  next: List<T> | null;
  constructor(data: T) {
    this.value = data;
    this.next = null;
  }
}
// circular linkedlist: when tail has next value from head
class LinkedList<T> {
  head: List<T> | null;
  constructor() {
    this.head = null;
  }

  append(value: T): void {
    const newList = new List(value);

    if (this.head === null) {
      this.head = newList;
      return;
    }
    let current = this.head;

    while (current.next && current.next !== this.head) {
      current = current.next;
    }
    current.next = newList;
    newList.next = this.head;
  }
  prepend(value: T) {
    const newList = new List(value);
    if (!this.head) this.head = newList;
    else {
      let newNext = this.head;
      this.head = newList;
      newNext.next = this.head;
      this.head.next = newNext;
    }
  }
  remove(value: T) {
    if (!this.head) return null;
    else {
      let current = this.head;
      let prev = this.head;
      while (current.value !== value) {
        if (current.next && current.next !== this.head) {
          prev = current;
          current = current.next;
        } else {
          return null;
        }
      }
      prev.next = current.next;
    }
  }

  reverse(): void {
    if (!this.head || this.head.next || this.head.next === this.head) return;
    let prev: List<T> | null = null;
    let current: List<T> | null = this.head;
    let next: List<T> | null = null;
    let tail = this.head;

    do {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    } while (current !== this.head && current?.next);
    tail.next = prev;
    this.head = prev;
  }
  getList() {
    return this.head;
  }

  getLength() {
    if (!this.head) return 0;
    else {
      let current = this.head;
      let count = 1;
      while (current.next && current.next !== this.head) {
        current = current.next;
        count++;
      }
      return count;
    }
  }
}
export default function linkedList() {
  console.log("linkedlist");
  const linked = new LinkedList();
  // linked.prepend(2);
  // linked.prepend(5);
  // linked.append(3);
  linked.append(4);
  linked.append(6);
  linked.append(8);
  //   linked.prepend(7);
  //   linked.append(9);
  console.log(linked.reverse());
}
