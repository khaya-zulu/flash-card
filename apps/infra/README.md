## NX CDK plugin

[This](https://github.com/berenddeboer/nx-plugins/tree/main/packages/nx-aws-cdk) is the plugin we using

```bash
### commands
nx deploy infra
nx destroy infra
```

## DynamoDB

### Reading and Videos

- [AWS DynamoDB Tutorial For Beginners](https://www.youtube.com/watch?v=2k2GINpO308&list=PL9nWRykSBSFi5QD8ssI0W5odL9S0309E2)
- [Data modeling core concepts for Amazon DynamoDB](https://www.youtube.com/watch?v=l-Urbf4BaWg)
- [Understanding RCU's and WCU](https://stackoverflow.com/a/71544921)
- [What is AWS DynamoDB Autoscaling? | Optimize your usage!](https://youtu.be/-um_HJWcHtA?si=OxvunK3fv92Z9Cr-)
- [How to calculate Target Utilization in DynamoDB table?](https://stackoverflow.com/a/50018158)
- [Table Capacity Modes - Amazon DynamoDB Core Concepts](https://www.youtube.com/watch?v=DdXK1XYJduw)
- [DynamoDB on-demand and provisioned capacity](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/capacity.html)

## S3

- [Security best practices for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html)

### Random notes

- access patterns (very important to think about how your data will be called)
  - Very cool [video](https://youtu.be/XvD2FrS5yYM?si=d-tx7jZ3NjgLXKwS)
- IAM roles (don't need username or password)
- Integrates nicely in AWS ecosystem

- Primary Key = Partition + Sort Key

- Vertical partitioning (set patterns to optimize costs)
