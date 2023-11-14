// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PipesServiceException as __BaseException } from "./PipesServiceException";

/**
 * @public
 * @enum
 */
export const AssignPublicIp = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];

/**
 * @public
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.
 *          This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * @public
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;

  /**
   * @public
   * <p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many
   *          as five security groups. If you do not specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when
   *          <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp;
}

/**
 * @public
 * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000.
 *          If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.</p>
 */
export interface BatchArrayProperties {
  /**
   * @public
   * <p>The size of the array, if this is an array batch job.</p>
   */
  Size?: number;
}

/**
 * @public
 * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing
 *          environment variables from the Docker image or the task definition.</p>
 *          <note>
 *             <p>Environment variables cannot start with "<code>Batch</code>". This naming convention is reserved for variables that Batch sets.</p>
 *          </note>
 */
export interface BatchEnvironmentVariable {
  /**
   * @public
   * <p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value of the key-value pair. For environment variables, this is the value of the environment variable.</p>
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const BatchResourceRequirementType = {
  GPU: "GPU",
  MEMORY: "MEMORY",
  VCPU: "VCPU",
} as const;

/**
 * @public
 */
export type BatchResourceRequirementType =
  (typeof BatchResourceRequirementType)[keyof typeof BatchResourceRequirementType];

/**
 * @public
 * <p>The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
 */
export interface BatchResourceRequirement {
  /**
   * @public
   * <p>The type of resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   */
  Type: BatchResourceRequirementType | undefined;

  /**
   * @public
   * <p>The quantity of the specified resource to reserve for the container. The values vary based on the
   *          <code>type</code> specified.</p>
   *          <dl>
   *             <dt>type="GPU"</dt>
   *             <dd>
   *                <p>The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all
   *                   containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched
   *                   on.</p>
   *                <note>
   *                   <p>GPUs aren't available for jobs that are running on Fargate resources.</p>
   *                </note>
   *             </dd>
   *             <dt>type="MEMORY"</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are
   *                   running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated.
   *                   This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">
   *                      Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *                   and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *                   You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for
   *                   multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to
   *                   <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">
   *                      Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *                   <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for
   *                      a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory
   *                         management</a> in the <i>Batch User Guide</i>.</p>
   *                </note>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> is the hard limit (in MiB), and
   *                   must match one of the supported values and the <code>VCPU</code> values must be one of the values supported for
   *                   that memory value.</p>
   *                <dl>
   *                   <dt>value = 512</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25</p>
   *                   </dd>
   *                   <dt>value = 1024</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25 or 0.5</p>
   *                   </dd>
   *                   <dt>value = 2048</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25, 0.5, or 1</p>
   *                   </dd>
   *                   <dt>value = 3072</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.5, or 1</p>
   *                   </dd>
   *                   <dt>value = 4096</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.5, 1, or 2</p>
   *                   </dd>
   *                   <dt>value = 5120, 6144, or 7168</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 1 or 2</p>
   *                   </dd>
   *                   <dt>value = 8192</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 1, 2, 4, or 8</p>
   *                   </dd>
   *                   <dt>value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 2 or 4</p>
   *                   </dd>
   *                   <dt>value = 16384</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 2, 4, or 8</p>
   *                   </dd>
   *                   <dt>value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 4</p>
   *                   </dd>
   *                   <dt>value = 20480, 24576, or 28672</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 4 or 8</p>
   *                   </dd>
   *                   <dt>value = 36864, 45056, 53248, or 61440</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 8</p>
   *                   </dd>
   *                   <dt>value = 32768, 40960, 49152, or 57344</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 8 or 16</p>
   *                   </dd>
   *                   <dt>value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 16</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *             <dt>type="VCPU"</dt>
   *             <dd>
   *                <p>The number of vCPUs reserved for the container. This parameter maps to <code>CpuShares</code> in the
   *                   <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">
   *                      Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *                   and the <code>--cpu-shares</code> option to
   *                   <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. For EC2
   *                   resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be
   *                   specified for each node at least once.</p>
   *                <p>The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about
   *                   Fargate quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate">Fargate quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> must match one of the supported
   *                   values and the <code>MEMORY</code> values must be one of the values supported for that <code>VCPU</code> value.
   *                   The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16</p>
   *                <dl>
   *                   <dt>value = 0.25</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 512, 1024, or 2048</p>
   *                   </dd>
   *                   <dt>value = 0.5</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 1024, 2048, 3072, or 4096</p>
   *                   </dd>
   *                   <dt>value = 1</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 2048, 3072, 4096, 5120, 6144, 7168, or 8192</p>
   *                   </dd>
   *                   <dt>value = 2</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384</p>
   *                   </dd>
   *                   <dt>value = 4</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456,
   *                            20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720</p>
   *                   </dd>
   *                   <dt>value = 8</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
   *                         </p>
   *                   </dd>
   *                   <dt>value = 16</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *                         </p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The overrides that are sent to a container.</p>
 */
export interface BatchContainerOverrides {
  /**
   * @public
   * <p>The command to send to the container that overrides the default command from the Docker image or the task definition.</p>
   */
  Command?: string[];

  /**
   * @public
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing
   *          environment variables from the Docker image or the task definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>Batch</code>". This naming convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  Environment?: BatchEnvironmentVariable[];

  /**
   * @public
   * <p>The instance type to use for a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.</p>
   *          </note>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include <code>GPU</code>, <code>MEMORY</code>,
   *          and <code>VCPU</code>.</p>
   */
  ResourceRequirements?: BatchResourceRequirement[];
}

/**
 * @public
 * @enum
 */
export const BatchJobDependencyType = {
  N_TO_N: "N_TO_N",
  SEQUENTIAL: "SEQUENTIAL",
} as const;

/**
 * @public
 */
export type BatchJobDependencyType = (typeof BatchJobDependencyType)[keyof typeof BatchJobDependencyType];

/**
 * @public
 * <p>An object that represents an Batch job dependency.</p>
 */
export interface BatchJobDependency {
  /**
   * @public
   * <p>The job ID of the Batch job that's associated with this dependency.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The type of the job dependency.</p>
   */
  Type?: BatchJobDependencyType;
}

/**
 * @public
 * <p>The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">
 *          Automated job retries</a> in the <i>Batch User Guide</i>.</p>
 */
export interface BatchRetryStrategy {
  /**
   * @public
   * <p>The number of times to move a job to the <code>RUNNABLE</code> status. If the value of <code>attempts</code> is greater than one, the job is retried on
   *          failure the same number of attempts as the value.</p>
   */
  Attempts?: number;
}

/**
 * @public
 * <p>The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.</p>
 */
export interface CapacityProviderStrategyItem {
  /**
   * @public
   * <p>The short name of the capacity provider.</p>
   */
  capacityProvider: string | undefined;

  /**
   * @public
   * <p>The weight value designates the relative percentage of the total number of tasks launched
   *          that should use the specified capacity provider. The weight value is taken into consideration
   *          after the base value, if defined, is satisfied.</p>
   */
  weight?: number;

  /**
   * @public
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity
   *          provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *          If no value is specified, the default value of 0 is used. </p>
   */
  base?: number;
}

/**
 * @public
 * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
 */
export interface CloudwatchLogsLogDestination {
  /**
   * @public
   * <p>The Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.</p>
   */
  LogGroupArn?: string;
}

/**
 * @public
 * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
 */
export interface CloudwatchLogsLogDestinationParameters {
  /**
   * @public
   * <p>The Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.</p>
   */
  LogGroupArn: string | undefined;
}

/**
 * @public
 * <p>An action you attempted resulted in an exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of resource that caused the exception.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const RequestedPipeState = {
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type RequestedPipeState = (typeof RequestedPipeState)[keyof typeof RequestedPipeState];

/**
 * @public
 * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
 *          EventBridge ApiDestinations. In the latter case, these are merged with any
 *          InvocationParameters specified on the Connection, with any values from the Connection taking
 *          precedence.</p>
 */
export interface PipeEnrichmentHttpParameters {
  /**
   * @public
   * <p>The path parameter values to be used to populate API Gateway REST API or EventBridge
   *          ApiDestination path wildcards ("*").</p>
   */
  PathParameterValues?: string[];

