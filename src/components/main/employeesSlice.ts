import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {employeesApi} from "./employees.api";
import {toast, ToastOptions} from "react-toastify";
import {appActions} from "../../app/app.slice";

const initialState: EmployeesType = {
    employees: []
}

type EmployeesType = {
    employees: EmployeeType[]
}

export type EmployeeType = {
    address: AddressType
    company: CompanyType
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}
export type AddressType = {
    city: string
    geo: GeoType
    street: string
    suite: string
    zipcode: string
}
type GeoType = {
    lat: string
    lng: string
}
type CompanyType = {
    name: string
    catchPhrase: string
    bs: string
}

export const toastError: ToastOptions = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

export const getEmployees = createAsyncThunk('employees/getEmployees', async (ids: string[], { dispatch }) => {
   dispatch(appActions.setIsLoading({isLoading: true}))
    try {
        const res = await employeesApi.getEmployees(ids)
        return res.data
    } catch (err) {
        toast.error('Произошла ошибка', toastError)
        return []
    } finally {
        dispatch(appActions.setIsLoading({isLoading: false}))
    }
})

const slice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.employees = action.payload
            })
    }
})


export const employeesSlice = slice.reducer
export const employeesThunks = {getEmployees};