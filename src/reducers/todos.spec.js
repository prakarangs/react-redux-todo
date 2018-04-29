import todos from "./todos";

describe('todos Reducer', () => {
	it('should handle init state', () => {
		expect(
			todos(undefined, {})
		).toEqual([])
	})

	it('should handle ADD_TODO', () => {
		expect(
			todos([], {
				type: 'ADD_TODO',
				id: 0,
				text: 'My first todo'
			})
		).toEqual([{
			id: 0,
			text: 'My first todo',
			completed: false
		}])

		expect(
			todos([{
				id: 0,
				text: 'My first todo',
				completed: false
			}], {
				type: 'ADD_TODO',
				id: 1,
				text: 'Second to do right here!'
			})
		).toEqual([{
			id: 0,
			text: 'My first todo',
			completed: false
		},
		{
			id: 1,
			text: 'Second to do right here!',
			completed: false
		}])

	})

	it('should handle TOGGLE_TODO', () => {
		expect(
			todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
		).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
	})
})