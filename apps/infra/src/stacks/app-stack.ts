import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new dynamodb.TableV2(this, 'Cards', {
      partitionKey: { name: 'cardId', type: dynamodb.AttributeType.STRING },
      sortKey: {
        name: 'collection#indexOrder',
        type: dynamodb.AttributeType.STRING,
      },
      billing: dynamodb.Billing.onDemand(),
    });

    new dynamodb.TableV2(this, 'Collections', {
      partitionKey: {
        name: 'collectionId',
        type: dynamodb.AttributeType.STRING,
      },
      billing: dynamodb.Billing.onDemand(),
    });
  }
}
