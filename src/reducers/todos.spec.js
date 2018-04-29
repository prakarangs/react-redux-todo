import todos from "./todos";

describe('todos Reducer', () => {
	it('should handle init state', () => {
		expect(
			todos(undefined, {})
		).toEqual([])
	})
})