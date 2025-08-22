// System Design Complete Reference Guide Application

// Comprehensive data structure with different content formats for each category
const systemDesignData = {
  // ARCHITECTURAL PATTERNS - Full detailed structure with images
  architectural_patterns: {
    'client-server': {
      title: 'Client-Server Architecture',
      image: 'https://user-images.githubusercontent.com/placeholder/client-server-diagram.png',
      introduction: "Client-Server architecture is the foundational pattern of distributed computing where clients initiate requests for services or resources, and servers provide those services in response. This model creates a clear separation of concerns between the presentation layer (client) and the business logic/data management layer (server), forming the backbone of most web and enterprise applications.",
      core_concepts: [
        "Request-Response Communication: Clients send requests to servers using standardized protocols like HTTP/HTTPS, TCP/IP, or domain-specific protocols",
        "Separation of Concerns: Clear division between client-side presentation logic and server-side business logic and data management",
        "Centralized Control: Servers manage resources, enforce security policies, and coordinate access to shared data",
        "Stateful vs Stateless: Servers can maintain session state or treat each request independently",
        "Load Balancing: Distribution of client requests across multiple server instances for improved performance and reliability"
      ],
      strengths: [
        "Simple Architecture: Easy to understand, implement, and maintain with well-established patterns",
        "Centralized Control: Simplified governance, security implementation, and system updates",
        "Predictable Performance: Clear performance characteristics enable effective caching and scaling strategies",
        "Protocol Flexibility: Support for various communication protocols (HTTP/HTTPS, gRPC, custom protocols)",
        "Mature Ecosystem: Extensive tooling, frameworks, and best practices available"
      ],
      limitations: [
        "Single Point of Failure: Server tier can become a bottleneck or failure point if not properly architected",
        "Scaling Challenges: Server capacity limitations require careful planning and complex scaling strategies",
        "Network Dependency: Client functionality depends on network connectivity to servers",
        "Resource Utilization: Servers may be underutilized during low-traffic periods",
        "Tight Coupling: Changes to server APIs can impact multiple clients simultaneously"
      ],
      design_considerations: [
        "Load Balancing Strategy: Choose appropriate L4/L7 load balancers and distribution algorithms",
        "Caching Implementation: Multi-level caching including client-side, CDN, and server-side reverse proxies",
        "Security Measures: TLS encryption, authentication/authorization, input validation, and threat mitigation",
        "Database Design: Optimize for concurrent access, implement connection pooling, and consider read replicas",
        "Monitoring and Observability: Implement comprehensive logging, metrics, and health checks"
      ],
      when_to_use: [
        "Web Applications: Traditional web apps, e-commerce sites, content management systems",
        "CRUD Systems: Applications with straightforward create, read, update, delete operations",
        "Administrative Tools: Internal business applications requiring centralized control",
        "Database-Centric Applications: Systems where data consistency and centralized management are critical",
        "Small to Medium Scale: Projects with predictable load patterns and single-team development"
      ]
    },

    'microservices': {
      title: 'Microservices Architecture',
      image: 'https://user-images.githubusercontent.com/placeholder/microservices-diagram.png',
      introduction: "Microservices architecture decomposes monolithic applications into a suite of small, independently deployable services, each focused on specific business capabilities. This approach enables organizations to achieve greater agility, scalability, and team autonomy while leveraging modern container technologies and DevOps practices to manage the inherent complexity of distributed systems.",
      core_concepts: [
        "Service Decomposition: Breaking applications into small, focused services aligned with business capabilities",
        "Independent Deployment: Each service can be developed, tested, and deployed independently",
        "Database Per Service: Each service owns its data and database, preventing tight coupling",
        "Service Mesh: Infrastructure layer managing service communication, security, and observability",
        "API-First Design: Services communicate through well-defined APIs, typically REST or gRPC"
      ],
      strengths: [
        "Team Autonomy: Small teams can own services end-to-end, enabling faster development cycles",
        "Independent Scaling: Services can be scaled independently based on specific requirements",
        "Technology Diversity: Teams can choose optimal technology stacks for their service needs",
        "Fault Isolation: Failures in one service don't necessarily impact other services",
        "Continuous Deployment: Independent deployments enable faster feature delivery and updates"
      ],
      limitations: [
        "Operational Complexity: Requires sophisticated DevOps practices, monitoring, and orchestration",
        "Distributed System Challenges: Network latency, partial failures, and eventual consistency",
        "Service Discovery: Complex service location and communication management",
        "Testing Complexity: Integration testing across multiple services becomes challenging",
        "Data Consistency: Managing transactions across service boundaries requires careful design"
      ],
      design_considerations: [
        "Service Boundaries: Use domain-driven design to identify appropriate service boundaries",
        "Communication Patterns: Choose between synchronous (REST/gRPC) and asynchronous (messaging) communication",
        "Data Management: Implement patterns like Saga for distributed transactions and CQRS for read/write separation",
        "Container Orchestration: Use Kubernetes or similar platforms for deployment and scaling",
        "Observability: Implement distributed tracing, centralized logging, and comprehensive monitoring"
      ],
      when_to_use: [
        "Large Applications: Complex domains with multiple business capabilities requiring independent evolution",
        "Multi-Team Development: Organizations with multiple teams needing autonomous development cycles",
        "Scalability Requirements: Applications with varying scaling needs across different components",
        "Technology Diversity: Projects benefiting from different technology stacks for different services",
        "Rapid Innovation: Environments requiring fast feature delivery and independent service updates"
      ]
    },

    'serverless': {
      title: 'Serverless Architecture',
      image: 'https://user-images.githubusercontent.com/placeholder/serverless-diagram.png',
      introduction: "Serverless architecture represents a paradigm shift in cloud computing where developers focus solely on writing business logic while cloud providers manage all infrastructure concerns. This approach eliminates server provisioning, scaling, and maintenance responsibilities, enabling rapid development and automatic cost optimization based on actual usage through Function as a Service (FaaS) and managed backend services.",
      core_concepts: [
        "Function as a Service (FaaS): Applications decomposed into stateless functions that execute on-demand",
        "Event-Driven Execution: Functions triggered by specific events like HTTP requests, database changes, or scheduled timers",
        "Automatic Scaling: Platform automatically scales functions from zero to thousands of concurrent executions",
        "Pay-Per-Use: Billing based on actual execution time and requests, eliminating idle resource costs",
        "Managed Services: Integration with fully managed databases, APIs, and other backend services"
      ],
      strengths: [
        "Zero Infrastructure Management: No server provisioning, patching, or maintenance required",
        "Automatic Scaling: Elastic scaling handles traffic spikes without capacity planning",
        "Cost Efficiency: Pay only for actual usage, ideal for variable or unpredictable workloads",
        "Faster Time-to-Market: Focus on business logic rather than infrastructure concerns",
        "Built-in Reliability: Platform handles availability, fault tolerance, and disaster recovery"
      ],
      limitations: [
        "Cold Start Latency: Initial execution delay when functions haven't been used recently",
        "Execution Limits: Time, memory, and payload size constraints on function execution",
        "Vendor Lock-in: Tight coupling with cloud provider services and proprietary APIs",
        "Debugging Complexity: Challenging to debug and test distributed, ephemeral functions",
        "Cost Unpredictability: Costs can become high for consistent, high-volume workloads"
      ],
      design_considerations: [
        "Function Design: Keep functions small, stateless, and focused on single responsibilities",
        "State Management: Externalize state to databases, caches, or storage services",
        "Cold Start Optimization: Minimize function size, dependencies, and initialization time",
        "Error Handling: Implement robust retry logic, dead letter queues, and idempotent processing",
        "Security: Apply least privilege principles, secure API endpoints, and manage secrets properly"
      ],
      when_to_use: [
        "Event-Driven Workloads: Applications responding to real-time events and triggers",
        "Variable Traffic: Applications with unpredictable or spiky traffic patterns",
        "Background Processing: Batch jobs, data processing pipelines, and scheduled tasks",
        "API Development: Lightweight APIs and microservices with simple business logic",
        "Rapid Prototyping: Quick development of MVPs and experimental features"
      ]
    },

    'event-driven': {
      title: 'Event-Driven Architecture',
      image: 'https://user-images.githubusercontent.com/placeholder/event-driven-diagram.png',
      introduction: "Event-Driven Architecture (EDA) fundamentally changes how systems communicate by centering interactions around events—immutable records of significant occurrences that trigger responses across distributed systems. This paradigm enables real-time responsiveness, loose coupling, and scalable system designs that react to business events as they happen, often using message brokers and stream processing platforms.",
      core_concepts: [
        "Events as First-Class Citizens: Immutable records of significant occurrences with timestamp and context data",
        "Publish-Subscribe Pattern: Producers publish events without knowing consumers; subscribers receive relevant events",
        "Asynchronous Communication: Decoupled, non-blocking communication between system components",
        "Event Streaming: Ordered, immutable logs of events that can be replayed and processed by multiple consumers",
        "Message Brokers: Intermediary services that handle event routing, filtering, and delivery guarantees"
      ],
      strengths: [
        "Loose Coupling: Components interact through events without direct dependencies",
        "Real-Time Processing: Immediate response to business events as they occur",
        "Scalability: Independent scaling of event producers and consumers",
        "Resilience: Event persistence enables replay and recovery from failures",
        "Flexibility: Easy addition of new event consumers without modifying producers"
      ],
      limitations: [
        "Eventual Consistency: Asynchronous processing leads to temporary data inconsistencies",
        "Complexity: Requires sophisticated event modeling, ordering, and error handling",
        "Debugging Challenges: Difficult to trace event flows across distributed components",
        "Event Versioning: Managing schema evolution and backward compatibility",
        "Operational Overhead: Requires robust messaging infrastructure and monitoring"
      ],
      design_considerations: [
        "Event Schema Design: Define clear, versioned event schemas with backward compatibility",
        "Message Broker Selection: Choose appropriate brokers (Kafka, RabbitMQ, cloud-native services)",
        "Delivery Guarantees: Decide on at-least-once, at-most-once, or exactly-once delivery semantics",
        "Event Ordering: Implement partitioning strategies for events that require ordered processing",
        "Error Handling: Design dead letter queues, retry policies, and compensation logic"
      ],
      when_to_use: [
        "Real-Time Analytics: Systems requiring immediate processing of data streams",
        "IoT Applications: Processing high-volume sensor data and telemetry",
        "Financial Systems: Trading platforms, payment processing, and fraud detection",
        "E-commerce: Order processing, inventory management, and customer notifications",
        "Integration Scenarios: Connecting disparate systems with minimal coupling"
      ]
    },

    'peer-to-peer': {
      title: 'Peer-to-Peer (P2P) Architecture',
      image: 'https://user-images.githubusercontent.com/placeholder/p2p-diagram.png',
      introduction: "Peer-to-Peer (P2P) architecture eliminates the traditional client-server hierarchy by creating networks where each node acts simultaneously as both client and server, sharing resources directly with other peers. This decentralized approach provides unique advantages in terms of scalability, fault tolerance, and resistance to centralized control or failure, commonly used in file sharing, blockchain, and distributed content systems.",
      core_concepts: [
        "Decentralization: No central authority or single point of control in the network",
        "Resource Sharing: Direct sharing of computing power, storage, bandwidth, or content between peers",
        "Distributed Hash Tables (DHTs): Structured systems for efficient resource location across the network",
        "Peer Discovery: Mechanisms for finding and connecting to other peers in the network",
        "Self-Organization: Network topology emerges from peer interactions without central coordination"
      ],
      strengths: [
        "High Fault Tolerance: No single point of failure; network continues functioning as peers leave",
        "Natural Scalability: Network capacity increases as more peers join",
        "Cost Distribution: Resource costs shared among all participants",
        "Censorship Resistance: Difficult to shut down or control due to decentralized nature",
        "Global Reach: Can span geographic boundaries without infrastructure investment"
      ],
      limitations: [
        "Complex Routing: Efficient resource discovery requires sophisticated algorithms",
        "Security Challenges: Difficult to establish trust and prevent malicious behavior",
        "NAT Traversal: Connectivity issues with peers behind firewalls and NAT devices",
        "Heterogeneous Performance: Network performance varies with peer capabilities and availability",
        "Content Availability: Resources may become unavailable when hosting peers go offline"
      ],
      design_considerations: [
        "DHT Implementation: Choose appropriate DHT algorithm (Kademlia, Chord, Pastry) for network structure",
        "Incentive Mechanisms: Design systems to encourage resource sharing and prevent free-riding",
        "Security Measures: Implement reputation systems, content verification, and Sybil attack prevention",
        "Network Connectivity: Address NAT traversal through techniques like hole punching and relay nodes",
        "Data Replication: Ensure content availability through strategic data replication across peers"
      ],
      when_to_use: [
        "File Sharing: Large-scale content distribution without centralized infrastructure",
        "Blockchain Applications: Decentralized ledgers and cryptocurrency networks",
        "Content Distribution: Alternative CDN systems leveraging user resources",
        "Communication Systems: Decentralized messaging and VoIP applications",
        "Collaborative Computing: Distributed processing and resource sharing applications"
      ]
    }
  },

  // KEY CONCEPTS - Concept-focused structure
  key_concepts: {
    'scalability': {
      title: 'Scalability',
      definition: "Scalability refers to a system's ability to handle increasing workloads by adding resources to accommodate growth. It's a fundamental system design concept that determines whether applications can maintain performance and availability as user demand, data volume, or transaction frequency increases over time.",
      how_it_works: [
        "Horizontal Scaling (Scale-Out): Adding more servers or instances to distribute load across multiple machines, enabling linear capacity growth",
        "Vertical Scaling (Scale-Up): Increasing resources (CPU, RAM, storage) on existing servers to handle more load within the same infrastructure",
        "Elastic Scaling: Automatic addition or removal of resources based on real-time demand patterns and predefined thresholds",
        "Load Distribution: Spreading requests across multiple servers using load balancers, routing algorithms, and geographic distribution",
        "Resource Optimization: Efficient utilization of computing resources through caching, database optimization, and algorithmic improvements"
      ],
      benefits: [
        "Performance Maintenance: Systems can handle increased load without degrading user experience or response times",
        "Cost Efficiency: Horizontal scaling can be more cost-effective than continuously upgrading high-end hardware",
        "Business Growth Support: Scalable architectures can adapt to business growth and changing market demands",
        "Fault Tolerance: Distributed systems provide better resilience against individual component failures",
        "Global Reach: Enables serving users across different geographic regions with consistent performance"
      ],
      challenges: [
        "Architectural Complexity: Distributed systems introduce operational and design complexity that must be carefully managed",
        "Data Consistency: Maintaining consistency across scaled systems becomes challenging, especially with distributed databases",
        "Network Dependencies: Horizontal scaling increases reliance on network communication and introduces latency considerations",
        "Cost Management: Poor scaling strategies can lead to resource waste and exponentially increasing expenses",
        "State Management: Stateful applications are harder to scale than stateless ones, requiring careful session management"
      ],
      implementation: [
        "Load Balancer Implementation: Deploy Layer 4 or Layer 7 load balancers to distribute traffic across multiple instances",
        "Database Sharding: Partition data across multiple database servers to distribute load and storage requirements",
        "Caching Strategies: Implement multi-level caching (application, database, CDN) to reduce backend load",
        "Microservices Architecture: Break monolithic applications into independently scalable services",
        "Auto-scaling Configuration: Set up cloud auto-scaling groups with appropriate metrics and thresholds"
      ],
      examples: [
        "Netflix: Uses microservices and cloud auto-scaling to handle millions of concurrent streams worldwide",
        "Amazon: Employs horizontal scaling across data centers to manage peak shopping traffic during events like Black Friday",
        "Facebook: Utilizes database sharding and CDN networks to serve billions of users with personalized content",
        "Uber: Implements geographic sharding and real-time scaling to handle varying demand across different cities and times"
      ]
    },

    'availability': {
      title: 'Availability',
      definition: "Availability refers to the percentage of time a system is operational and accessible to users. It's typically measured as uptime divided by total time, expressed as a percentage (e.g., 99.9% uptime). High availability is crucial for business-critical systems where downtime results in revenue loss, user dissatisfaction, or safety concerns.",
      how_it_works: [
        "Redundancy: Multiple instances of critical components eliminate single points of failure and provide backup options",
        "Failover Mechanisms: Automatic switching to backup systems when primary components fail, minimizing service interruption",
        "Health Monitoring: Continuous monitoring of system components with automated alerts and recovery procedures",
        "Geographic Distribution: Deploying services across multiple regions to protect against localized failures or disasters",
        "Circuit Breakers: Preventing cascade failures by isolating failing components and providing graceful degradation"
      ],
      benefits: [
        "Business Continuity: Minimizes revenue loss and maintains customer trust through consistent service availability",
        "User Experience: Provides reliable access to services, improving customer satisfaction and retention",
        "Competitive Advantage: Higher availability can differentiate services in competitive markets",
        "Compliance: Meets regulatory requirements and service level agreements (SLAs) for critical applications",
        "Operational Efficiency: Reduces emergency response costs and allows for planned maintenance windows"
      ],
      challenges: [
        "Cost vs Benefit: Achieving higher availability levels (99.99% vs 99.9%) requires exponentially more investment",
        "Complexity Management: Redundant systems introduce architectural and operational complexity",
        "Testing Difficulty: Chaos engineering and failure testing are necessary but can be disruptive",
        "Update Challenges: Maintaining availability during system updates requires sophisticated deployment strategies",
        "Monitoring Overhead: Comprehensive monitoring systems require significant resources and maintenance"
      ],
      implementation: [
        "Multi-Zone Deployment: Deploy applications across multiple availability zones or data centers",
        "Database Replication: Implement master-slave or master-master database replication for data redundancy",
        "Load Balancer Configuration: Use health checks and automatic failover in load balancing configurations",
        "Backup and Recovery: Establish automated backup procedures and disaster recovery plans",
        "Blue-Green Deployments: Use blue-green or canary deployment strategies to minimize downtime during updates"
      ],
      examples: [
        "AWS S3: Provides 99.999999999% (11 9's) data durability through cross-region replication and redundancy",
        "Google Search: Maintains near 100% availability through global load balancing and massive redundancy",
        "Payment Systems: Visa and Mastercard maintain extremely high availability due to the critical nature of payment processing",
        "CDN Services: Cloudflare and AWS CloudFront use global edge locations to maintain high availability for content delivery"
      ]
    },

    'cap-theorem': {
      title: 'CAP Theorem',
      definition: "The CAP Theorem, formulated by Eric Brewer, states that distributed systems can provide at most two of three fundamental guarantees: Consistency (all nodes see the same data simultaneously), Availability (system remains operational), and Partition tolerance (system continues operating despite network failures). This theorem forms the theoretical foundation for understanding trade-offs in distributed system design.",
      how_it_works: [
        "Consistency (C): All nodes in the distributed system see the same data simultaneously, ensuring every read receives the most recent write",
        "Availability (A): Every request receives a response, even if some nodes are down or unreachable, maintaining system operability",
        "Partition Tolerance (P): The system continues operating despite network failures between nodes, handling communication breakdowns gracefully",
        "Trade-off Decision: When network partitions occur (which are inevitable), systems must choose between consistency and availability",
        "PACELC Extension: In practice, systems must also consider latency trade-offs during normal operation (Else Consistency or Latency)"
      ],
      benefits: [
        "Design Framework: Provides a clear theoretical framework for making distributed system architectural decisions",
        "Trade-off Clarity: Helps architects understand and communicate system limitations and behaviors to stakeholders",
        "Risk Assessment: Enables evaluation of system behavior during network failures and helps in disaster planning",
        "Technology Selection: Guides choice between different database technologies (CP systems like MongoDB vs AP systems like DynamoDB)",
        "Realistic Expectations: Prevents unrealistic system guarantees and helps set appropriate service level agreements"
      ],
      challenges: [
        "Oversimplification: Real systems often exist on a spectrum rather than fitting into strict CAP categories",
        "Partition Reality: Network partitions are inevitable in distributed systems, making true CA systems impractical",
        "Performance Blind Spot: The theorem doesn't consider latency and performance characteristics, which are often critical",
        "Implementation Nuance: Actual consistency and availability exist on continuums rather than binary states",
        "Business Context: The theorem doesn't account for varying business requirements across different parts of an application"
      ],
      implementation: [
        "CP Systems Design: Implement strong consistency by sacrificing availability during partitions (e.g., traditional relational databases)",
        "AP Systems Design: Maintain availability during partitions while accepting eventual consistency (e.g., DNS, web caches)",
        "Hybrid Approaches: Use different consistency models for different parts of the application based on business requirements",
        "Quorum-Based Systems: Implement configurable consistency levels allowing fine-tuning of CAP trade-offs",
        "Monitoring and Alerting: Implement comprehensive monitoring to detect partition scenarios and consistency violations"
      ],
      examples: [
        "Banking Systems (CP): Prioritize consistency for account balances, accepting temporary unavailability during network issues",
        "Social Media Feeds (AP): Prioritize availability for user feeds, accepting that users might temporarily see stale content",
        "E-commerce Catalogs (AP): Product listings remain available during network issues, with eventual consistency for inventory updates",
        "Distributed Databases: Cassandra (AP), MongoDB (CP), and Amazon DynamoDB (configurable) represent different CAP choices"
      ]
    },

    'acid-transactions': {
      title: 'ACID Transactions',
      definition: "ACID (Atomicity, Consistency, Isolation, Durability) transactions ensure reliable database operations by guaranteeing that database transactions are processed reliably and maintain data integrity even in the face of errors, failures, or concurrent access. These properties form the foundation of traditional relational database systems and critical business applications.",
      how_it_works: [
        "Atomicity: All operations in a transaction succeed or fail together as an indivisible unit, preventing partial updates that could corrupt data",
        "Consistency: Transactions move the database from one valid state to another, maintaining all database constraints, triggers, and business rules",
        "Isolation: Concurrent transactions don't interfere with each other's intermediate states, preventing dirty reads, phantom reads, and non-repeatable reads",
        "Durability: Once a transaction is committed, changes persist permanently, even through system failures, power outages, or crashes",
        "Transaction Management: Database management systems use logs, locks, and recovery mechanisms to ensure ACID properties"
      ],
      benefits: [
        "Data Integrity: Prevents data corruption and maintains database consistency across all operations and failures",
        "Reliable Operations: Ensures critical business operations complete successfully or not at all, preventing inconsistent states",
        "Concurrent Safety: Multiple users can safely access and modify data simultaneously without interference",
        "Error Recovery: Automatic rollback mechanisms prevent partial updates during failures, maintaining system reliability",
        "Audit Trail: Transaction logs provide complete audit trails for compliance and debugging purposes"
      ],
      challenges: [
        "Performance Overhead: Locking mechanisms and logging can significantly slow down database operations",
        "Scalability Constraints: Strict consistency requirements can limit horizontal scaling capabilities in distributed systems",
        "Deadlock Potential: Concurrent transactions may block each other indefinitely, requiring deadlock detection and resolution",
        "Resource Consumption: Transaction logs, lock tables, and rollback segments require additional storage and memory",
        "Distributed Complexity: Maintaining ACID properties across multiple databases requires complex two-phase commit protocols"
      ],
      implementation: [
        "Transaction Boundaries: Clearly define transaction scope using BEGIN, COMMIT, and ROLLBACK statements",
        "Isolation Levels: Choose appropriate isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable)",
        "Connection Pooling: Manage database connections efficiently to support concurrent transactions and reduce overhead",
        "Deadlock Handling: Implement timeout mechanisms and retry logic to handle deadlock situations gracefully",
        "Backup Strategies: Implement point-in-time recovery and regular backups to support durability guarantees"
      ],
      examples: [
        "Banking Transfers: Money transfer between accounts must be atomic - both debit and credit operations must succeed together",
        "E-commerce Orders: Order placement involving inventory reduction, payment processing, and shipping must be consistent",
        "User Registration: Account creation, profile setup, and permission assignment must complete as a single transaction",
        "Financial Trading: Stock trades require ACID properties to ensure accurate execution and settlement"
      ]
    },

    'consistent-hashing': {
      title: 'Consistent Hashing',
      definition: "Consistent hashing is a distributed hashing technique that minimizes data redistribution when nodes are added or removed from a distributed system. Unlike traditional hashing methods that require rehashing most data when the cluster size changes, consistent hashing ensures only a small fraction of keys need reassignment, making it essential for scalable distributed systems.",
      how_it_works: [
        "Hash Ring: Both nodes and keys are mapped to positions on a circular hash space, creating a ring structure for distribution",
        "Clockwise Assignment: Keys are assigned to the first node encountered while moving clockwise on the ring from the key's position",
        "Virtual Nodes: Multiple hash positions per physical node improve load distribution and reduce impact of node changes",
        "Minimal Rehashing: Only keys between the failed node and its predecessor need reassignment when nodes leave",
        "Deterministic Mapping: The same hash function ensures consistent key-to-node assignments across all clients"
      ],
      benefits: [
        "Scalability: Adding or removing nodes affects only a small portion of keys, enabling smooth horizontal scaling",
        "Load Distribution: Virtual nodes help distribute load more evenly across physical nodes in the cluster",
        "Fault Tolerance: Node failures only affect a subset of keys, maintaining system availability for most data",
        "Cache Efficiency: Minimal data movement preserves cache locality and reduces warm-up time after changes",
        "Operational Simplicity: Nodes can join or leave without requiring complex coordination protocols"
      ],
      challenges: [
        "Hot Spots: Popular keys can still create uneven load distribution despite consistent hashing",
        "Implementation Complexity: Requires careful design of virtual nodes, replication, and failure detection",
        "Network Overhead: May require additional network hops to reach the correct node for a given key",
        "Load Balancing: May require additional strategies beyond consistent hashing to handle non-uniform key popularity",
        "Replication Strategy: Need additional mechanisms for data replication and maintaining replica consistency"
      ],
      implementation: [
        "Virtual Node Configuration: Implement 100-200 virtual nodes per physical node for better distribution",
        "Replication Strategy: Store copies of each key on N consecutive nodes in the ring for fault tolerance",
        "Node Addition Protocol: Gradually migrate data when adding new nodes to minimize performance impact",
        "Failure Detection: Implement heartbeat mechanisms and gossip protocols to detect node failures quickly",
        "Hash Function Selection: Use cryptographic hash functions like SHA-1 or MD5 for uniform distribution"
      ],
      examples: [
        "Amazon DynamoDB: Uses consistent hashing to distribute data across multiple nodes while maintaining high availability",
        "Apache Cassandra: Employs consistent hashing with virtual nodes for data distribution and replication",
        "Redis Cluster: Implements consistent hashing with hash slots for horizontal scaling of Redis instances",
        "CDN Networks: Content delivery networks use consistent hashing to distribute cached content across edge servers"
      ]
    },

    'rate-limiting': {
      title: 'Rate Limiting',
      definition: "Rate limiting is a technique for controlling the frequency of requests or operations in a system to prevent abuse, ensure fair resource allocation, and maintain system stability. By setting limits on how many requests a client can make within a specific time window, rate limiting protects systems from being overwhelmed and ensures consistent performance for all users.",
      how_it_works: [
        "Request Quotas: Define maximum number of requests allowed within specific time periods (per second, minute, hour, day)",
        "Token Bucket Algorithm: Allocates tokens at a fixed rate; requests consume tokens, allowing burst capacity while controlling average rate",
        "Leaky Bucket Algorithm: Processes requests at a constant rate, queuing excess requests and dropping overflow",
        "Sliding Window: Maintains precise request counts across moving time periods for more accurate rate enforcement",
        "Distributed Enforcement: Coordinates rate limits across multiple servers using shared storage or distributed counters"
      ],
      benefits: [
        "System Protection: Prevents server overload and maintains system stability during traffic spikes or attacks",
        "Fair Resource Allocation: Ensures no single client can monopolize system resources at the expense of others",
        "Cost Control: Reduces infrastructure costs by preventing resource abuse and controlling peak usage",
        "Security Benefits: Helps prevent brute force attacks, DoS attempts, and other malicious activities",
        "Quality of Service: Maintains consistent performance and response times for legitimate users"
      ],
      challenges: [
        "Configuration Complexity: Requires careful tuning of limits, time windows, and burst allowances",
        "False Positives: Legitimate users may be blocked during normal traffic spikes or usage patterns",
        "Distributed Coordination: Implementing consistent limits across multiple servers requires synchronization",
        "Storage Overhead: Tracking request counts and timestamps requires additional memory or database storage",
        "User Experience: Poorly implemented rate limiting can degrade user experience if not handled gracefully"
      ],
      implementation: [
        "Algorithm Selection: Choose between token bucket, leaky bucket, or sliding window based on requirements",
        "Granularity Design: Implement limits at multiple levels (per-user, per-IP, per-API key, global)",
        "Error Handling: Return meaningful HTTP status codes (429 Too Many Requests) with retry guidance",
        "Bypass Mechanisms: Provide emergency access or elevated limits for critical operations",
        "Monitoring and Alerting: Track rate limit violations, system performance, and adjust limits based on usage patterns"
      ],
      examples: [
        "Twitter API: Implements rate limits to prevent abuse while allowing legitimate applications to function",
        "GitHub API: Uses rate limiting to protect their infrastructure while supporting millions of developers",
        "Stripe Payment API: Implements sophisticated rate limiting to prevent fraudulent activity and ensure service stability",
        "Cloud Provider APIs: AWS, Google Cloud, and Azure all use rate limiting to manage resource usage and costs"
      ]
    }
  },

  // BUILDING BLOCKS - Component-focused structure
  building_blocks: {
    'load-balancing': {
      title: 'Load Balancing',
      overview: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. This fundamental technique improves application responsiveness, increases availability, and provides redundancy by spreading workload across multiple computing resources, forming a critical component of scalable distributed systems.",
      how_it_works: [
        "Traffic Distribution: Incoming requests are distributed across multiple backend servers using various algorithms like round-robin, least connections, or weighted distribution",
        "Health Monitoring: Load balancers continuously monitor server health through heartbeat checks and remove unhealthy servers from rotation",
        "Session Management: Handles session persistence (sticky sessions) when required, or enables stateless design for better distribution",
        "SSL Termination: Can terminate SSL/TLS connections at the load balancer level to reduce computational overhead on backend servers"
      ],
      types: [
        "Layer 4 (Transport) Load Balancing: Operates at the TCP/UDP level, distributing traffic based on IP addresses and ports",
        "Layer 7 (Application) Load Balancing: Operates at the HTTP level, enabling content-based routing and advanced features",
        "Hardware Load Balancers: Dedicated physical appliances offering high performance but at higher cost",
        "Software Load Balancers: Applications like HAProxy, NGINX, or cloud-native solutions providing flexibility and cost-effectiveness",
        "DNS Load Balancing: Uses DNS responses to distribute traffic geographically or across different IP addresses"
      ],
      benefits: [
        "High Availability: Eliminates single points of failure by providing redundancy across multiple servers",
        "Improved Performance: Distributes load to prevent any single server from becoming a bottleneck",
        "Scalability: Enables horizontal scaling by easily adding more servers to handle increased traffic",
        "Maintenance Flexibility: Allows for rolling updates and maintenance without service interruption"
      ],
      considerations: [
        "Algorithm Selection: Choose appropriate distribution algorithms based on server capacity and request characteristics",
        "Health Check Configuration: Design effective health checks that accurately reflect server readiness",
        "Session Handling: Decide between sticky sessions (simplicity) vs stateless design (better distribution)",
        "SSL/TLS Strategy: Determine whether to terminate SSL at the load balancer or pass through to servers",
        "Geographic Distribution: Consider global load balancing for multi-region deployments"
      ],
      use_cases: [
        "Web Applications: Distributing HTTP/HTTPS traffic across multiple web servers",
        "Database Connections: Load balancing read replicas in master-slave database configurations",
        "Microservices: Distributing API calls across multiple service instances",
        "Content Delivery: Balancing requests across edge servers in CDN networks"
      ]
    },

    'caching': {
      title: 'Caching',
      overview: "Caching is a technique that stores frequently accessed data in high-speed storage systems to reduce latency, improve performance, and decrease load on primary data sources. By keeping copies of data closer to where it's needed, caching significantly enhances user experience and system efficiency across various layers of modern applications.",
      how_it_works: [
        "Data Storage: Frequently accessed data is stored in faster storage mediums (memory, SSD) for quick retrieval",
        "Cache Lookup: When data is requested, the system first checks the cache before accessing the primary data source",
        "Cache Population: On cache misses, data is retrieved from the primary source and stored in cache for future requests",
        "Eviction Policies: Least Recently Used (LRU), Least Frequently Used (LFU), or Time-To-Live (TTL) determine what data to remove"
      ],
      types: [
        "Browser Cache: Client-side caching of web assets (HTML, CSS, JavaScript, images) to reduce page load times",
        "CDN Cache: Geographic distribution of cached content at edge locations worldwide",
        "Application Cache: In-memory caching within applications using tools like Redis or Memcached",
        "Database Cache: Query result caching and buffer pools to reduce database I/O operations",
        "CPU Cache: Hardware-level caching in processor architectures (L1, L2, L3 cache levels)"
      ],
      benefits: [
        "Performance Improvement: Dramatically reduces data access time and improves response times",
        "Scalability Enhancement: Reduces load on backend systems, enabling them to handle more concurrent users",
        "Cost Efficiency: Decreases bandwidth usage and computational overhead",
        "User Experience: Provides faster page loads and more responsive applications"
      ],
      considerations: [
        "Cache Size: Balance between memory usage and cache hit ratio based on available resources",
        "Invalidation Strategy: Design effective cache invalidation to prevent serving stale data",
        "Cache Warming: Implement strategies to pre-populate cache with frequently accessed data",
        "Monitoring: Track cache hit ratios, eviction rates, and performance metrics",
        "Consistency: Handle cache coherence in distributed environments with multiple cache instances"
      ],
      use_cases: [
        "Web Content: Caching static assets, API responses, and dynamically generated content",
        "Database Queries: Storing results of expensive database queries and aggregations",
        "Session Data: Fast access to user session information and authentication state",
        "Computational Results: Caching results of expensive calculations or data processing"
      ]
    },

    'message-queues': {
      title: 'Message Queues',
      overview: "Message queues are communication mechanisms that enable asynchronous messaging between different parts of a system. They provide a reliable way to decouple system components, allowing producers to send messages without waiting for consumers to process them immediately. This pattern improves system resilience, scalability, and enables better handling of varying workloads.",
      how_it_works: [
        "Message Production: Producers send messages to queues without needing direct communication with consumers",
        "Queue Storage: Messages are stored in queues until consumers are ready to process them",
        "Message Consumption: Consumers pull messages from queues and process them asynchronously",
        "Acknowledgment: Consumers acknowledge successful processing, allowing the queue to remove the message"
      ],
      types: [
        "Point-to-Point Queues: One producer sends messages to one consumer (traditional queue model)",
        "Publish-Subscribe Topics: One producer can send messages to multiple subscribers",
        "Priority Queues: Messages are processed based on priority levels rather than FIFO order",
        "Dead Letter Queues: Special queues for messages that cannot be processed successfully",
        "Delay Queues: Messages are delivered after a specified delay period"
      ],
      benefits: [
        "Loose Coupling: Producers and consumers don't need to know about each other or be online simultaneously",
        "Reliability: Messages persist in queues even if consumers are temporarily unavailable",
        "Scalability: Multiple consumers can process messages in parallel, enabling horizontal scaling",
        "Load Leveling: Queues can absorb traffic spikes and allow consumers to process at their own pace"
      ],
      considerations: [
        "Message Ordering: Decide whether message order matters and choose appropriate queue types",
        "Delivery Guarantees: Choose between at-most-once, at-least-once, or exactly-once delivery semantics",
        "Error Handling: Implement dead letter queues and retry policies for failed message processing",
        "Monitoring: Track queue depth, processing rates, and error rates",
        "Security: Implement authentication, authorization, and encryption for sensitive messages"
      ],
      use_cases: [
        "Background Processing: Handling time-consuming tasks like image processing or report generation",
        "System Integration: Connecting different systems or services in a loosely coupled manner",
        "Event Notifications: Sending notifications about system events to interested parties",
        "Workflow Management: Orchestrating multi-step business processes across different services"
      ]
    }
  },

  // TRADE-OFFS - Comparison structure
  tradeoffs: {
    'consistency-vs-availability': {
      title: 'Consistency vs Availability',
      overview: "The fundamental trade-off between Consistency and Availability, as outlined in the CAP theorem, requires distributed systems to choose between guaranteeing that all nodes see the same data simultaneously versus ensuring the system remains responsive even during network failures. This trade-off influences every aspect of distributed system design and has profound implications for user experience and business requirements.",
      option_a: {
        title: "Consistency (CP Systems)",
        description: "Systems that prioritize consistency ensure all nodes see the same data at the same time, sacrificing availability during network partitions.",
        characteristics: [
          "Strong Data Consistency: All reads receive the most recent write across all nodes",
          "ACID Properties: Full transactional guarantees with rollback capabilities",
          "Synchronous Replication: Changes are committed only after all replicas acknowledge",
          "Blocking Operations: Operations may block or fail during network partitions"
        ],
        examples: ["Traditional RDBMS (PostgreSQL, MySQL)", "MongoDB with strong consistency", "HBase", "Redis Cluster"]
      },
      option_b: {
        title: "Availability (AP Systems)", 
        description: "Systems that prioritize availability remain responsive to requests even during network partitions, accepting temporary data inconsistencies.",
        characteristics: [
          "High Uptime: Systems continue operating even when some nodes are unreachable",
          "Eventual Consistency: Data will become consistent over time, but may be temporarily inconsistent",
          "Asynchronous Replication: Changes are applied immediately and replicated asynchronously",
          "Graceful Degradation: Partial functionality maintained during failures"
        ],
        examples: ["Amazon DynamoDB", "Apache Cassandra", "DNS systems", "Web caches", "CouchDB"]
      },
      decision_factors: [
        "Business Requirements: Financial systems need consistency, while social media can tolerate inconsistency",
        "User Experience: Consider whether users can handle stale data or need real-time accuracy",
        "Geographic Distribution: Global systems are more likely to experience network partitions",
        "Data Criticality: Critical data (payments) vs non-critical data (recommendations)",
        "Regulatory Compliance: Some industries require strong consistency for audit and compliance"
      ],
      implementation_examples: [
        "Banking System: Choose consistency for account balances to prevent overdrafts and maintain accurate financial records",
        "Social Media Feed: Choose availability to ensure users can always access content, even if it's slightly outdated",
        "E-commerce Inventory: Hybrid approach - strong consistency for stock levels, eventual consistency for product reviews",
        "Chat Applications: Availability for message delivery, with eventual consistency for message ordering"
      ]
    },

    'horizontal-vs-vertical-scaling': {
      title: 'Horizontal vs Vertical Scaling',
      overview: "The choice between horizontal scaling (adding more servers) and vertical scaling (adding more power to existing servers) is a fundamental decision in system architecture. Each approach has distinct advantages, limitations, and cost implications that must be carefully considered based on application requirements, traffic patterns, and business constraints.",
      option_a: {
        title: "Horizontal Scaling (Scale-Out)",
        description: "Adding more servers or instances to distribute load across multiple machines, creating a distributed system architecture.",
        characteristics: [
          "Distributed Architecture: Load is spread across multiple commodity servers",
          "Linear Scalability: Capacity increases proportionally with the number of servers added",
          "Fault Tolerance: System can survive individual server failures without total outage",
          "Complex Management: Requires sophisticated orchestration and coordination mechanisms"
        ],
        examples: ["Web server clusters", "Microservices architectures", "NoSQL databases like Cassandra", "Container orchestration with Kubernetes"]
      },
      option_b: {
        title: "Vertical Scaling (Scale-Up)",
        description: "Increasing the resources (CPU, RAM, storage) of existing servers to handle more load within the same infrastructure footprint.",
        characteristics: [
          "Centralized Architecture: More powerful hardware handles increased load",
          "Simplicity: Easier to manage and maintain with traditional architectures",
          "Performance Optimization: Better performance per unit for compute-intensive applications",
          "Physical Limits: Eventually hits hardware limitations and becomes cost-prohibitive"
        ],
        examples: ["High-end database servers", "Mainframe computers", "GPU clusters for ML workloads", "High-memory analytics servers"]
      },
      decision_factors: [
        "Cost Considerations: Horizontal scaling often more cost-effective for large scale, vertical for smaller scale",
        "Application Architecture: Stateless applications favor horizontal, stateful applications may need vertical",
        "Traffic Patterns: Predictable growth suits vertical, unpredictable spikes favor horizontal",
        "Technical Expertise: Horizontal scaling requires more distributed systems expertise",
        "Failure Tolerance: Horizontal provides better fault tolerance, vertical creates single points of failure"
      ],
      implementation_examples: [
        "Web Applications: Horizontal scaling with load balancers and multiple web servers for handling traffic spikes",
        "Database Systems: Vertical scaling for OLTP workloads requiring strong consistency, horizontal for OLAP and analytics",
        "Machine Learning: Vertical scaling for training large models on powerful GPUs, horizontal for serving predictions",
        "Gaming Servers: Horizontal scaling for multiplayer games to handle varying player populations across regions"
      ]
    },

    'sql-vs-nosql': {
      title: 'SQL vs NoSQL',
      overview: "The choice between SQL (relational) and NoSQL (non-relational) databases is one of the most important architectural decisions in system design. Each approach offers different advantages in terms of data modeling, scalability, consistency, and development complexity, making the choice dependent on specific application requirements and constraints.",
      option_a: {
        title: "SQL Databases (RDBMS)",
        description: "Relational databases that use structured schemas and SQL for querying, providing ACID transactions and strong consistency guarantees.",
        characteristics: [
          "Schema Enforcement: Strict data structure with predefined tables, columns, and relationships",
          "ACID Transactions: Full transactional support with rollback and consistency guarantees",
          "SQL Queries: Powerful query language with complex joins, aggregations, and analytics",
          "Mature Ecosystem: Extensive tooling, expertise, and third-party integrations available"
        ],
        examples: ["PostgreSQL", "MySQL", "Oracle Database", "Microsoft SQL Server", "SQLite"]
      },
      option_b: {
        title: "NoSQL Databases",
        description: "Non-relational databases designed for flexible schemas, horizontal scaling, and handling large volumes of unstructured or semi-structured data.",
        characteristics: [
          "Flexible Schema: Dynamic data structures that can evolve without migrations",
          "Horizontal Scalability: Designed for distribution across multiple servers",
          "Eventual Consistency: Often sacrifice immediate consistency for availability and performance",
          "Specialized Data Models: Document, key-value, column-family, or graph-based storage"
        ],
        examples: ["MongoDB (Document)", "Redis (Key-Value)", "Cassandra (Column-Family)", "Neo4j (Graph)", "DynamoDB (Multi-model)"]
      },
      decision_factors: [
        "Data Structure: Well-defined relationships favor SQL, flexible or unstructured data favors NoSQL",
        "Scalability Requirements: Massive scale and horizontal scaling favor NoSQL",
        "Consistency Needs: Strong consistency requirements favor SQL databases",
        "Query Complexity: Complex analytics and reporting favor SQL with powerful query languages",
        "Development Speed: Rapid prototyping and agile development may favor NoSQL flexibility"
      ],
      implementation_examples: [
        "E-commerce Platform: SQL for orders and payments (consistency), NoSQL for product catalog and recommendations (flexibility)",
        "Social Media: NoSQL for user posts and feeds (scale), SQL for user accounts and financial transactions (consistency)",
        "Analytics Platform: SQL for structured reporting and dashboards, NoSQL for raw event data collection",
        "IoT System: NoSQL for high-volume sensor data ingestion, SQL for processed data and business reporting"
      ]
    }
  },

  // INTERVIEW PROBLEMS - Problem-focused structure
  interview_problems: {
    'easy': {
      title: 'Easy Interview Problems',
      problems: [
        {
          title: 'Design URL Shortener (TinyURL)',
          difficulty: 'Easy',
          description: 'Design a service that shortens long URLs and redirects users to the original URL when accessed.',
          requirements: [
            'Shorten long URLs into shorter, unique identifiers',
            'Redirect short URLs to original long URLs',
            'Handle millions of URLs with low latency',
            'Provide basic analytics (optional)'
          ],
          key_components: [
            'URL Encoding Service: Generate unique short codes for long URLs',
            'Database: Store mapping between short codes and long URLs',
            'Redirect Service: Handle HTTP redirects from short to long URLs',
            'Cache Layer: Cache popular URLs for faster access'
          ],
          scaling_considerations: [
            'Database sharding based on URL hash for horizontal scaling',
            'CDN for global distribution of redirect service',
            'Read replicas for handling high read traffic',
            'Caching strategy for frequently accessed URLs'
          ],
          key_concepts: ['Hashing', 'Database Design', 'Caching', 'HTTP Redirects']
        },
        {
          title: 'Design Leaderboard',
          difficulty: 'Easy',
          description: 'Design a real-time leaderboard system for games or competitions that can handle millions of players.',
          requirements: [
            'Real-time score updates for millions of players',
            'Query top N players globally or by region',
            'Handle concurrent score updates efficiently',
            'Support for seasonal/tournament leaderboards'
          ],
          key_components: [
            'Score Update Service: Process and validate score submissions',
            'Sorted Data Structure: Maintain rankings using sorted sets (Redis)',
            'Database: Persistent storage for player data and historical scores',
            'API Gateway: Handle leaderboard queries and updates'
          ],
          scaling_considerations: [
            'Use Redis sorted sets for O(log N) insertions and range queries',
            'Implement sharding by game/region for horizontal scaling',
            'Cache top rankings to reduce database load',
            'Event-driven updates to maintain consistency across shards'
          ],
          key_concepts: ['Sorted Sets', 'Real-time Updates', 'Redis', 'Sharding']
        }
      ]
    },

    'medium': {
      title: 'Medium Interview Problems',
      problems: [
        {
          title: 'Design WhatsApp',
          difficulty: 'Medium',
          description: 'Design a messaging application supporting real-time chat, group messaging, media sharing, and billions of users.',
          requirements: [
            'Real-time messaging between users and groups',
            'Media sharing (images, videos, documents)',
            'Message delivery confirmation and read receipts',
            'Support billions of users with high availability',
            'End-to-end encryption for privacy'
          ],
          key_components: [
            'Message Service: Handle message routing and delivery',
            'User Service: Manage user profiles and authentication',
            'Media Service: Handle file uploads and media processing',
            'Notification Service: Push notifications for offline users',
            'WebSocket Gateway: Real-time bidirectional communication'
          ],
          scaling_considerations: [
            'Database sharding by user ID or conversation ID',
            'Message queues for reliable message delivery',
            'CDN for media content distribution',
            'Geographic distribution of services for global reach',
            'Connection pooling and WebSocket management at scale'
          ],
          key_concepts: ['Real-time Messaging', 'WebSockets', 'Push Notifications', 'Media Processing', 'Sharding']
        },
        {
          title: 'Design Instagram',
          difficulty: 'Medium', 
          description: 'Design a photo-sharing social media platform with feeds, followers, content discovery, and billions of users.',
          requirements: [
            'Photo/video upload and sharing capabilities',
            'User feeds showing content from followed accounts',
            'Social features: likes, comments, followers',
            'Content discovery and recommendation system',
            'Support billions of users and posts'
          ],
          key_components: [
            'Media Service: Image/video processing and storage',
            'Feed Service: Generate and serve personalized user feeds',
            'Social Graph Service: Manage follower relationships',
            'Recommendation Service: Content discovery algorithms',
            'Search Service: Find users and content'
          ],
          scaling_considerations: [
            'CDN for global media distribution and caching',
            'Database sharding by user ID for social graph data',
            'Pre-computed feeds for active users, on-demand for others',
            'Machine learning pipelines for recommendation algorithms',
            'Event-driven architecture for real-time updates'
          ],
          key_concepts: ['Content Delivery', 'Social Graph', 'Recommendation Systems', 'Image Processing', 'Feed Generation']
        }
      ]
    },

    'hard': {
      title: 'Hard Interview Problems',
      problems: [
        {
          title: 'Design Uber',
          difficulty: 'Hard',
          description: 'Design a ride-sharing platform with real-time location tracking, driver-rider matching, payment processing, and global scale.',
          requirements: [
            'Real-time location tracking for drivers and riders',
            'Efficient matching algorithm between drivers and riders',
            'Dynamic pricing based on demand and supply',
            'Payment processing and trip billing',
            'Support millions of concurrent users globally'
          ],
          key_components: [
            'Location Service: Real-time GPS tracking and geospatial queries',
            'Matching Service: Algorithm to pair drivers with riders optimally',
            'Pricing Service: Dynamic pricing calculation based on demand',
            'Payment Service: Handle payments, billing, and driver payouts',
            'Trip Service: Manage trip lifecycle and state transitions'
          ],
          scaling_considerations: [
            'Geospatial indexing and sharding for location-based queries',
            'Real-time stream processing for location updates',
            'Machine learning for demand prediction and pricing',
            'Event-driven architecture for trip state management',
            'Global distribution with region-specific services'
          ],
          key_concepts: ['Geospatial Indexing', 'Real-time Matching', 'Dynamic Pricing', 'Stream Processing', 'Location Services']
        },
        {
          title: 'Design Google Maps',
          difficulty: 'Hard',
          description: 'Design a mapping service with route planning, real-time traffic, location search, and global coverage.',
          requirements: [
            'Global map data storage and serving',
            'Route planning with multiple transportation modes',
            'Real-time traffic information and route optimization',
            'Points of interest search and business listings',
            'Support billions of queries with low latency'
          ],
          key_components: [
            'Map Tile Service: Serve map tiles at different zoom levels',
            'Routing Service: Calculate optimal routes using graph algorithms',
            'Traffic Service: Collect and process real-time traffic data',
            'Search Service: Geospatial search for places and addresses',
            'Data Pipeline: Process and update map data from multiple sources'
          ],
          scaling_considerations: [
            'Hierarchical map tiling with CDN for global distribution',
            'Graph algorithms optimization for route calculation',
            'Real-time data processing for traffic conditions',
            'Machine learning for traffic prediction and ETA calculation',
            'Geospatial databases optimized for location queries'
          ],
          key_concepts: ['Graph Algorithms', 'Geospatial Data', 'Real-time Processing', 'Map Tiles', 'Route Optimization']
        }
      ]
    }
  },

  // RESOURCES - Simple list structure with proper links
  resources: {
    'books': {
      title: 'Essential Books',
      items: [
        {
          title: 'Designing Data-Intensive Applications',
          author: 'Martin Kleppmann',
          description: 'The definitive guide to building scalable, reliable, and maintainable systems. Covers distributed systems, data modeling, and system architecture.',
          link: 'https://dataintensive.net/',
          topics: ['Distributed Systems', 'Data Modeling', 'System Architecture']
        },
        {
          title: 'System Design Interview – An Insider's Guide',
          author: 'Alex Xu',
          description: 'Comprehensive guide to system design interviews with real-world examples and step-by-step solutions.',
          link: 'https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF',
          topics: ['Interview Preparation', 'System Design', 'Architecture Patterns']
        }
      ]
    },

    'articles': {
      title: 'Must-Read Engineering Articles',
      items: [
        {
          title: 'How Discord stores trillions of messages',
          source: 'Discord Engineering',
          description: 'Deep dive into Discord's message storage architecture, data modeling decisions, and scaling challenges.',
          link: 'https://discord.com/blog/how-discord-stores-trillions-of-messages',
          topics: ['Database Design', 'Scaling', 'Message Systems']
        },
        {
          title: 'Building In-Video Search at Netflix',
          source: 'Netflix Technology Blog',
          description: 'How Netflix built search functionality within video content using machine learning and distributed systems.',
          link: 'https://netflixtechblog.com/building-in-video-search-936766f0017c',
          topics: ['Search Systems', 'Machine Learning', 'Video Processing']
        },
        {
          title: 'How Canva scaled Media uploads from Zero to 50 Million per Day',
          source: 'Canva Engineering',
          description: 'Canva's journey in building a scalable media upload system handling millions of files daily.',
          link: 'https://www.canva.dev/blog/engineering/from-zero-to-50-million-uploads-per-day/',
          topics: ['File Storage', 'Scaling', 'Media Processing']
        },
        {
          title: 'How Airbnb avoids double payments in a Distributed Payments System',
          source: 'Airbnb Engineering',
          description: 'Detailed explanation of how Airbnb ensures payment idempotency in their distributed payment system.',
          link: 'https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb',
          topics: ['Payment Systems', 'Distributed Systems', 'Idempotency']
        }
      ]
    },

    'papers': {
      title: 'Foundational Research Papers',
      items: [
        {
          title: 'MapReduce: Simplified Data Processing on Large Clusters',
          authors: 'Jeffrey Dean, Sanjay Ghemawat',
          description: 'The seminal paper introducing MapReduce programming model for processing large datasets.',
          link: 'https://research.google/pubs/pub62/',
          topics: ['Distributed Computing', 'Data Processing', 'Parallel Systems']
        },
        {
          title: 'The Google File System',
          authors: 'Sanjay Ghemawat, Howard Gobioff, Shun-Tak Leung',
          description: 'Design and implementation of GFS, a scalable distributed file system for large distributed data-intensive applications.',
          link: 'https://research.google/pubs/pub51/',
          topics: ['Distributed Storage', 'File Systems', 'Fault Tolerance']
        },
        {
          title: 'Dynamo: Amazon's Highly Available Key-value Store',
          authors: 'Giuseppe DeCandia et al.',
          description: 'Amazon's approach to building a highly available and scalable distributed storage system.',
          link: 'https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf',
          topics: ['NoSQL', 'Distributed Systems', 'Eventual Consistency']
        }
      ]
    },

    'channels': {
      title: 'YouTube Channels',
      items: [
        {
          title: 'Gaurav Sen',
          description: 'System design concepts explained through real-world examples and case studies.',
          link: 'https://www.youtube.com/@gkcs',
          topics: ['System Design', 'Interview Preparation', 'Architecture']
        },
        {
          title: 'ByteByteGo',
          description: 'Visual explanations of system design concepts and engineering best practices.',
          link: 'https://www.youtube.com/@ByteByteGo',
          topics: ['System Design', 'Visual Learning', 'Engineering']
        },
        {
          title: 'Tech Dummies Narendra L',
          description: 'Comprehensive system design tutorials and mock interviews.',
          link: 'https://www.youtube.com/@TechDummiesNarendraL',
          topics: ['System Design', 'Tutorials', 'Mock Interviews']
        }
      ]
    },

    'newsletters': {
      title: 'Newsletters',
      items: [
        {
          title: 'AlgoMaster Newsletter',
          author: 'Ashish Pratap Singh',
          description: 'Weekly newsletter covering system design concepts, interview tips, and engineering best practices.',
          link: 'https://blog.algomaster.io/',
          topics: ['System Design', 'Interview Preparation', 'Engineering']
        },
        {
          title: 'High Scalability',
          description: 'Building bigger, faster, more reliable websites. Case studies and architecture insights.',
          link: 'http://highscalability.com/',
          topics: ['Scalability', 'Architecture', 'Case Studies']
        }
      ]
    }
  }
};

