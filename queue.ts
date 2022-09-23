export interface Queue<T> {
  back?: T;
  dequeue: () => [Queue<T>, T | undefined];
  enqueue: (element: T) => Queue<T>;
  front?: T;
  length: number;
  toArray: () => T[];
}

export function Queue<T>(...elements: T[]) {
  const queueElements = Object.freeze(elements);

  const queue: Queue<T> = {
    get back() {
      return queueElements.at(-1);
    },

    dequeue() {
      const updatedElements = [...elements];
      const removedElement = updatedElements.shift();

      return [Queue(...updatedElements), removedElement];
    },

    enqueue(element) {
      const updatedElements = [...elements];
      updatedElements.push(element);
      return Queue(...updatedElements);
    },

    get front() {
      return queueElements[0];
    },

    get length() {
      return queueElements.length;
    },

    toArray() {
      return [...queueElements];
    }
  };

  return queue;
}
