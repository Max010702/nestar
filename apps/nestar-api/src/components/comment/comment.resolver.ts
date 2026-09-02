import { Resolver } from '@nestjs/graphql';

@Resolver()
export class CommentResolver {
  imports: [
		MongooseModule.forFeature([
			{
				name: 'Property',
				schema: PropertySchema,
			},
		]),
		AuthModule,
		ViewModule,
		MemberModule,
}
