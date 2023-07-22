import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"
export const adminGetRooms = createAsyncThunk("admin/getRooms", async (roomsData, { rejectWithValue, getState }) => {
    try {
        const data = await api.get("/admin")
        return data.data.result
    } catch (error) {
        return rejectWithValue(error || error.message)
    }

})
export const adminGetBookedRooms = createAsyncThunk("admin/getBookedRooms", async (roomsData, { rejectWithValue, getState }) => {
    try {
        const data = await api.get("/admin/allboked")
        return data.data.result
    } catch (error) {
        return rejectWithValue(error || error.message)
    }

})
export const adminGetAllusers = createAsyncThunk("admin/getAllusers", async (roomsData, { rejectWithValue, getState }) => {
    try {
        const data = await api.get("/admin/alluser")
        return data.data.result
    } catch (error) {
        return rejectWithValue(error || error.message)
    }

})
export const adminAddRooms = createAsyncThunk("admin/addRooms", async (roomsData, { rejectWithValue, getState }) => {
    try {
        console.log(roomsData)
        await api.post("/admin/addRooms", roomsData)
        return true
    } catch (error) {
        return rejectWithValue(error || error.message)
    }

})
export const adminDeleteRoom = createAsyncThunk("admin/deleteRoom", async (id, { rejectWithValue, getState }) => {
    try {

        console.log(id)
        await api.delete(`/admin/${id}`)
        return true
    } catch (error) {
        return rejectWithValue(error || error.message)
    }

})
// export const adminUpdateRoom = createAsyncThunk("admin/UpdateRoom", async (roomData, { rejectWithValue, getState }) => {
//     try {

//         await api.patch(`/admin/${roomData.id}`, roomData)
//         return true
//     } catch (error) {
//         return rejectWithValue(error || error.message)
//     }

// })