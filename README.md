**Topic-Queue Chaining & Load Balancing Pattern**

Using a queue that acts as a buffer between the service from which it was called from asynchronous invocations. By this way we can avoid loss data if the service to fail or the task to time out. This can help minimize the impact of peaks in demand on availability and responsiveness for the consumer microservice.
Topic-Queue Chaining & Load Balancing Pattern
Using a queue that acts as a buffer between the service from which it was called from asynchronous invocations. By this way we can avoid loss data if the service to fail or the task to time out. This can help minimize the impact of peaks in demand on aSo We will use;

AWS SQS -for- Decouple Microservices and processing events asynchronously using queues
We will develop AWS SQS with Lambda Ordering microservices which consumes by polling the event from the sqs queue.

1) Create an SQS queue
2) Lambda function to add the details to queue
3) Lambda function to dequeue from the queue using event source mapping



