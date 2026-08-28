import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdat', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const availableMemberSorts = ['createdat', 'updatedAt', 'memberLikes', 'memberViews'];

/* IMAGE CONFIGURATION */
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const validExtensions = ['.jpg', '.jpeg', '.png'];
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return uuidv4() + ext;
};

export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
