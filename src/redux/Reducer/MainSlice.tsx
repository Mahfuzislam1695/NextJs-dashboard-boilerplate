import { createSlice } from "@reduxjs/toolkit";

interface MainState {
	add: boolean;
}

const initialState: MainState = {
	add: false,
};

export const MainSlice = createSlice({
	name: "Initial",
	initialState,
	reducers: {
		handleAddModalOpen: (state) => {
			state.add = true;
		},
	},
});

export const { handleAddModalOpen } = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
	Initial: MainState;
};