// Application state
let currentTopic = null;
let currentCategory = null;
let searchResults = [];
let completedTopics = new Set();
let bookmarkedTopics = new Set();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  loadUserProgress();
  updateProgressDisplay();
  showHomeContent();
}

function setupEventListeners() {
  // Navigation event listeners
  document.querySelectorAll('.nav-section-header').forEach(header => {
    header.addEventListener('click', handleSectionToggle);
  });

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', handleNavigation);
  });

  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  searchInput.addEventListener('input', handleSearch);
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      performSearch(e.target.value);
    }
  });

  searchClear.addEventListener('click', clearSearch);

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Mobile menu
  document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobile-menu-toggle');

    if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      clearSearch();
      document.getElementById('sidebar').classList.remove('mobile-open');
    }

    if (e.key === '/' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      document.getElementById('search-input').focus();
    }
  });
}

function handleSectionToggle(e) {
  const header = e.currentTarget;
  const section = header.getAttribute('data-section');
  const items = document.getElementById(`${section}-items`);

  header.classList.toggle('expanded');
  items.classList.toggle('expanded');

  // Update chevron rotation
  const chevron = header.querySelector('.nav-chevron');
  if (header.classList.contains('expanded')) {
    chevron.style.transform = 'rotate(180deg)';
  } else {
    chevron.style.transform = 'rotate(0deg)';
  }
}

