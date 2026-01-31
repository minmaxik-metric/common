import { PROTO_PATHS } from "@citec-spbu/contracts"
import { AUTH_SERVICE_NAME } from "@citec-spbu/contracts/gen/ts/auth"

export const GRPC_CLIENTS = {
	AUTH_PACKAGE: {
		package: AUTH_SERVICE_NAME,
		protoPath: PROTO_PATHS.AUTH
	}
} as const