  /**
   * @public
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST API or
   *          EventBridge ApiDestination.</p>
   */
  HeaderParameters?: Record<string, string>;

  /**
   * @public
   * <p>The query string keys/values that need to be sent as part of request invoking the API Gateway
   *          REST API or EventBridge ApiDestination.</p>
   */
  QueryStringParameters?: Record<string, string>;
}

/**
 * @public
 * <p>The parameters required to set up enrichment on your pipe.</p>
 */
export interface PipeEnrichmentParameters {
  /**
   * @public
   * <p>Valid JSON text passed to the enrichment. In this case, nothing from the event itself is
   *          passed to the enrichment. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data
   *             Interchange Format</a>.</p>
   *          <p>To remove an input template, specify an empty string.</p>
   */
  InputTemplate?: string;

  /**
   * @public
   * <p>Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or
   *          EventBridge ApiDestination.</p>
   *          <p>If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can
   *          use this parameter to specify headers, path parameters, and query string keys/values as part
   *          of your target invoking request. If you're using ApiDestinations, the corresponding Connection
   *          can also have these values configured. In case of any conflicting keys, values from the
   *          Connection take precedence.</p>
   */
  HttpParameters?: PipeEnrichmentHttpParameters;
}

/**
 * @public
 * <p>The Amazon Kinesis Data Firehose logging configuration settings for the pipe.</p>
 */
export interface FirehoseLogDestinationParameters {
  /**
   * @public
   * <p>Specifies the Amazon Resource Name (ARN) of the Kinesis Data Firehose delivery stream to which EventBridge delivers the pipe log records.</p>
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludeExecutionDataOption = {
  ALL: "ALL",
} as const;

/**
 * @public
 */
export type IncludeExecutionDataOption = (typeof IncludeExecutionDataOption)[keyof typeof IncludeExecutionDataOption];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
  TRACE: "TRACE",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const S3OutputFormat = {
  JSON: "json",
  PLAIN: "plain",
  W3C: "w3c",
} as const;

/**
 * @public
 */
export type S3OutputFormat = (typeof S3OutputFormat)[keyof typeof S3OutputFormat];

/**
 * @public
 * <p>The Amazon S3 logging configuration settings for the pipe.</p>
 */
export interface S3LogDestinationParameters {
  /**
   * @public
   * <p>Specifies the name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.</p>
   */
  BucketName: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon Web Services account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.</p>
   */
  BucketOwner: string | undefined;

  /**
   * @public
   * <p>How EventBridge should format the log records.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>json</code>: JSON </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>plain</code>: Plain text</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>w3c</code>: <a href="https://www.w3.org/TR/WD-logfile">W3C extended logging file format</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  OutputFormat?: S3OutputFormat;

  /**
   * @public
   * <p>Specifies any prefix text with which to begin Amazon S3 log object names.</p>
   *          <p>You can use prefixes to organize the data that you store in Amazon S3 buckets.
   *          A prefix is a string of characters at the beginning of the object key name.
   *          A prefix can be any length, subject to the maximum length of the object key name (1,024 bytes).
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a>
   *          in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  Prefix?: string;
}

/**
 * @public
 * <p>Specifies the logging configuration settings for the pipe.</p>
 *          <p>When you call <code>UpdatePipe</code>, EventBridge updates the fields in the
 *             <code>PipeLogConfigurationParameters</code> object atomically as one and overrides
 *          existing values. This is by design. If you don't specify an optional field in any of the
 *             Amazon Web Services service parameters objects
 *             (<code>CloudwatchLogsLogDestinationParameters</code>,
 *             <code>FirehoseLogDestinationParameters</code>, or
 *             <code>S3LogDestinationParameters</code>), EventBridge sets that field to its
 *          system-default value during the update. </p>
 *          <p>For example, suppose when you created the pipe you
 *          specified a Kinesis Data Firehose stream log destination. You then update the pipe to add an
 *          Amazon S3 log destination. In addition to specifying the
 *          <code>S3LogDestinationParameters</code> for the new log destination, you must also
 *          specify the fields in the <code>FirehoseLogDestinationParameters</code> object in order to
 *          retain the Kinesis Data Firehose stream log destination. </p>
 *          <p>For more information on generating pipe log records, see <a href="eventbridge/latest/userguide/eb-pipes-logs.html">Log EventBridge Pipes</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 */
export interface PipeLogConfigurationParameters {
  /**
   * @public
   * <p>The Amazon S3 logging configuration settings for the pipe.</p>
   */
  S3LogDestination?: S3LogDestinationParameters;

  /**
   * @public
   * <p>The Amazon Kinesis Data Firehose logging configuration settings for the pipe.</p>
   */
  FirehoseLogDestination?: FirehoseLogDestinationParameters;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
   */
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestinationParameters;

  /**
   * @public
   * <p>The level of logging detail to include. This applies to all log destinations for the pipe.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-level">Specifying EventBridge Pipes log level</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  Level: LogLevel | undefined;

  /**
   * @public
   * <p>Specify <code>ON</code> to include the execution data (specifically, the <code>payload</code> and <code>awsRequest</code> fields) in the log messages for this pipe.</p>
   *          <p>This applies to all log destinations for the pipe.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data">Including execution data in logs</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *          <p>The default is <code>OFF</code>.</p>
   */
  IncludeExecutionData?: IncludeExecutionDataOption[];
}

/**
 * @public
 * <p>The Secrets Manager secret that stores your broker credentials.</p>
 */
export type MQBrokerAccessCredentials =
  | MQBrokerAccessCredentials.BasicAuthMember
  | MQBrokerAccessCredentials.$UnknownMember;

/**
 * @public
 */
export namespace MQBrokerAccessCredentials {
  /**
   * @public
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface BasicAuthMember {
    BasicAuth: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BasicAuth?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    BasicAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MQBrokerAccessCredentials, visitor: Visitor<T>): T => {
    if (value.BasicAuth !== undefined) return visitor.BasicAuth(value.BasicAuth);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The parameters for using an Active MQ broker as a source.</p>
 */
export interface PipeSourceActiveMQBrokerParameters {
  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * @public
   * <p>The name of the destination queue to consume.</p>
   */
  QueueName: string | undefined;

  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * @public
 * <p>A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.</p>
 */
export interface DeadLetterConfig {
  /**
   * @public
   * <p>The ARN of the specified target for the dead-letter queue. </p>
   *          <p>For Amazon Kinesis stream and Amazon DynamoDB stream sources, specify
   *          either an Amazon SNS topic or Amazon SQS queue ARN.</p>
   */
  Arn?: string;
}

/**
 * @public
 * @enum
 */
export const OnPartialBatchItemFailureStreams = {
  AUTOMATIC_BISECT: "AUTOMATIC_BISECT",
} as const;

/**
 * @public
 */
export type OnPartialBatchItemFailureStreams =
  (typeof OnPartialBatchItemFailureStreams)[keyof typeof OnPartialBatchItemFailureStreams];

/**
 * @public
 * @enum
 */
export const DynamoDBStreamStartPosition = {
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type DynamoDBStreamStartPosition =
  (typeof DynamoDBStreamStartPosition)[keyof typeof DynamoDBStreamStartPosition];

/**
 * @public
 * <p>The parameters for using a DynamoDB stream as a source.</p>
 */
export interface PipeSourceDynamoDBStreamParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * @public
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * @public
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;

  /**
   * @public
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition: DynamoDBStreamStartPosition | undefined;
}

/**
 * @public
 * <p>Filter events using an event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
 *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The event pattern.</p>
   */
  Pattern?: string;
}

/**
 * @public
 * <p>The collection of event patterns used to filter events.</p>
 *          <p>To remove a filter, specify a <code>FilterCriteria</code> object with an empty array of <code>Filter</code> objects.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
 *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 */
export interface FilterCriteria {
  /**
   * @public
   * <p>The event patterns.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 * @enum
 */
export const KinesisStreamStartPosition = {
  AT_TIMESTAMP: "AT_TIMESTAMP",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type KinesisStreamStartPosition = (typeof KinesisStreamStartPosition)[keyof typeof KinesisStreamStartPosition];

/**
 * @public
 * <p>The parameters for using a Kinesis stream as a source.</p>
 */
export interface PipeSourceKinesisStreamParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * @public
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * @public
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;

  /**
   * @public
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition: KinesisStreamStartPosition | undefined;

  /**
   * @public
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading, in Unix time seconds.</p>
   */
  StartingPositionTimestamp?: Date;
}

/**
 * @public
 * <p>The Secrets Manager secret that stores your stream credentials.</p>
 */
export type MSKAccessCredentials =
  | MSKAccessCredentials.ClientCertificateTlsAuthMember
  | MSKAccessCredentials.SaslScram512AuthMember
  | MSKAccessCredentials.$UnknownMember;

/**
 * @public
 */
export namespace MSKAccessCredentials {
  /**
   * @public
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface SaslScram512AuthMember {
    SaslScram512Auth: string;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface ClientCertificateTlsAuthMember {
    SaslScram512Auth?: never;
    ClientCertificateTlsAuth: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SaslScram512Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    SaslScram512Auth: (value: string) => T;
    ClientCertificateTlsAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MSKAccessCredentials, visitor: Visitor<T>): T => {
    if (value.SaslScram512Auth !== undefined) return visitor.SaslScram512Auth(value.SaslScram512Auth);
    if (value.ClientCertificateTlsAuth !== undefined)
      return visitor.ClientCertificateTlsAuth(value.ClientCertificateTlsAuth);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const MSKStartPosition = {
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type MSKStartPosition = (typeof MSKStartPosition)[keyof typeof MSKStartPosition];

/**
 * @public
 * <p>The parameters for using an MSK stream as a source.</p>
 */
export interface PipeSourceManagedStreamingKafkaParameters {
  /**
   * @public
   * <p>The name of the topic that the pipe will read from.</p>
   */
  TopicName: string | undefined;

