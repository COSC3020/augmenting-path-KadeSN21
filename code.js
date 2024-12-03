function augmentingPath(graph, start, end) {
  if (start == end){
    return [start]
  }

  function bfs(graph, start, end, parent) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);

    while (queue.length > 0) { 
      let current = queue.shift();
      for (let neighbor in graph[current]) {
        if (!visited.has(neighbor) && graph[current][neighbor] > 0) { 
          visited.add(neighbor);
          queue.push(neighbor);
          parent[neighbor] = current; 
          if (neighbor === end) {
            return true; 
          }
        }
      }
    }

    return false;
  }

  function reconstructPath(parent, start, end) { 
    let path = [];
    let current = end;
    while (current !== undefined) {
      path.unshift(current);
      current = parent[current];
    }
    return path[0] === start ? path : []; 
  }

  let parent = {};
  if (bfs(graph, start, end, parent)) {
    return reconstructPath(parent, start, end);
  }
  return []; 
}
