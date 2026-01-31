import { PROTO_PATHS } from "@citec-spbu/contracts"
import { ACCOUNT_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/account"
import { AUTH_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/auth"
import { USERS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/users"
import { GrpcOptions } from "@nestjs/microservices"

export const GRPC_CLIENTS = {
	AUTH_PACKAGE: {
		package: AUTH_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.AUTH
	},
	ACCOUNT_PACKAGE: {
		package: ACCOUNT_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.ACCOUNT
	},
	USERS_PACKAGE: {
		package: USERS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.USERS
	}
} as const satisfies Record<string, Omit<GrpcOptions["options"], "url">>
