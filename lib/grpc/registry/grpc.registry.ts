import { PROTO_PATHS } from "@citec-spbu/contracts"
import { ACCOUNT_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/account"
import { AUTH_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/auth"
import { USERS_V1_PACKAGE_NAME } from "@citec-spbu/contracts/gen/ts/users"
import { GrpcOptions } from "@nestjs/microservices"
import path from "node:path"

const grpcLoader: NonNullable<GrpcOptions["options"]["loader"]> = {
	keepCase: false,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
}

export const GRPC_CLIENTS = {
	AUTH_PACKAGE: {
		package: AUTH_V1_PACKAGE_NAME,
		protoPath: [PROTO_PATHS.AUTH, PROTO_PATHS.ACCOUNT],
		loader: { ...grpcLoader, includeDirs: [path.dirname(PROTO_PATHS.ACCOUNT)] }
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
	}
} as const satisfies Record<string, Omit<GrpcOptions["options"], "url">>
