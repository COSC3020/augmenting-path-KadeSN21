# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case $\Theta$ complexity of this implementation is $\Theta (E + V)$ with E being the edges in the graph, and V being the verticies. My implementation uses a breadth first search to traverse the graph with a queue and a "visited" set, this itterates through the verticies within the graph, as well as their "neighbor" verticies until it discovers the target vertex. $\Theta (E + V)$ would become the case when the algorithm has to itterate through all of the verticies, as well as all the edges of the graph in order to find the end vertex. 
Help: Class videos on graph algorithms. I needed a way to traverse the graph in an efficent manner, I landed on bfs (breadth first search) which I learned more about here: https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