  /**
   * @public
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition?: MSKStartPosition;

  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * @public
   * <p>The name of the destination queue to consume.</p>
   */
  ConsumerGroupID?: string;

  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: MSKAccessCredentials;
}

/**
 * @public
 * <p>The parameters for using a Rabbit MQ broker as a source.</p>
 */
export interface PipeSourceRabbitMQBrokerParameters {
  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * @public
   * <p>The name of the destination queue to consume.</p>
   */
  QueueName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual host associated with the source broker.</p>
   */
  VirtualHost?: string;

  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * @public
 * <p>The Secrets Manager secret that stores your stream credentials.</p>
 */
export type SelfManagedKafkaAccessConfigurationCredentials =
  | SelfManagedKafkaAccessConfigurationCredentials.BasicAuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.ClientCertificateTlsAuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.SaslScram256AuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.SaslScram512AuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.$UnknownMember;

/**
 * @public
 */
export namespace SelfManagedKafkaAccessConfigurationCredentials {
  /**
   * @public
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface BasicAuthMember {
    BasicAuth: string;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface SaslScram512AuthMember {
    BasicAuth?: never;
    SaslScram512Auth: string;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface SaslScram256AuthMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth: string;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface ClientCertificateTlsAuthMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    BasicAuth: (value: string) => T;
    SaslScram512Auth: (value: string) => T;
    SaslScram256Auth: (value: string) => T;
    ClientCertificateTlsAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelfManagedKafkaAccessConfigurationCredentials, visitor: Visitor<T>): T => {
    if (value.BasicAuth !== undefined) return visitor.BasicAuth(value.BasicAuth);
    if (value.SaslScram512Auth !== undefined) return visitor.SaslScram512Auth(value.SaslScram512Auth);
    if (value.SaslScram256Auth !== undefined) return visitor.SaslScram256Auth(value.SaslScram256Auth);
    if (value.ClientCertificateTlsAuth !== undefined)
      return visitor.ClientCertificateTlsAuth(value.ClientCertificateTlsAuth);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const SelfManagedKafkaStartPosition = {
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type SelfManagedKafkaStartPosition =
  (typeof SelfManagedKafkaStartPosition)[keyof typeof SelfManagedKafkaStartPosition];

/**
 * @public
 * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
 */
export interface SelfManagedKafkaAccessConfigurationVpc {
  /**
   * @public
   * <p>Specifies the subnets associated with the stream. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets?: string[];

  /**
   * @public
   * <p>Specifies the security groups associated with the stream. These security groups must all be in the same VPC. You can specify as many
   *          as five security groups. If you do not specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroup?: string[];
}

/**
 * @public
 * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
 */
export interface PipeSourceSelfManagedKafkaParameters {
  /**
   * @public
   * <p>The name of the topic that the pipe will read from.</p>
   */
  TopicName: string | undefined;

  /**
   * @public
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition?: SelfManagedKafkaStartPosition;

  /**
   * @public
   * <p>An array of server URLs.</p>
   */
  AdditionalBootstrapServers?: string[];

  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * @public
   * <p>The name of the destination queue to consume.</p>
   */
  ConsumerGroupID?: string;

  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;

  /**
   * @public
   * <p>The ARN of the Secrets Manager secret used for certification.</p>
   */
  ServerRootCaCertificate?: string;

  /**
   * @public
   * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
}

/**
 * @public
 * <p>The parameters for using a Amazon SQS stream as a source.</p>
 */
export interface PipeSourceSqsQueueParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * @public
 * <p>The parameters required to set up a source for your pipe.</p>
 */
export interface PipeSourceParameters {
  /**
   * @public
   * <p>The collection of event patterns used to filter events.</p>
   *          <p>To remove a filter, specify a <code>FilterCriteria</code> object with an empty array of <code>Filter</code> objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  FilterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>The parameters for using a Kinesis stream as a source.</p>
   */
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters;

  /**
   * @public
   * <p>The parameters for using a DynamoDB stream as a source.</p>
   */
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;

  /**
   * @public
   * <p>The parameters for using a Amazon SQS stream as a source.</p>
   */
  SqsQueueParameters?: PipeSourceSqsQueueParameters;

  /**
   * @public
   * <p>The parameters for using an Active MQ broker as a source.</p>
   */
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;

  /**
   * @public
   * <p>The parameters for using a Rabbit MQ broker as a source.</p>
   */
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;

  /**
   * @public
   * <p>The parameters for using an MSK stream as a source.</p>
   */
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;

  /**
   * @public
   * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
   */
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
}

/**
 * @public
 * <p>The parameters for using an Batch job as a target.</p>
 */
export interface PipeTargetBatchJobParameters {
  /**
   * @public
   * <p>The job definition used by this job. This value can be one of <code>name</code>, <code>name:revision</code>, or the Amazon Resource Name (ARN) for the job definition.
   *          If name is specified without a revision then the latest active revision is used.</p>
   */
  JobDefinition: string | undefined;

  /**
   * @public
   * <p>The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-),
   *          and underscores (_).</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000.
   *          If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.</p>
   */
  ArrayProperties?: BatchArrayProperties;

  /**
   * @public
   * <p>The retry strategy to use for failed jobs. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.</p>
   */
  RetryStrategy?: BatchRetryStrategy;

  /**
   * @public
   * <p>The overrides that are sent to a container.</p>
   */
  ContainerOverrides?: BatchContainerOverrides;

  /**
   * @public
   * <p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without
   *          specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code>
   *          type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each
   *          dependency to complete before it can begin.</p>
   */
  DependsOn?: BatchJobDependency[];

  /**
   * @public
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and
   *          value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 * <p>The parameters for using an CloudWatch Logs log stream as a target.</p>
 */
export interface PipeTargetCloudWatchLogsParameters {
  /**
   * @public
   * <p>The name of the log stream.</p>
   */
  LogStreamName?: string;

