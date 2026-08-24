import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { MemberAuthType, MemberType } from '../../enums/member.enum';
import * as mongoose from 'mongoose';

@InputType()
export class ViewInput {
	@IsNotEmpty()
	@Field(() => String)
	memberId: mongoose.ObjectId;

	@IsNotEmpty()
	@Field(() => String)
	viewRefId: mongoose.ObjectId;

	@IsNotEmpty()
	@Field(() => String)
	viewGroup: string;
}
