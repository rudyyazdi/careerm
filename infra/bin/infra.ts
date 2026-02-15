#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { InfraStack } from '../lib/infra-stack';

const app = new cdk.App();

new InfraStack(app, 'CareerMStack', {
  siteName: 'careerm',
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

new InfraStack(app, 'GroundedStack', {
  siteName: 'grounded',
  domainName: 'groundedmamas.com.au',
  hostedZoneId: 'Z022619235AC5MZZEPMRW',
  certificateArn: 'arn:aws:acm:us-east-1:347237569140:certificate/6921cd62-9d83-44b2-9402-2503b07b6603',
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
