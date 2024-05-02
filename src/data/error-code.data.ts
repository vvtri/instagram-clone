type ErrorCode = 'notFound';

export class ApiError extends Error {
	code: ErrorCode;

	constructor(errorCode: ErrorCode) {
		super();

		this.code = errorCode;
	}
}