  /**
   * @public
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  Timestamp?: string;
}

/**
 * @public
 * @enum
 */
export const LaunchType = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
} as const;

/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * @public
 * <p>This structure specifies the network configuration for an Amazon ECS task.</p>
 */
export interface NetworkConfiguration {
  /**
   * @public
   * <p>Use this structure to specify the VPC subnets and security groups for the task, and
   *          whether a public IP address is to be used. This structure is relevant only for ECS tasks that
   *          use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

/**
 * @public
 * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can
 *          override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>
 */
export interface EcsEnvironmentVariable {
  /**
   * @public
   * <p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The value of the key-value pair. For environment variables, this is the value of the environment variable.</p>
   */
  value?: string;
}

/**
 * @public
 * @enum
 */
export const EcsEnvironmentFileType = {
  s3: "s3",
} as const;

/**
 * @public
 */
export type EcsEnvironmentFileType = (typeof EcsEnvironmentFileType)[keyof typeof EcsEnvironmentFileType];

/**
 * @public
 * <p>A list of files containing the environment variables to pass to a container. You can
 *          specify up to ten environment files. The file must have a <code>.env</code> file
 *          extension. Each line in an environment file should contain an environment variable in
 *          <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated
 *          as comments and are ignored. For more information about the environment variable file
 *          syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default
 *             environment variables in file</a>.</p>
 *          <p>If there are environment variables specified using the <code>environment</code>
 *             parameter in a container definition, they take precedence over the variables contained
 *             within an environment file. If multiple environment files are specified that contain the
 *             same variable, they're processed from the top down. We recommend that you use unique
 *             variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment
 *                variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>This parameter is only supported for tasks hosted on Fargate using the
 *             following platform versions:</p>
 *          <ul>
 *             <li>
 *                <p>Linux platform version <code>1.4.0</code> or later.</p>
 *             </li>
 *             <li>
 *                <p>Windows platform version <code>1.0.0</code> or later.</p>
 *             </li>
 *          </ul>
 */
export interface EcsEnvironmentFile {
  /**
   * @public
   * <p>The file type to use. The only supported value is <code>s3</code>.</p>
   */
  type: EcsEnvironmentFileType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EcsResourceRequirementType = {
  GPU: "GPU",
  InferenceAccelerator: "InferenceAccelerator",
} as const;

/**
 * @public
 */
export type EcsResourceRequirementType = (typeof EcsResourceRequirementType)[keyof typeof EcsResourceRequirementType];

/**
 * @public
 * <p>The type and amount of a resource to assign to a container. The supported resource
 *          types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with
 *             GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with
 *                Amazon Elastic Inference on Amazon ECS</a> in the
 *          <i>Amazon Elastic Container Service Developer Guide</i>
 *          </p>
 */
export interface EcsResourceRequirement {
  /**
   * @public
   * <p>The type of resource to assign to a container. The supported values are
   *          <code>GPU</code> or <code>InferenceAccelerator</code>.</p>
   */
  type: EcsResourceRequirementType | undefined;

  /**
   * @public
   * <p>The value for the specified resource type.</p>
   *          <p>If the <code>GPU</code> type is used, the value is the number of physical
   *          <code>GPUs</code> the Amazon ECS container agent reserves for the container. The number
   *          of GPUs that's reserved for all containers in a task can't exceed the number of
   *          available GPUs on the container instance that the task is launched on.</p>
   *          <p>If the <code>InferenceAccelerator</code> type is used, the <code>value</code> matches
   *          the <code>deviceName</code> for an InferenceAccelerator specified in a
   *          task definition.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>The overrides that are sent to a container. An empty container override can be passed in. An example of an empty
 *          container override is <code>\{"containerOverrides": [ ] \}</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.</p>
 */
export interface EcsContainerOverride {
  /**
   * @public
   * <p>The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.</p>
   */
  Command?: string[];

  /**
   * @public
   * <p>The number of <code>cpu</code> units reserved for the container, instead of the default value from the task definition. You must also specify a container name.</p>
   */
  Cpu?: number;

  /**
   * @public
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can
   *          override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>
   */
  Environment?: EcsEnvironmentVariable[];

  /**
   * @public
   * <p>A list of files containing the environment variables to pass to a container, instead of the value from the container definition.</p>
   */
  EnvironmentFiles?: EcsEnvironmentFile[];

  /**
   * @public
   * <p>The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition.
   *          If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.</p>
   */
  Memory?: number;

  /**
   * @public
   * <p>The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition.
   *          You must also specify a container name.</p>
   */
  MemoryReservation?: number;

  /**
   * @public
   * <p>The name of the container that receives the override. This parameter is required if any override is specified.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.</p>
   */
  ResourceRequirements?: EcsResourceRequirement[];
}

/**
 * @public
 * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to
 *          expand the total amount of ephemeral storage available, beyond the default amount, for
 *          tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task
 *             storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p>
 *          <note>
 *             <p>This parameter is only supported for tasks hosted on Fargate using
 *                Linux platform version <code>1.4.0</code> or later. This parameter is not supported
 *                for Windows containers on Fargate.</p>
 *          </note>
 */
export interface EcsEphemeralStorage {
  /**
   * @public
   * <p>The total amount, in GiB, of ephemeral storage to set for the task. The minimum
   *          supported value is <code>21</code> GiB and the maximum supported value is
   *          <code>200</code> GiB.</p>
   */
  sizeInGiB: number | undefined;
}

/**
 * @public
 * <p>Details on an Elastic Inference accelerator task override. This parameter is used to
 *          override the Elastic Inference accelerator specified in the task definition. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html">Working with Amazon
 *             Elastic Inference on Amazon ECS</a> in the
 *          <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface EcsInferenceAcceleratorOverride {
  /**
   * @public
   * <p>The Elastic Inference accelerator device name to override for the task. This parameter must match a <code>deviceName</code> specified in the task definition.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>The Elastic Inference accelerator type to use.</p>
   */
  deviceType?: string;
}

/**
 * @public
 * <p>The overrides that are associated with a task.</p>
 */
export interface EcsTaskOverride {
  /**
   * @public
   * <p>One or more container overrides that are sent to a task.</p>
   */
  ContainerOverrides?: EcsContainerOverride[];

  /**
   * @public
   * <p>The cpu override for the task.</p>
   */
  Cpu?: string;

  /**
   * @public
   * <p>The ephemeral storage setting override for the task.</p>
   *          <note>
   *             <p>This parameter is only supported for tasks hosted on Fargate that
   *             use the following platform versions:</p>
   *             <ul>
   *                <li>
   *                   <p>Linux platform version <code>1.4.0</code> or later.</p>
   *                </li>
   *                <li>
   *                   <p>Windows platform version <code>1.0.0</code> or later.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  EphemeralStorage?: EcsEphemeralStorage;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task execution IAM role override for the task. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html">Amazon ECS task
   *             execution IAM role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>The Elastic Inference accelerator override for the task.</p>
   */
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[];

  /**
   * @public
   * <p>The memory override for the task.</p>
   */
  Memory?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers
   *          in this task are granted the permissions that are specified in this role. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Role for Tasks</a>
   *          in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  TaskRoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const PlacementConstraintType = {
  DISTINCT_INSTANCE: "distinctInstance",
  MEMBER_OF: "memberOf",
} as const;

/**
 * @public
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];

/**
 * @public
 * <p>An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer
 *          Guide.</p>
 */
export interface PlacementConstraint {
  /**
   * @public
   * <p>The type of constraint. Use distinctInstance to ensure that each task in a particular
   *          group is running on a different container instance. Use memberOf to restrict the selection to
   *          a group of valid candidates. </p>
   */
  type?: PlacementConstraintType;

  /**
   * @public
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an
   *          expression if the constraint type is <code>distinctInstance</code>. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the Amazon Elastic Container Service Developer Guide.
   *       </p>
   */
  expression?: string;
}

/**
 * @public
 * @enum
 */
export const PlacementStrategyType = {
  BINPACK: "binpack",
  RANDOM: "random",
  SPREAD: "spread",
} as const;

/**
 * @public
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];

/**
 * @public
 * <p>The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer
 *          Guide.</p>
 */
export interface PlacementStrategy {
  /**
   * @public
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on
   *          available candidates. The spread placement strategy spreads placement across available
   *          candidates evenly based on the field parameter. The binpack strategy places tasks on available
   *          candidates that have the least available amount of the resource that is specified with the
   *          field parameter. For example, if you binpack on memory, a task is placed on the instance with
   *          the least amount of remaining memory (but still enough to run the task). </p>
   */
  type?: PlacementStrategyType;

