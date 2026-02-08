import { PROTO_PATHS } from "@citec-spbu/contracts"
import { ACCOUNT_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/account"
import { AUTH_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/auth"
import { COMMITS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/commits"
import { ISSUE_ASSIGNEES_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/issue_assignees"
import { ISSUES_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/issues"
import { ORGANIZATIONS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/organizations"
import { PULL_REQUESTS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/pull_requests"
import { REPOSITORIES_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/repositories"
import { REPOSITORY_MEMBERSHIPS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/repository_memberships"
import { SCM_USERS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/scm_users"
import { USERS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/users"
import { GrpcOptions } from "@nestjs/microservices"

const grpcLoader: NonNullable<GrpcOptions["options"]["loader"]> = {
	keepCase: false,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
	includeDirs: [PROTO_PATHS.ROOT]
}

export const GRPC_CLIENTS = {
	AUTH_PACKAGE: {
		package: AUTH_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.AUTH,
		loader: grpcLoader
	},
	ACCOUNT_PACKAGE: {
		package: ACCOUNT_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.ACCOUNT,
		loader: grpcLoader
	},
	USERS_PACKAGE: {
		package: USERS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.USERS,
		loader: grpcLoader
	},
	COMMITS_PACKAGE: {
		package: COMMITS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.COMMITS,
		loader: grpcLoader
	},
	PULL_REQUESTS_PACKAGE: {
		package: PULL_REQUESTS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.PULL_REQUESTS,
		loader: grpcLoader
	},
	ISUUES_PACKAGE: {
		package: ISSUES_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.ISSUES,
		loader: grpcLoader
	},
	REPOSITORIES_PACKAGE: {
		package: REPOSITORIES_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.REPOSITORIES,
		loader: grpcLoader
	},
	SCM_USERS_PACKAGE: {
		package: SCM_USERS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.SCM_USERS,
		loader: grpcLoader
	},
	ORGANIZATIONS_PACKAGE: {
		package: ORGANIZATIONS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.ORGANIZATIONS,
		loader: grpcLoader
	},
	ISSUE_ASSIGNEES_PACKAGE: {
		package: ISSUE_ASSIGNEES_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.ISSUES_ASSIGNEES,
		loader: grpcLoader
	},
	REPOSITORY_MEMBERSHIP_PACKAGE: {
		package: REPOSITORY_MEMBERSHIPS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.REPOSITORY_MEMBERSHIPS,
		loader: grpcLoader
	}
} as const satisfies Record<string, Omit<GrpcOptions["options"], "url">>
