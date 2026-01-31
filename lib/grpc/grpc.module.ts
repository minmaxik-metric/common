import { type DynamicModule, Module, Provider } from "@nestjs/common"

import { GRPC_CLIENT_PREFIX } from "./constants/grpc.constants"
import { GrpcClientFactory } from "./factory/grpc-factory"
import { GRPC_CLIENTS } from "./registry/grpc.registry"

@Module({})
export class GrpcModule {
	public static register(
		clients: Record<keyof typeof GRPC_CLIENTS, string>
	): DynamicModule {
		const entries = Object.entries(clients) as Array<
			[keyof typeof GRPC_CLIENTS, string]
		>
		return {
			module: GrpcModule,
			providers: [
				GrpcClientFactory,
				...entries.map(([token, url]) => {
					const config = GRPC_CLIENTS[token]

					return {
						provide: `${GRPC_CLIENT_PREFIX}_${token}`,
						useFactory: (factory: GrpcClientFactory) => {
							const client = factory.createClient({
								options: {
									package: config.package,
									protoPath: config.protoPath,
									url
								}
							})
							factory.register(token, client)

							return client
						},
						inject: [GrpcClientFactory]
					} as Provider
				})
			],
			exports: [
				GrpcClientFactory,
				...entries.map(([token, _]) => `${GRPC_CLIENT_PREFIX}_${token}`)
			]
		}
	}
}
