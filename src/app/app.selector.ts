import {AppRootStateType} from "../store/store";

export const selectIsLoading = (state: AppRootStateType) => state.app.isLoading