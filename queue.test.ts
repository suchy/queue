import { describe, expect, it } from 'vitest';

import { Queue } from './queue';

describe('Queue', () => {
  it('should return empty queue', () => {
    const queue = Queue();
    expect(queue.length).toStrictEqual(0);
    expect(queue.front).toBeUndefined();
  });

  it('should return queue with elements', () => {
    const queue = Queue('lorem', 'ipsum');

    expect(queue.length).toStrictEqual(2);
    expect(queue.front).toBe('lorem');
  });

  describe('back', () => {
    it('should return back element from queue', () => {
      const queue = Queue('lorem', 'ipsum');
      expect(queue.back).toBe('ipsum');
    });

    it('should return undefined if queue is empty', () => {
      const queue = Queue();
      expect(queue.back).toBeUndefined();
    });
  });

  describe('dequeue', () => {
    it('should return an array with two elements: new queue without removed element and removed element', () => {
      const queue = Queue('lorem', 'ipsum');
      const [newQueue, removedElement] = queue.dequeue();

      expect(newQueue.length).toBe(1);
      expect(newQueue.front).toBe('ipsum');
      expect(removedElement).toBe('lorem');
    });

    it('should return an array with two elements: new queue and undefined if queue was empty', () => {
      const queue = Queue();
      const [newQueue, removedElement] = queue.dequeue();

      expect(newQueue.length).toBe(0);
      expect(newQueue.front).toBeUndefined();
      expect(removedElement).toBeUndefined();
    });
  });

  describe('enqueue', () => {
    it('should return new queue, with added element on the end of queue', () => {
      const queue = Queue('lorem');
      const updatedQueue = queue.enqueue('ipsum');

      const elements = updatedQueue.toArray();

      expect(elements[elements.length - 1]).toBe('ipsum');
      expect(updatedQueue.length).toBe(2);
    });

    it('should return stack', () => {
      const queue = Queue();
      const updatedQueue = queue.enqueue('lorem');

      expect(updatedQueue.length).toBe(1);
    });
  });

  describe('front', () => {
    it('should return front element from queue', () => {
      const queue = Queue('lorem', 'ipsum');
      expect(queue.front).toBe('lorem');
    });

    it('should return undefined if queue is empty', () => {
      const queue = Queue();
      expect(queue.front).toBeUndefined();
    });
  });

  describe('length', () => {
    it('should return 0 if queue is empty', () => {
      const queue = Queue();
      expect(queue.length).toBe(0);
    });

    it('should return number of queue elements', () => {
      const queue = Queue('lorem', 'ipsum', 'dolor');
      expect(queue.length).toBe(3);
    });
  });

  describe('toArray', () => {
    it('should return array of queue elements', () => {
      const queue = Queue('lorem', 'ipsum');
      const elements = queue.toArray();

      expect(elements).toStrictEqual(['lorem', 'ipsum']);
    });

    it('should return empty array if stack was empty', () => {
      const queue = Queue();
      const elements = queue.toArray();

      expect(elements).toStrictEqual([]);
    });
  });
});
