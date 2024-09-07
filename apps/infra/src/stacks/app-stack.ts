import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new dynamodb.TableV2(this, 'Cards', {
      partitionKey: { name: 'cardIndex', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'collectionName', type: dynamodb.AttributeType.STRING },
      billing: dynamodb.Billing.provisioned({
        // video on auto-scaling
        // https://youtu.be/-um_HJWcHtA?si=MENFTnj-0WLYLwl6
        readCapacity: dynamodb.Capacity.autoscaled({
          minCapacity: 5,
          maxCapacity: 10,
        }),
        writeCapacity: dynamodb.Capacity.fixed(5),
      }),
    });
  }
}
