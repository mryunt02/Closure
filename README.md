Understanding Closure: <br/>
assume we have a function named outer, which contains a variable called counter and a callback function named incrementCounter.
how can we acces the counter globally? <br/>
Here, it reminds us Closures, and its usage is as illustrated in the visuals.
<img src="https://github.com/mryunt02/Closure/assets/90159617/2827c437-10fa-4ada-847b-a8a7d42e3e53" />

and after that we can use debugger to see we have access to counter globally: <br/>
in first myNewFunction() increment counter 0 to 1;
and second myNewFunction() increment counter 1 to 2; <br/>
<img src="https://github.com/mryunt02/Closure/assets/90159617/3f1bb774-1d03-404b-b261-1e14a7969d3f" /> <br/>

JavaScript let's us use web browser features like console, Network Request(fetch), HTML DOM (document), Timer(setTimeout):


<img src="https://github.com/mryunt02/Closure/assets/90159617/dd31fedb-b016-4d24-a752-3ac105e7a43c" /> <br/>
what do you think the print? The print is:<br/>
<img src="https://github.com/mryunt02/Closure/assets/90159617/9312c160-0159-4134-89d3-b073b5f8a7f2" />
Because setTimeout operates asynchronously. It moves to the next line of code without waiting for its own block to be executed, and after the specified time elapses, it executes its own block.
