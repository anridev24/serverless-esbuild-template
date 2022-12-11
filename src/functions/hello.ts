import responseBuilder from '../utils/response-builder'

export default async function (event: any) {
	return responseBuilder(200, { message: 'Hello World!', data: event })
}
