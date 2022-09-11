import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTrendingMovies = createAsyncThunk(
  "movie/getTrendingMovies",
  async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=d4309b32067c9fd40912bc109c3da02a`
    );
    const data = res.json();

    return data;
  }
);

export const getMovieDetails=createAsyncThunk("movie/getMovieDetails",async(obj)=>{
    
    const res=await fetch(`https://api.themoviedb.org/3/${obj.media_type}/${obj.id}?api_key=d4309b32067c9fd40912bc109c3da02a&language=en-US&append_to_response=videos,images`).then(res=>res.json())
    return res;
})


const initialState = {
  trendingmovies: null,
  trendingMovieDetail: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    storeTendingMovie: (state, action) => {
      state.trendingmovies = action.payload;
    },

    storeMovieDetails:(state,action)=>{
        state.trendingMovieDetail=action.payload
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.trendingmovies = action.payload.results;
        state.loading="Filfilled"
      })
      .addCase(getTrendingMovies.pending, (state) => {
        state.loading = "Loading...";
      })
      .addCase(getTrendingMovies.rejected, (state) => {
        state.loading = "Rejected...";
      })
      .addCase(getMovieDetails.pending, (state)=>{
        state.loading="Pending..."
      })
      .addCase(getMovieDetails.fulfilled,(state,action)=>{
        state.trendingMovieDetail=action.payload
      })
  },
});

export const { storeTendingMovie,getATrendingMovie,storeMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
