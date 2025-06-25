from collections import deque

# Queue using deque
queue = deque()
queue.append(1)
queue.append(2)
queue.append(3)
print("Dequeued:", queue.popleft())  # FIFO
print("Queue:", list(queue))