  /**
   * @public
   * <p>The field to apply the placement strategy against. For the spread placement strategy,
   *          valid values are instanceId (or host, which has the same effect), or any platform or custom
   *          attribute that is applied to a container instance, such as attribute:ecs.availability-zone.
   *          For the binpack placement strategy, valid values are cpu and memory. For the random placement
   *          strategy, this field is not used. </p>
   */
  field?: string;
}

/**
 * @public
 * @enum
 */
export const PropagateTags = {
  TASK_DEFINITION: "TASK_DEFINITION",
} as const;

/**
 * @public
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];

/**
 * @public
 * <p>A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses
 *          support tagging.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A string you can use to assign a value. The combination of tag keys and values can help
   *          you organize and categorize your resources.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The parameters for using an Amazon ECS task as a target.</p>
 */
export interface PipeTargetEcsTaskParameters {
  /**
   * @public
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>
   */
  TaskDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is 1.</p>
   */
  TaskCount?: number;

  /**
   * @public
   * <p>Specifies the launch type on which your task is running. The launch type that you specify
   *          here must match one of the launch type (compatibilities) of the target task. The
   *          <code>FARGATE</code> value is supported only in the Regions where Fargate with Amazon ECS
   *          is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">Fargate on Amazon ECS</a> in
   *          the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  LaunchType?: LaunchType;

  /**
   * @public
   * <p>Use this structure if the Amazon ECS task uses the <code>awsvpc</code> network mode. This
   *          structure specifies the VPC subnets and security groups associated with the task, and whether
   *          a public IP address is to be used. This structure is required if <code>LaunchType</code> is
   *          <code>FARGATE</code> because the <code>awsvpc</code> mode is required for Fargate
   *          tasks.</p>
   *          <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use the
   *          <code>awsvpc</code> network mode, the task fails.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * @public
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *          platform version, such as <code>1.1.0</code>.</p>
   *          <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more
   *          information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   *             Versions</a> in the <i>Amazon Elastic Container Service Developer
   *                Guide</i>.</p>
   */
  PlatformVersion?: string;

  /**
   * @public
   * <p>Specifies an Amazon ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;

  /**
   * @public
   * <p>The capacity provider strategy to use for the task.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   *          parameter must be omitted. If no <code>capacityProviderStrategy</code> or launchType is
   *          specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used. </p>
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @public
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the Amazon Elastic Container Service Developer
   *          Guide. </p>
   */
  EnableECSManagedTags?: boolean;

  /**
   * @public
   * <p>Whether or not to enable the execute command functionality for the containers in this
   *          task. If true, this enables execute command functionality on all containers in the
   *          task.</p>
   */
  EnableExecuteCommand?: boolean;

  /**
   * @public
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   *          constraints per task (including constraints in the task definition and those specified at
   *          runtime).</p>
   */
  PlacementConstraints?: PlacementConstraint[];

  /**
   * @public
   * <p>The placement strategy objects to use for the task. You can specify a maximum of five
   *          strategy rules per task. </p>
   */
  PlacementStrategy?: PlacementStrategy[];

  /**
   * @public
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value
   *          is specified, the tags are not propagated. Tags can only be propagated to the task during task
   *          creation. To add tags to a task after task creation, use the <code>TagResource</code> API action. </p>
   */
  PropagateTags?: PropagateTags;

  /**
   * @public
   * <p>The reference ID to use for the task.</p>
   */
  ReferenceId?: string;

  /**
   * @public
   * <p>The overrides that are associated with a task.</p>
   */
  Overrides?: EcsTaskOverride;

  /**
   * @public
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag
   *          consists of a key and an optional value, both of which you define. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags">RunTask</a> in the Amazon ECS API Reference.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The parameters for using an EventBridge event bus as a target.</p>
 */
export interface PipeTargetEventBridgeEventBusParameters {
  /**
   * @public
   * <p>The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is <code>abcde.veo</code>.</p>
   */
  EndpointId?: string;

  /**
   * @public
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * @public
   * <p>The source of the event.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily
   *          concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * @public
   * <p>The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp is provided, the time stamp of the <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">PutEvents</a> call is used.</p>
   */
  Time?: string;
}

/**
 * @public
 * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
 *       EventBridge ApiDestinations.</p>
 */
export interface PipeTargetHttpParameters {
  /**
   * @public
   * <p>The path parameter values to be used to populate API Gateway REST API or EventBridge
   *          ApiDestination path wildcards ("*").</p>
   */
  PathParameterValues?: string[];

  /**
   * @public
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST API or
   *          EventBridge ApiDestination.</p>
   */
  HeaderParameters?: Record<string, string>;

  /**
   * @public
   * <p>The query string keys/values that need to be sent as part of request invoking the API Gateway
   *          REST API or EventBridge ApiDestination.</p>
   */
  QueryStringParameters?: Record<string, string>;
}

/**
 * @public
 * <p>The parameters for using a Kinesis stream as a target.</p>
 */
export interface PipeTargetKinesisStreamParameters {
  /**
   * @public
   * <p>Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters
   *          for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard.
   *          Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this
   *          hashing mechanism, all data records with the same partition key map to the same shard within the stream.</p>
   */
  PartitionKey: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PipeTargetInvocationType = {
  FIRE_AND_FORGET: "FIRE_AND_FORGET",
  REQUEST_RESPONSE: "REQUEST_RESPONSE",
} as const;

/**
 * @public
 */
export type PipeTargetInvocationType = (typeof PipeTargetInvocationType)[keyof typeof PipeTargetInvocationType];

/**
 * @public
 * <p>The parameters for using a Lambda function as a target.</p>
 */
export interface PipeTargetLambdaFunctionParameters {
  /**
   * @public
   * <p>Specify whether to invoke the function synchronously or asynchronously.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REQUEST_RESPONSE</code> (default) - Invoke synchronously. This corresponds to the <code>RequestResponse</code> option in the <code>InvocationType</code> parameter for the Lambda <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax">Invoke</a> API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIRE_AND_FORGET</code> - Invoke asynchronously. This corresponds to the <code>Event</code> option in the <code>InvocationType</code> parameter for the Lambda <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax">Invoke</a> API.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation">Invocation types</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  InvocationType?: PipeTargetInvocationType;
}

/**
 * @public
 * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the
 *       Amazon Redshift Data API BatchExecuteStatement.</p>
 */
export interface PipeTargetRedshiftDataParameters {
  /**
   * @public
   * <p>The name or ARN of the secret that enables access to the database. Required when
   *          authenticating using Secrets Manager.</p>
   */
  SecretManagerArn?: string;

  /**
   * @public
   * <p>The name of the database. Required when authenticating using temporary credentials.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>The database user name. Required when authenticating using temporary credentials.</p>
   */
  DbUser?: string;

  /**
   * @public
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to
   *          identify the query.</p>
   */
  StatementName?: string;

  /**
   * @public
   * <p>Indicates whether to send an event back to EventBridge after the SQL statement
   *          runs.</p>
   */
  WithEvent?: boolean;

  /**
   * @public
   * <p>The SQL statement text to run.</p>
   */
  Sqls: string[] | undefined;
}

/**
 * @public
 * <p>Name/Value pair of a parameter to start execution of a SageMaker Model Building
 *          Pipeline.</p>
 */
export interface SageMakerPipelineParameter {
  /**
   * @public
   * <p>Name of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Value of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The parameters for using a SageMaker pipeline as a target.</p>
 */
export interface PipeTargetSageMakerPipelineParameters {
  /**
   * @public
   * <p>List of Parameter names and values for SageMaker Model Building Pipeline execution.</p>
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}

/**
 * @public
 * <p>The parameters for using a Amazon SQS stream as a target.</p>
 */
export interface PipeTargetSqsQueueParameters {
  /**
   * @public
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;

  /**
   * @public
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The token used for deduplication of sent messages.</p>
   */
  MessageDeduplicationId?: string;
}

/**
 * @public
 * <p>The parameters for using a Step Functions state machine as a target.</p>
 */
export interface PipeTargetStateMachineParameters {
  /**
   * @public
   * <p>Specify whether to invoke the Step Functions state machine synchronously or asynchronously.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REQUEST_RESPONSE</code> (default) - Invoke synchronously. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html">StartSyncExecution</a> in the <i>Step Functions API Reference</i>.</p>
   *                <note>
   *                   <p>
   *                      <code>REQUEST_RESPONSE</code> is not supported for <code>STANDARD</code> state machine workflows.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIRE_AND_FORGET</code> - Invoke asynchronously. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html">StartExecution</a> in the <i>Step Functions API Reference</i>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation">Invocation types</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  InvocationType?: PipeTargetInvocationType;
}

/**
 * @public
 * <p>The parameters required to set up a target for your pipe.</p>
 *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 */
export interface PipeTargetParameters {
  /**
   * @public
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is
   *          passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data
   *             Interchange Format</a>.</p>
   *          <p>To remove an input template, specify an empty string.</p>
   */
  InputTemplate?: string;

