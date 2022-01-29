import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StagesState {
  stages: Array<StageType | DynamicStageType>;
}

const initialState: StagesState = {
  stages: [],
};

export const stagesSlice = createSlice({
  name: 'stages',
  initialState,
  reducers: {
    setStages: (
      state,
      action: PayloadAction<Array<StageType | DynamicStageType>>
    ) => {
      state.stages = action.payload;
    },
  },
});

export const { setStages } = stagesSlice.actions;

export default stagesSlice.reducer;