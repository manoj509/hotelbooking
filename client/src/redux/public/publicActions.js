import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"


export const registerUser = createAsyncThunk("public/register", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/register", userData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})
export const loginUser = createAsyncThunk("public/login", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/login", userData)
        localStorage.setItem("info", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})

export const bookRoom = createAsyncThunk("public/book", async (bookingData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/book", bookingData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})

export const cheakDate = createAsyncThunk("public/compareDate", async (date, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/chekDate", date)
        const newData = { ...data, date }
        return newData
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})
export const getKeyAction = createAsyncThunk("public/getkey", async (date, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/user/getkey")
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})


export const initiatePaymentAction = createAsyncThunk("user/initiate-payment", async (Coursefee, { rejectWithValue, getState }) => {
    try {

        const { data } = await api.post(`/user/initiate-Payment`, { Coursefee })
        console.log(data)
        return data.result
    } catch (error) {

        return rejectWithValue(error.response.data.message || error.message)

    }

})


export const verifyPaymentAction = createAsyncThunk("public/verify-payment", async (response, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post(`/user/payment-verification`, response)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})