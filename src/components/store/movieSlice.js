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

export const searchMovie=createAsyncThunk("movie/searchMovie",async({moviename})=>{

  const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d4309b32067c9fd40912bc109c3da02a&language=en-US&query=${moviename}&page=1`).then(res=>res.json())
  return res;
})
export const nowShowing=createAsyncThunk("movie/nowShowing",async(thunk)=>{
  const res=await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=d4309b32067c9fd40912bc109c3da02a&language=en-US`).then(res=>res.json())
  return res;
})

const initialState = {
  trendingmovies: null,
  trendingMovieDetail: null,
  searchedMovie:null,
  nowShowing:null,
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
    },
    removeSearchList:(state)=>{
      state.searchedMovie=null;
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
      .addCase(searchMovie.pending,(state,action)=>{
        state.searchedMovie=null;
      })
      .addCase(searchMovie.fulfilled,(state,action)=>{
        state.searchedMovie=action.payload.results
      })
      .addCase(nowShowing.fulfilled,(state,action)=>{
        state.nowShowing=action.payload.results
      })
  },
});

export const { storeTendingMovie,getATrendingMovie,storeMovieDetails,removeSearchList } = movieSlice.actions;
export default movieSlice.reducer;
