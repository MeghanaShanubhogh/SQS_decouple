**Topic-Queue Chaining & Load Balancing Pattern**

Using a queue that acts as a buffer between the service from which it was called from asynchronous invocations. By this way we can avoid loss data if the service to fail or the task to time out. This can help minimize the impact of peaks in demand on availability and responsiveness for the consumer microservice.
Topic-Queue Chaining & Load Balancing Pattern
Using a queue that acts as a buffer between the service from which it was called from asynchronous invocations. By this way we can avoid loss data if the service to fail or the task to time out. This can help minimize the impact of peaks in demand on aSo We will use;

AWS SQS -for- Decouple Microservices and processing events asynchronously using queues
We will develop AWS SQS with Lambda Ordering microservices which consumes by polling the event from the Ordering queue.

We use Event Source Mapping for Polling event messages in Ordering Lambda microservices. In a polling event, consumers poll the producer for messages in batches and then process the batch before returning for a new batch of records.

Before we applied the Serverless Patterns, let’s design our enterprise E-Commerce application with fully Serverless Event-driven Microservices Architecture.vailability and responsiveness for the consumer microservice.
