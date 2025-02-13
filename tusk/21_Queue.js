//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 21) Создайте очередь , в которой будут реализованы операции на добавление элементов в конец очереди, удаление первого элемента и вычисление размера очереди с сложностью алгоритма 0(1)
// 1 решение
// нам нужно создавать объект с очередью и использовать индексы first и last (номера в  очереди - ключи объекта) для добавления и удаления
// в LinkedList обращай внимание что хвост(next) у #head будет расти, а #tail преобразуется в последний элемент очереди без хвоста
// Аналог очереди из в кофе
// enqueue // dequeue // size // printQueue
// {0:'Первый', 1:'Второй', 2:'Третий'}
// #head -> {"value": "Первый", "next": {"value": "Второй", "next": {"value": "Третий", "next": null}}}
// #tail -> {"value": "Третий", "next": null}




// const queue = new Queue();



// queue.enqueue('первый')
// queue.enqueue('второй')
// queue.enqueue('Третий')

// console.log(queue.dequeue()) 





// console.log(queue.size)
// console.log(queue.printQueue())





























// class Queue {
//   #storage = {}
//   #last = 0
//   #first = 0

//   enqueue(item) {
//     this.#storage[this.#last] = item
//     this.#last++
//   }

//   dequeue() {
//     if(this.size === 0) {
//       console.log('!!!')
//       return
//     }
//     const value = this.#storage[this.#first]
//     delete this.#storage[this.#first]
//     this.#first++
//     return value
//   }

//   get size() {
//     return this.#last - this.#first
//   }

//   printQueue() {
//     if (this.size === 0) {
//       console.log('Очередь пуста');
//       return;
//     }

//     let result = '';
//     for (let i = this.#first; i < this.#last; i++) {
//       result += this.#storage[i] + ' ';
//     }

//     console.log('Очередь:', result.trim());
//   }
// }

// const queue = new Queue();

// queue.enqueue('(первый)');
// queue.enqueue('(второй)');
// queue.printQueue()
// console.log('значение которые мы удалили из очереди', queue.dequeue());
// console.log('размер очереди', queue.size);

// class LinkedList {
//   #length = 0;
//   #head;
//   #tail;

//   addToTail(value) {
//     const node = {
//       value,
//       next: null,
//     };

//     if (this.#length === 0) {
//       this.#head = node;
//       this.#tail = node;
//     } else {
//       this.#tail.next = node;
//       this.#tail = node;
//     }
//     this.#length++;
//   }

//   removeFromHead() {
//     if (this.#length === 0) {
//       this.#tail = null;
//       return "!!!";
//     }
//     const value = this.#head.value;
//     this.#head = this.#head.next;
//     this.#length--;
//     return value;
//   }

//   size() {
//     return this.#length;
//   }

//   printQueue() {
//     let current = this.#head;

//     const result = [];

//     while (current) {
//       result.push(this.#head.value);
//       current = current.next;
//     }

//     return result.join(" ");
//   }
// }

// class Queue extends LinkedList {
//   constructor() {
//     super();
//     this.enqueue = this.addToTail;
//     this.dequeue = this.removeFromHead;
//   }

//   get size() {
//     return super.size();
//   }
// }

// const queue = new Queue();



// class Queue {

//   #length = 0;
//   #head;
//   #tail;

//   enqueue(value) {

//     const node = {
//       value,
//       next: null,
//     };

//     console.log('node', node)

//     if (this.#length === 0) {
//       this.#head = node;
//       this.#tail = node;
//     } else {
//       this.#tail.next = node;
//       this.#tail = node;
//     }

//     this.#length++;
//   }

//   dequeue() {
//     if (this.#length === 0) {
//       return;
//     }

//     const value = this.#head.value;
//     this.#head = this.#head.next;
//     this.#length--;
// 		if (this.#length === 0) {
// 			this.#tail = null;
// 		}
//     return value;
//   }

//   get size() {
//     return this.#length;
//   }
// }

// const queue = new Queue();

// queue.enqueue('(первый)');
// queue.enqueue('(Второй)');

// console.log('значение которые мы удалили из очереди', queue.dequeue());
// console.log('значение которые мы удалили из очереди', queue.dequeue());
// console.log('размер очереди', queue.size);