  /**
   * @public
   * <p>The parameters for using a Lambda function as a target.</p>
   */
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;

  /**
   * @public
   * <p>The parameters for using a Step Functions state machine as a target.</p>
   */
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;

  /**
   * @public
   * <p>The parameters for using a Kinesis stream as a target.</p>
   */
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters;

  /**
   * @public
   * <p>The parameters for using an Amazon ECS task as a target.</p>
   */
  EcsTaskParameters?: PipeTargetEcsTaskParameters;

  /**
   * @public
   * <p>The parameters for using an Batch job as a target.</p>
   */
  BatchJobParameters?: PipeTargetBatchJobParameters;

  /**
   * @public
   * <p>The parameters for using a Amazon SQS stream as a target.</p>
   */
  SqsQueueParameters?: PipeTargetSqsQueueParameters;

  /**
   * @public
   * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
   *       EventBridge ApiDestinations.</p>
   */
  HttpParameters?: PipeTargetHttpParameters;

  /**
   * @public
   * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the
   *       Amazon Redshift Data API BatchExecuteStatement.</p>
   */
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters;

  /**
   * @public
   * <p>The parameters for using a SageMaker pipeline as a target.</p>
   */
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;

  /**
   * @public
   * <p>The parameters for using an EventBridge event bus as a target.</p>
   */
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;

  /**
   * @public
   * <p>The parameters for using an CloudWatch Logs log stream as a target.</p>
   */
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
}

/**
 * @public
 */
export interface CreatePipeRequest {
  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the pipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The ARN of the source resource.</p>
   */
  Source: string | undefined;

  /**
   * @public
   * <p>The parameters required to set up a source for your pipe.</p>
   */
  SourceParameters?: PipeSourceParameters;

  /**
   * @public
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;

  /**
   * @public
   * <p>The parameters required to set up enrichment on your pipe.</p>
   */
  EnrichmentParameters?: PipeEnrichmentParameters;

  /**
   * @public
   * <p>The ARN of the target resource.</p>
   */
  Target: string | undefined;

