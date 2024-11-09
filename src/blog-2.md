        **asynchronous operations using async/await over callback/promise TypeScript.**

Asynchronous meaning us simply not serialwise.We know javascript code normally run serialwise. But when we have an operation which take times then all others operations will be block.There have come the concept asynchronous programming. Where programming will run synchronously but when come long time processing then javascript won't wait there it go forward and give the asyncbronous task to event loop and event loop take it in his queue.Thats how asynchronous programming concept run.

Previous time asynchronous program handle by callback function.Where setup a function then in this function sent callback for doing asyncronous programming. Where run one function after another function.
But there a issues come which is callback which is tough to handle in messy callback.

For solving this issue come "then catch" system.Where we can setup asyncronous program one after one inside then block. Every then block return a promise which can resolve or reject.Promise is mainly a object which have property resolve and reject.By doing this things asyncronous porgam handled.

Modern javascript come with more modern features which are async await.It only can use in a function which have async keyword.In a function if we add a async keyword then it will be a asynchronous function and in this function we can do asynchronous program.

Thats how mainly asyncronous program and promise concept run.
