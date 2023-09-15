import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface IInt {
	age: number,
	procent: number,
	initialСapital: number | '',
	monthlyReplenishment: number | '',
	finallyProfit: number
}

const initialState: IInt = {
	age: 0,
	procent: 0,
	initialСapital: '',
	monthlyReplenishment: '',
	finallyProfit: 0
}

const main = createSlice({
	name: 'main',
	initialState,
	reducers: {
		getAge(state, action: PayloadAction<"+" | '-'>) {
			if (action.payload === '+') {
				state.age++
			}
			if (action.payload === '-') {
				if (state.age === 0) {
					return
				}
				state.age--
			}
		},
		getProcent(state, action: PayloadAction<"+" | '-'>) {
			if (action.payload === '+') {
				state.procent++
			}
			if (action.payload === '-') {
				if (state.procent === 0) {
					return
				}
				state.procent--
			}
		},
		getInitialСapital(state, action) {
			state.initialСapital = parseInt(action.payload)
		},
		getMonthlyReplenishment(state, action) {
			state.monthlyReplenishment = parseInt(action.payload)
		},
		getFinallyProfit(state) {
			if (
				state.initialСapital !== "" &&
				state.monthlyReplenishment !== ""
			) {
				let finallyResult = state.initialСapital
				for (let i = 0; i < state.age; i++) {
					finallyResult =
						((finallyResult + state.monthlyReplenishment * 12) / 100) * (state.procent + 100)
				}
				state.finallyProfit = parseInt(finallyResult.toFixed())
			}

		}
	}
})

export const mainSlice = main.reducer
export const { getAge, getProcent, getFinallyProfit, getInitialСapital, getMonthlyReplenishment } = main.actions