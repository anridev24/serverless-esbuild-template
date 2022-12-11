type ResponseBody = {
	message?: string
	data: any
}

export default function responseBuilder(statusCode?: number, body?: ResponseBody) {
	return {
		statusCode: statusCode || 200,
		body: JSON.stringify(body, null, 4)
	}
}
