import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const getTrendingMovies=createAsyncThunk('movie/getTrendingMovies',async()=>{
    return fetch (`https://api.themoviedb.org/3/trending/all/day?api_key=d4309b32067c9fd40912bc109c3da02a`)
    .then(data=>(data.json()).results)
    // .then(k=>console.log(k.results))
    
    // .then(data=>((console.log(data.results))))
})

const initialState={
    trendingmovie:[],
    loading:null
}

const movieSlice=createSlice({
 name: 'movie',
 initialState,
 reducers:{
    storeTendingMovie:(state,action)=>{
        state.trendingmovie=action.payload
    },
    extraReducers:(builder)=>{
       builder
        .addCase(getTrendingMovies.fulfilled,(state,action)=>{
            state.trendingmovie=action.payload
            console.log("a")
        })
        .addCase(getTrendingMovies.pending,(state)=>{
            state.loading="Loading..."
            console.log("a")
        })
        .addCase(getTrendingMovies.rejected,(state)=>{
            state.loading="Rejected..."
        })

    }
 }
})

export const {storeTendingMovie}=movieSlice.actions;
export default movieSlice.reducer;