  /**
   * @public
   * <p>The parameters required to set up a target for your pipe.</p>
   *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  TargetParameters?: PipeTargetParameters;

  /**
   * @public
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the pipe.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The logging configuration settings for the pipe.</p>
   */
  LogConfiguration?: PipeLogConfigurationParameters;
}

/**
 * @public
 * @enum
 */
export const PipeState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_ROLLBACK_FAILED: "CREATE_ROLLBACK_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_ROLLBACK_FAILED: "DELETE_ROLLBACK_FAILED",
  DELETING: "DELETING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type PipeState = (typeof PipeState)[keyof typeof PipeState];

/**
 * @public
 */
export interface CreatePipeResponse {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>This exception occurs due to unexpected causes.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The number of seconds to wait before retrying the action that caused the exception.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>An entity that you specified does not exist.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * @public
 * <p>A quota has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of resource that caused the exception.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The identifier of the service that caused the exception.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The identifier of the quota that caused the exception.</p>
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * <p>An action was throttled.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the service that caused the exception.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The identifier of the quota that caused the exception.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The number of seconds to wait before retrying the action that caused the exception.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Indicates that an error has occurred while performing a validate operation.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The message of the exception.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>Indicates that an error has occurred while performing a validate operation.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The list of fields for which validation failed and the corresponding failure messages.</p>
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface DeletePipeRequest {
  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RequestedPipeStateDescribeResponse = {
  DELETED: "DELETED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type RequestedPipeStateDescribeResponse =
  (typeof RequestedPipeStateDescribeResponse)[keyof typeof RequestedPipeStateDescribeResponse];

/**
 * @public
 */
export interface DeletePipeResponse {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeStateDescribeResponse;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface DescribePipeRequest {
  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>The Amazon Kinesis Data Firehose logging configuration settings for the pipe.</p>
 */
export interface FirehoseLogDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis Data Firehose delivery stream to which EventBridge delivers the pipe log records.</p>
   */
  DeliveryStreamArn?: string;
}

/**
 * @public
 * <p>The Amazon S3 logging configuration settings for the pipe.</p>
 */
export interface S3LogDestination {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The prefix text with which to begin Amazon S3 log object names.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a>
   *          in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.</p>
   */
  BucketOwner?: string;

  /**
   * @public
   * <p>The format EventBridge uses for the log records.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>json</code>: JSON </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>plain</code>: Plain text</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>w3c</code>: <a href="https://www.w3.org/TR/WD-logfile">W3C extended logging file format</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  OutputFormat?: S3OutputFormat;
}

/**
 * @public
 * <p>The logging configuration settings for the pipe.</p>
 */
export interface PipeLogConfiguration {
  /**
   * @public
   * <p>The Amazon S3 logging configuration settings for the pipe.</p>
   */
  S3LogDestination?: S3LogDestination;

  /**
   * @public
   * <p>The Amazon Kinesis Data Firehose logging configuration settings for the pipe.</p>
   */
  FirehoseLogDestination?: FirehoseLogDestination;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
   */
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestination;

  /**
   * @public
   * <p>The level of logging detail to include. This applies to all log destinations for the pipe.</p>
   */
  Level?: LogLevel;

  /**
   * @public
   * <p>Whether the execution data (specifically, the <code>payload</code>,  <code>awsRequest</code>, and <code>awsResponse</code> fields) is included in the log messages for this pipe.</p>
   *          <p>This applies to all log destinations for the pipe.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data">Including execution data in logs</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  IncludeExecutionData?: IncludeExecutionDataOption[];
}

/**
 * @public
 */
export interface DescribePipeResponse {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the pipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeStateDescribeResponse;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The reason the pipe is in its current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The ARN of the source resource.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The parameters required to set up a source for your pipe.</p>
   */
  SourceParameters?: PipeSourceParameters;

  /**
   * @public
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;

  /**
   * @public
   * <p>The parameters required to set up enrichment on your pipe.</p>
   */
  EnrichmentParameters?: PipeEnrichmentParameters;

  /**
   * @public
   * <p>The ARN of the target resource.</p>
   */
  Target?: string;

  /**
   * @public
   * <p>The parameters required to set up a target for your pipe.</p>
   *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  TargetParameters?: PipeTargetParameters;

  /**
   * @public
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the pipe.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The logging configuration settings for the pipe.</p>
   */
  LogConfiguration?: PipeLogConfiguration;
}

/**
 * @public
 */
export interface ListPipesRequest {
  /**
   * @public
   * <p>A value that will return a subset of the pipes associated with this account. For example, <code>"NamePrefix": "ABC"</code> will return
   *          all endpoints with "ABC" in the name.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The prefix matching the pipe source.</p>
   */
  SourcePrefix?: string;

  /**
   * @public
   * <p>The prefix matching the pipe target.</p>
   */
  TargetPrefix?: string;

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination
   *          token will return an HTTP 400 InvalidToken error.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of pipes to include in the response.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>An object that represents a pipe. Amazon EventBridgePipes connect event sources to targets and reduces the need for specialized knowledge and integration code.</p>
 */
export interface Pipe {
  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The reason the pipe is in its current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The ARN of the source resource.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The ARN of the target resource.</p>
   */
  Target?: string;

  /**
   * @public
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;
}

/**
 * @public
 */
export interface ListPipesResponse {
  /**
   * @public
   * <p>The pipes returned by the call.</p>
   */
  Pipes?: Pipe[];

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination
   *          token will return an HTTP 400 InvalidToken error.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the pipe for which you want to view tags.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of key-value pairs to associate with the pipe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartPipeRequest {
  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartPipeResponse {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface StopPipeRequest {
  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopPipeResponse {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>The parameters for using an Active MQ broker as a source.</p>
 */
export interface UpdatePipeSourceActiveMQBrokerParameters {
  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * @public
 * <p>The parameters for using a DynamoDB stream as a source.</p>
 */
export interface UpdatePipeSourceDynamoDBStreamParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * @public
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * @public
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;
}

/**
 * @public
 * <p>The parameters for using a Kinesis stream as a source.</p>
 */
export interface UpdatePipeSourceKinesisStreamParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * @public
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * @public
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * @public
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;
}

/**
 * @public
 * <p>The parameters for using an MSK stream as a source.</p>
 */
export interface UpdatePipeSourceManagedStreamingKafkaParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: MSKAccessCredentials;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * @public
 * <p>The parameters for using a Rabbit MQ broker as a source.</p>
 */
export interface UpdatePipeSourceRabbitMQBrokerParameters {
  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * @public
 * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
 */
export interface UpdatePipeSourceSelfManagedKafkaParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * @public
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;

  /**
   * @public
   * <p>The ARN of the Secrets Manager secret used for certification.</p>
   */
  ServerRootCaCertificate?: string;

  /**
   * @public
   * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
}

/**
 * @public
 * <p>The parameters for using a Amazon SQS stream as a source.</p>
 */
export interface UpdatePipeSourceSqsQueueParameters {
  /**
   * @public
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * @public
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * @public
 * <p>The parameters required to set up a source for your pipe.</p>
 */
export interface UpdatePipeSourceParameters {
  /**
   * @public
   * <p>The collection of event patterns used to filter events.</p>
   *          <p>To remove a filter, specify a <code>FilterCriteria</code> object with an empty array of <code>Filter</code> objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  FilterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>The parameters for using a Kinesis stream as a source.</p>
   */
  KinesisStreamParameters?: UpdatePipeSourceKinesisStreamParameters;

  /**
   * @public
   * <p>The parameters for using a DynamoDB stream as a source.</p>
   */
  DynamoDBStreamParameters?: UpdatePipeSourceDynamoDBStreamParameters;

  /**
   * @public
   * <p>The parameters for using a Amazon SQS stream as a source.</p>
   */
  SqsQueueParameters?: UpdatePipeSourceSqsQueueParameters;

  /**
   * @public
   * <p>The parameters for using an Active MQ broker as a source.</p>
   */
  ActiveMQBrokerParameters?: UpdatePipeSourceActiveMQBrokerParameters;

  /**
   * @public
   * <p>The parameters for using a Rabbit MQ broker as a source.</p>
   */
  RabbitMQBrokerParameters?: UpdatePipeSourceRabbitMQBrokerParameters;

  /**
   * @public
   * <p>The parameters for using an MSK stream as a source.</p>
   */
  ManagedStreamingKafkaParameters?: UpdatePipeSourceManagedStreamingKafkaParameters;

  /**
   * @public
   * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
   */
  SelfManagedKafkaParameters?: UpdatePipeSourceSelfManagedKafkaParameters;
}

/**
 * @public
 */
export interface UpdatePipeRequest {
  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the pipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The parameters required to set up a source for your pipe.</p>
   */
  SourceParameters?: UpdatePipeSourceParameters;

  /**
   * @public
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;

  /**
   * @public
   * <p>The parameters required to set up enrichment on your pipe.</p>
   */
  EnrichmentParameters?: PipeEnrichmentParameters;

  /**
   * @public
   * <p>The ARN of the target resource.</p>
   */
  Target?: string;

  /**
   * @public
   * <p>The parameters required to set up a target for your pipe.</p>
   *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  TargetParameters?: PipeTargetParameters;

  /**
   * @public
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The logging configuration settings for the pipe.</p>
   */
  LogConfiguration?: PipeLogConfigurationParameters;
}

/**
 * @public
 */
export interface UpdatePipeResponse {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState;

  /**
   * @public
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState;

  /**
   * @public
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs associated with the pipe.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the pipe.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the pipe.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AwsVpcConfigurationFilterSensitiveLog = (obj: AwsVpcConfiguration): any => ({
  ...obj,
  ...(obj.Subnets && { Subnets: SENSITIVE_STRING }),
  ...(obj.SecurityGroups && { SecurityGroups: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CapacityProviderStrategyItemFilterSensitiveLog = (obj: CapacityProviderStrategyItem): any => ({
  ...obj,
  ...(obj.capacityProvider && { capacityProvider: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeEnrichmentHttpParametersFilterSensitiveLog = (obj: PipeEnrichmentHttpParameters): any => ({
  ...obj,
  ...(obj.PathParameterValues && { PathParameterValues: SENSITIVE_STRING }),
  ...(obj.HeaderParameters && { HeaderParameters: SENSITIVE_STRING }),
  ...(obj.QueryStringParameters && { QueryStringParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeEnrichmentParametersFilterSensitiveLog = (obj: PipeEnrichmentParameters): any => ({
  ...obj,
  ...(obj.InputTemplate && { InputTemplate: SENSITIVE_STRING }),
  ...(obj.HttpParameters && { HttpParameters: PipeEnrichmentHttpParametersFilterSensitiveLog(obj.HttpParameters) }),
});

/**
 * @internal
 */
export const PipeSourceActiveMQBrokerParametersFilterSensitiveLog = (obj: PipeSourceActiveMQBrokerParameters): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: obj.Credentials }),
  ...(obj.QueueName && { QueueName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
  ...(obj.Pattern && { Pattern: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FilterCriteriaFilterSensitiveLog = (obj: FilterCriteria): any => ({
  ...obj,
  ...(obj.Filters && { Filters: obj.Filters.map((item) => FilterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PipeSourceManagedStreamingKafkaParametersFilterSensitiveLog = (
  obj: PipeSourceManagedStreamingKafkaParameters
): any => ({
  ...obj,
  ...(obj.TopicName && { TopicName: SENSITIVE_STRING }),
  ...(obj.ConsumerGroupID && { ConsumerGroupID: SENSITIVE_STRING }),
  ...(obj.Credentials && { Credentials: obj.Credentials }),
});

/**
 * @internal
 */
export const PipeSourceRabbitMQBrokerParametersFilterSensitiveLog = (obj: PipeSourceRabbitMQBrokerParameters): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: obj.Credentials }),
  ...(obj.QueueName && { QueueName: SENSITIVE_STRING }),
  ...(obj.VirtualHost && { VirtualHost: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SelfManagedKafkaAccessConfigurationVpcFilterSensitiveLog = (
  obj: SelfManagedKafkaAccessConfigurationVpc
): any => ({
  ...obj,
  ...(obj.Subnets && { Subnets: SENSITIVE_STRING }),
  ...(obj.SecurityGroup && { SecurityGroup: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeSourceSelfManagedKafkaParametersFilterSensitiveLog = (
  obj: PipeSourceSelfManagedKafkaParameters
): any => ({
  ...obj,
  ...(obj.TopicName && { TopicName: SENSITIVE_STRING }),
  ...(obj.AdditionalBootstrapServers && { AdditionalBootstrapServers: SENSITIVE_STRING }),
  ...(obj.ConsumerGroupID && { ConsumerGroupID: SENSITIVE_STRING }),
  ...(obj.Credentials && { Credentials: obj.Credentials }),
  ...(obj.Vpc && { Vpc: SelfManagedKafkaAccessConfigurationVpcFilterSensitiveLog(obj.Vpc) }),
});

/**
 * @internal
 */
export const PipeSourceParametersFilterSensitiveLog = (obj: PipeSourceParameters): any => ({
  ...obj,
  ...(obj.FilterCriteria && { FilterCriteria: FilterCriteriaFilterSensitiveLog(obj.FilterCriteria) }),
  ...(obj.ActiveMQBrokerParameters && {
    ActiveMQBrokerParameters: PipeSourceActiveMQBrokerParametersFilterSensitiveLog(obj.ActiveMQBrokerParameters),
  }),
  ...(obj.RabbitMQBrokerParameters && {
    RabbitMQBrokerParameters: PipeSourceRabbitMQBrokerParametersFilterSensitiveLog(obj.RabbitMQBrokerParameters),
  }),
  ...(obj.ManagedStreamingKafkaParameters && {
    ManagedStreamingKafkaParameters: PipeSourceManagedStreamingKafkaParametersFilterSensitiveLog(
      obj.ManagedStreamingKafkaParameters
    ),
  }),
  ...(obj.SelfManagedKafkaParameters && {
    SelfManagedKafkaParameters: PipeSourceSelfManagedKafkaParametersFilterSensitiveLog(obj.SelfManagedKafkaParameters),
  }),
});

/**
 * @internal
 */
export const NetworkConfigurationFilterSensitiveLog = (obj: NetworkConfiguration): any => ({
  ...obj,
  ...(obj.awsvpcConfiguration && {
    awsvpcConfiguration: AwsVpcConfigurationFilterSensitiveLog(obj.awsvpcConfiguration),
  }),
});

/**
 * @internal
 */
export const PlacementConstraintFilterSensitiveLog = (obj: PlacementConstraint): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlacementStrategyFilterSensitiveLog = (obj: PlacementStrategy): any => ({
  ...obj,
  ...(obj.field && { field: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetEcsTaskParametersFilterSensitiveLog = (obj: PipeTargetEcsTaskParameters): any => ({
  ...obj,
  ...(obj.NetworkConfiguration && {
    NetworkConfiguration: NetworkConfigurationFilterSensitiveLog(obj.NetworkConfiguration),
  }),
  ...(obj.CapacityProviderStrategy && {
    CapacityProviderStrategy: obj.CapacityProviderStrategy.map((item) =>
      CapacityProviderStrategyItemFilterSensitiveLog(item)
    ),
  }),
  ...(obj.PlacementConstraints && {
    PlacementConstraints: obj.PlacementConstraints.map((item) => PlacementConstraintFilterSensitiveLog(item)),
  }),
  ...(obj.PlacementStrategy && {
    PlacementStrategy: obj.PlacementStrategy.map((item) => PlacementStrategyFilterSensitiveLog(item)),
  }),
  ...(obj.ReferenceId && { ReferenceId: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PipeTargetEventBridgeEventBusParametersFilterSensitiveLog = (
  obj: PipeTargetEventBridgeEventBusParameters
): any => ({
  ...obj,
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
  ...(obj.DetailType && { DetailType: SENSITIVE_STRING }),
  ...(obj.Source && { Source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetHttpParametersFilterSensitiveLog = (obj: PipeTargetHttpParameters): any => ({
  ...obj,
  ...(obj.PathParameterValues && { PathParameterValues: SENSITIVE_STRING }),
  ...(obj.HeaderParameters && { HeaderParameters: SENSITIVE_STRING }),
  ...(obj.QueryStringParameters && { QueryStringParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetKinesisStreamParametersFilterSensitiveLog = (obj: PipeTargetKinesisStreamParameters): any => ({
  ...obj,
  ...(obj.PartitionKey && { PartitionKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetRedshiftDataParametersFilterSensitiveLog = (obj: PipeTargetRedshiftDataParameters): any => ({
  ...obj,
  ...(obj.Database && { Database: SENSITIVE_STRING }),
  ...(obj.DbUser && { DbUser: SENSITIVE_STRING }),
  ...(obj.StatementName && { StatementName: SENSITIVE_STRING }),
  ...(obj.Sqls && { Sqls: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SageMakerPipelineParameterFilterSensitiveLog = (obj: SageMakerPipelineParameter): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetSageMakerPipelineParametersFilterSensitiveLog = (
  obj: PipeTargetSageMakerPipelineParameters
): any => ({
  ...obj,
  ...(obj.PipelineParameterList && {
    PipelineParameterList: obj.PipelineParameterList.map((item) => SageMakerPipelineParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PipeTargetSqsQueueParametersFilterSensitiveLog = (obj: PipeTargetSqsQueueParameters): any => ({
  ...obj,
  ...(obj.MessageGroupId && { MessageGroupId: SENSITIVE_STRING }),
  ...(obj.MessageDeduplicationId && { MessageDeduplicationId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetParametersFilterSensitiveLog = (obj: PipeTargetParameters): any => ({
  ...obj,
  ...(obj.InputTemplate && { InputTemplate: SENSITIVE_STRING }),
  ...(obj.KinesisStreamParameters && {
    KinesisStreamParameters: PipeTargetKinesisStreamParametersFilterSensitiveLog(obj.KinesisStreamParameters),
  }),
  ...(obj.EcsTaskParameters && {
    EcsTaskParameters: PipeTargetEcsTaskParametersFilterSensitiveLog(obj.EcsTaskParameters),
  }),
  ...(obj.SqsQueueParameters && {
    SqsQueueParameters: PipeTargetSqsQueueParametersFilterSensitiveLog(obj.SqsQueueParameters),
  }),
  ...(obj.HttpParameters && { HttpParameters: PipeTargetHttpParametersFilterSensitiveLog(obj.HttpParameters) }),
  ...(obj.RedshiftDataParameters && {
    RedshiftDataParameters: PipeTargetRedshiftDataParametersFilterSensitiveLog(obj.RedshiftDataParameters),
  }),
  ...(obj.SageMakerPipelineParameters && {
    SageMakerPipelineParameters: PipeTargetSageMakerPipelineParametersFilterSensitiveLog(
      obj.SageMakerPipelineParameters
    ),
  }),
  ...(obj.EventBridgeEventBusParameters && {
    EventBridgeEventBusParameters: PipeTargetEventBridgeEventBusParametersFilterSensitiveLog(
      obj.EventBridgeEventBusParameters
    ),
  }),
});

/**
 * @internal
 */
export const CreatePipeRequestFilterSensitiveLog = (obj: CreatePipeRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.SourceParameters && { SourceParameters: PipeSourceParametersFilterSensitiveLog(obj.SourceParameters) }),
  ...(obj.EnrichmentParameters && {
    EnrichmentParameters: PipeEnrichmentParametersFilterSensitiveLog(obj.EnrichmentParameters),
  }),
  ...(obj.TargetParameters && { TargetParameters: PipeTargetParametersFilterSensitiveLog(obj.TargetParameters) }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribePipeResponseFilterSensitiveLog = (obj: DescribePipeResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.SourceParameters && { SourceParameters: PipeSourceParametersFilterSensitiveLog(obj.SourceParameters) }),
  ...(obj.EnrichmentParameters && {
    EnrichmentParameters: PipeEnrichmentParametersFilterSensitiveLog(obj.EnrichmentParameters),
  }),
  ...(obj.TargetParameters && { TargetParameters: PipeTargetParametersFilterSensitiveLog(obj.TargetParameters) }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPipesRequestFilterSensitiveLog = (obj: ListPipesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPipesResponseFilterSensitiveLog = (obj: ListPipesResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePipeSourceSelfManagedKafkaParametersFilterSensitiveLog = (
  obj: UpdatePipeSourceSelfManagedKafkaParameters
): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: obj.Credentials }),
  ...(obj.Vpc && { Vpc: SelfManagedKafkaAccessConfigurationVpcFilterSensitiveLog(obj.Vpc) }),
});

/**
 * @internal
 */
export const UpdatePipeSourceParametersFilterSensitiveLog = (obj: UpdatePipeSourceParameters): any => ({
  ...obj,
  ...(obj.FilterCriteria && { FilterCriteria: FilterCriteriaFilterSensitiveLog(obj.FilterCriteria) }),
  ...(obj.ActiveMQBrokerParameters && { ActiveMQBrokerParameters: obj.ActiveMQBrokerParameters }),
  ...(obj.RabbitMQBrokerParameters && { RabbitMQBrokerParameters: obj.RabbitMQBrokerParameters }),
  ...(obj.ManagedStreamingKafkaParameters && { ManagedStreamingKafkaParameters: obj.ManagedStreamingKafkaParameters }),
  ...(obj.SelfManagedKafkaParameters && {
    SelfManagedKafkaParameters: UpdatePipeSourceSelfManagedKafkaParametersFilterSensitiveLog(
      obj.SelfManagedKafkaParameters
    ),
  }),
});

/**
 * @internal
 */
export const UpdatePipeRequestFilterSensitiveLog = (obj: UpdatePipeRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.SourceParameters && { SourceParameters: UpdatePipeSourceParametersFilterSensitiveLog(obj.SourceParameters) }),
  ...(obj.EnrichmentParameters && {
    EnrichmentParameters: PipeEnrichmentParametersFilterSensitiveLog(obj.EnrichmentParameters),
  }),
  ...(obj.TargetParameters && { TargetParameters: PipeTargetParametersFilterSensitiveLog(obj.TargetParameters) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});