function handleNavigation(e) {
  const item = e.currentTarget;
  const category = item.getAttribute('data-category');
  const topic = item.getAttribute('data-topic');

  // Update active states
  document.querySelectorAll('.nav-item').forEach(navItem => {
    navItem.classList.remove('active');
  });
  item.classList.add('active');

  // Navigate to topic
  navigateToTopic(category, topic);
}

function navigateToTopic(category, topic) {
  currentCategory = category;
  currentTopic = topic;

  // Hide home and search content
  document.getElementById('home-content').classList.add('hidden');
  document.getElementById('search-results').classList.add('hidden');

  // Show dynamic content
  const dynamicContent = document.getElementById('dynamic-content');
  dynamicContent.classList.remove('hidden');

  // Load topic content
  loadTopicContent(category, topic);

  // Mark topic as read
  markTopicAsRead(category, topic);
}

function loadTopicContent(category, topic) {
  const data = systemDesignData[category][topic];
  if (!data) return;

  const contentArea = document.getElementById('dynamic-content');
  let html = '';

  // Generate content based on category type
  if (category === 'architectural_patterns') {
    html = generateArchitecturalPatternContent(data);
  } else if (category === 'key_concepts') {
    html = generateKeyConceptContent(data);
  } else if (category === 'building_blocks') {
    html = generateBuildingBlockContent(data);
  } else if (category === 'tradeoffs') {
    html = generateTradeoffContent(data);
  } else if (category === 'interview_problems') {
    html = generateInterviewProblemContent(data);
  } else if (category === 'resources') {
    html = generateResourceContent(data);
  }

  contentArea.innerHTML = html;
  contentArea.scrollTop = 0;
}

function generateArchitecturalPatternContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
    </div>

    ${data.image ? `
    <div class="diagram-container">
      <img src="${data.image}" alt="${data.title} Diagram" class="diagram-image" />
      <div class="diagram-caption">Figure 1: ${data.title} Overview</div>
    </div>
    ` : ''}

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📝</span>
        Introduction
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.introduction}</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        Core Concepts
      </h2>
      <div class="section-content">
        <ul class="concept-list">
          ${data.core_concepts.map(concept => `
            <li class="concept-item">
              <div class="item-title">${concept.split(':')[0]}</div>
              <div class="item-description">${concept.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">✅</span>
        Strengths
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.strengths.map(strength => `
            <li class="feature-item">
              <div class="item-title">${strength.split(':')[0]}</div>
              <div class="item-description">${strength.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">⚠️</span>
        Limitations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.limitations.map(limitation => `
            <li class="feature-item">
              <div class="item-title">${limitation.split(':')[0]}</div>
              <div class="item-description">${limitation.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🔧</span>
        Design Considerations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.design_considerations.map(consideration => `
            <li class="feature-item">
              <div class="item-title">${consideration.split(':')[0]}</div>
              <div class="item-description">${consideration.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        When to Use
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.when_to_use.map(useCase => `
            <li class="feature-item">
              <div class="item-title">${useCase.split(':')[0]}</div>
              <div class="item-description">${useCase.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateKeyConceptContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📖</span>
        Definition
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.definition}</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">⚙️</span>
        How It Works
      </h2>
      <div class="section-content">
        <ul class="concept-list">
          ${data.how_it_works.map(item => `
            <li class="concept-item">
              <div class="item-title">${item.split(':')[0]}</div>
              <div class="item-description">${item.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🌟</span>
        Benefits
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.benefits.map(benefit => `
            <li class="feature-item">
              <div class="item-title">${benefit.split(':')[0]}</div>
              <div class="item-description">${benefit.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🚧</span>
        Challenges
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.challenges.map(challenge => `
            <li class="feature-item">
              <div class="item-title">${challenge.split(':')[0]}</div>
              <div class="item-description">${challenge.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🛠️</span>
        Implementation
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.implementation.map(impl => `
            <li class="feature-item">
              <div class="item-title">${impl.split(':')[0]}</div>
              <div class="item-description">${impl.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📚</span>
        Examples
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.examples.map(example => `
            <li class="feature-item">
              <div class="item-title">${example.split(':')[0]}</div>
              <div class="item-description">${example.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateBuildingBlockContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🔍</span>
        Overview
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.overview}</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">⚙️</span>
        How It Works
      </h2>
      <div class="section-content">
        <ul class="concept-list">
          ${data.how_it_works.map(item => `
            <li class="concept-item">
              <div class="item-title">${item.split(':')[0]}</div>
              <div class="item-description">${item.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    ${data.types ? `
    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📝</span>
        Types & Variations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.types.map(type => `
            <li class="feature-item">
              <div class="item-title">${type.split(':')[0]}</div>
              <div class="item-description">${type.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
    ` : ''}

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">✅</span>
        Benefits
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.benefits.map(benefit => `
            <li class="feature-item">
              <div class="item-title">${benefit.split(':')[0]}</div>
              <div class="item-description">${benefit.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🤔</span>
        Considerations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.considerations.map(consideration => `
            <li class="feature-item">
              <div class="item-title">${consideration.split(':')[0]}</div>
              <div class="item-description">${consideration.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        Use Cases
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.use_cases.map(useCase => `
            <li class="feature-item">
              <div class="item-title">${useCase.split(':')[0]}</div>
              <div class="item-description">${useCase.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateTradeoffContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🔍</span>
        Overview
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.overview}</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
      <div class="content-section">
        <h2 class="section-title">
          <span class="section-icon">🅰️</span>
          ${data.option_a.title}
        </h2>
        <div class="section-content">
          <p class="section-intro">${data.option_a.description}</p>
          <ul class="feature-list">
            ${data.option_a.characteristics.map(char => `
              <li class="feature-item">
                <div class="item-description">${char}</div>
              </li>
            `).join('')}
          </ul>
          <div class="mt-lg">
            <strong>Examples:</strong>
            <div class="tags">
              ${data.option_a.examples.map(example => `<span class="tag">${example}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h2 class="section-title">
          <span class="section-icon">🅱️</span>
          ${data.option_b.title}
        </h2>
        <div class="section-content">
          <p class="section-intro">${data.option_b.description}</p>
          <ul class="feature-list">
            ${data.option_b.characteristics.map(char => `
              <li class="feature-item">
                <div class="item-description">${char}</div>
              </li>
            `).join('')}
          </ul>
          <div class="mt-lg">
            <strong>Examples:</strong>
            <div class="tags">
              ${data.option_b.examples.map(example => `<span class="tag">${example}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        Decision Factors
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.decision_factors.map(factor => `
            <li class="feature-item">
              <div class="item-title">${factor.split(':')[0]}</div>
              <div class="item-description">${factor.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📚</span>
        Implementation Examples
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.implementation_examples.map(example => `
            <li class="feature-item">
              <div class="item-title">${example.split(':')[0]}</div>
              <div class="item-description">${example.split(':').slice(1).join(':').trim()}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateInterviewProblemContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <p class="topic-subtitle">Common system design interview problems at this difficulty level</p>
    </div>

    ${data.problems.map((problem, index) => `
      <div class="content-section">
        <h2 class="section-title">
          <span class="section-icon">💼</span>
          ${problem.title}
        </h2>
        <div class="section-content">
          <div class="tags mb-lg">
            <span class="tag difficulty-${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>
            ${problem.key_concepts.map(concept => `<span class="tag">${concept}</span>`).join('')}
          </div>

          <p class="section-intro">${problem.description}</p>

          <h4>Requirements:</h4>
          <ul class="feature-list">
            ${problem.requirements.map(req => `
              <li class="feature-item">
                <div class="item-description">${req}</div>
              </li>
            `).join('')}
          </ul>

          <h4>Key Components:</h4>
          <ul class="concept-list">
            ${problem.key_components.map(component => `
              <li class="concept-item">
                <div class="item-title">${component.split(':')[0]}</div>
                <div class="item-description">${component.split(':').slice(1).join(':').trim()}</div>
              </li>
            `).join('')}
          </ul>

          <h4>Scaling Considerations:</h4>
          <ul class="feature-list">
            ${problem.scaling_considerations.map(consideration => `
              <li class="feature-item">
                <div class="item-description">${consideration}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('')}
  `;
}

function generateResourceContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <p class="topic-subtitle">Curated resources for learning system design</p>
    </div>

    <div class="content-section">
      <div class="section-content">
        ${data.items.map((item, index) => `
          <div class="feature-item mb-lg">
            <div class="item-title">
              <a href="${item.link}" target="_blank" class="external-link">${item.title}</a>
            </div>
            ${item.author ? `<div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">by ${item.author}</div>` : ''}
            ${item.source ? `<div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">Source: ${item.source}</div>` : ''}
            <div class="item-description">${item.description}</div>
            ${item.topics ? `
              <div class="tags" style="margin-top: 0.75rem;">
                ${item.topics.map(topic => `<span class="tag">${topic}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Search functionality
function handleSearch(e) {
  const query = e.target.value.trim();
  const clearButton = document.getElementById('search-clear');

  if (query.length > 0) {
    clearButton.classList.remove('hidden');
    if (query.length >= 2) {
      performSearch(query);
    }
  } else {
    clearButton.classList.add('hidden');
    clearSearch();
  }
}

function performSearch(query) {
  if (!query || query.length < 2) return;

  const results = [];
  const searchTerms = query.toLowerCase().split(' ');

  // Search through all categories
  Object.keys(systemDesignData).forEach(category => {
    Object.keys(systemDesignData[category]).forEach(topic => {
      const data = systemDesignData[category][topic];
      const score = calculateSearchScore(data, searchTerms, category, topic);

      if (score > 0) {
        results.push({
          category,
          topic,
          data,
          score,
          snippet: generateSearchSnippet(data, searchTerms)
        });
      }
    });
  });

  // Sort by relevance score
  results.sort((a, b) => b.score - a.score);
  searchResults = results.slice(0, 20); // Limit to top 20 results

  displaySearchResults();
}

function calculateSearchScore(data, searchTerms, category, topic) {
  let score = 0;
  const text = JSON.stringify(data).toLowerCase();

  searchTerms.forEach(term => {
    // Title matches get highest score
    if (data.title && data.title.toLowerCase().includes(term)) {
      score += 10;
    }

    // Topic key matches get high score
    if (topic.includes(term)) {
      score += 8;
    }

    // Category matches get medium score
    if (category.includes(term)) {
      score += 5;
    }

    // General text matches get base score
    const matches = (text.match(new RegExp(term, 'g')) || []).length;
    score += matches;
  });

  return score;
}

function generateSearchSnippet(data, searchTerms) {
  let text = '';

  if (data.introduction) text += data.introduction + ' ';
  if (data.definition) text += data.definition + ' ';
  if (data.overview) text += data.overview + ' ';
  if (data.description) text += data.description + ' ';

  // Find the best snippet containing search terms
  const sentences = text.split(/[.!?]+/);
  let bestSentence = sentences[0] || '';
  let maxMatches = 0;

  sentences.forEach(sentence => {
    const matches = searchTerms.reduce((count, term) => {
      return count + (sentence.toLowerCase().includes(term) ? 1 : 0);
    }, 0);

    if (matches > maxMatches) {
      maxMatches = matches;
      bestSentence = sentence;
    }
  });

  // Highlight search terms
  let snippet = bestSentence.trim().substring(0, 200);
  searchTerms.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi');
    snippet = snippet.replace(regex, '<span class="search-highlight">$1</span>');
  });

  return snippet + (bestSentence.length > 200 ? '...' : '');
}

function displaySearchResults() {
  const searchResultsContainer = document.getElementById('search-results');
  const searchResultsContent = document.getElementById('search-results-content');

  // Hide other content
  document.getElementById('home-content').classList.add('hidden');
  document.getElementById('dynamic-content').classList.add('hidden');

  if (searchResults.length === 0) {
    searchResultsContent.innerHTML = '<p>No results found. Try different keywords.</p>';
  } else {
    searchResultsContent.innerHTML = searchResults.map(result => `
      <div class="search-result-item" onclick="navigateToTopic('${result.category}', '${result.topic}')">
        <div class="search-result-category">${formatCategoryName(result.category)}</div>
        <div class="search-result-title">${result.data.title}</div>
        <div class="search-result-snippet">${result.snippet}</div>
      </div>
    `).join('');
  }

  searchResultsContainer.classList.remove('hidden');
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  document.getElementById('search-clear').classList.add('hidden');
  document.getElementById('search-results').classList.add('hidden');

  if (!currentTopic) {
    showHomeContent();
  }
}

function showHomeContent() {
  document.getElementById('home-content').classList.remove('hidden');
  document.getElementById('dynamic-content').classList.add('hidden');
  document.getElementById('search-results').classList.add('hidden');

  // Clear active navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  currentTopic = null;
  currentCategory = null;
}

// Progress tracking
function markTopicAsRead(category, topic) {
  const topicKey = `${category}:${topic}`;
  completedTopics.add(topicKey);
  saveUserProgress();
  updateProgressDisplay();

  // Update nav item appearance
  const navItem = document.querySelector(`[data-category="${category}"][data-topic="${topic}"]`);
  if (navItem) {
    navItem.classList.add('completed');
  }
}

function updateProgressDisplay() {
  const totalTopics = getTotalTopicsCount();
  const completedCount = completedTopics.size;
  const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  document.getElementById('progress-fill').style.width = `${percentage}%`;
  document.getElementById('progress-text').textContent = `${percentage}% Complete (${completedCount}/${totalTopics})`;
}

function getTotalTopicsCount() {
  let count = 0;
  Object.keys(systemDesignData).forEach(category => {
    count += Object.keys(systemDesignData[category]).length;
  });
  return count;
}

function saveUserProgress() {
  localStorage.setItem('systemDesignProgress', JSON.stringify({
    completedTopics: Array.from(completedTopics),
    bookmarkedTopics: Array.from(bookmarkedTopics)
  }));
}

function loadUserProgress() {
  const saved = localStorage.getItem('systemDesignProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    completedTopics = new Set(progress.completedTopics || []);
    bookmarkedTopics = new Set(progress.bookmarkedTopics || []);

    // Update nav items
    completedTopics.forEach(topicKey => {
      const [category, topic] = topicKey.split(':');
      const navItem = document.querySelector(`[data-category="${category}"][data-topic="${topic}"]`);
      if (navItem) {
        navItem.classList.add('completed');
      }
    });
  }
}

// Theme functionality
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Update theme icon
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';
}

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
}

// Mobile menu
function toggleMobileMenu() {
  document.getElementById('sidebar').classList.toggle('mobile-open');
}

// Utility functions
function formatCategoryName(category) {
  return category.replace(/_/g, ' ').replace(/\w/g, l => l.toUpperCase());
}

// Initialize theme on load
initializeTheme();