import { createSlice, nanoid } from "@reduxjs/toolkit";
// side bar change value
const initialState = {
    value: true,
}
const cardData = [
    {
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},


]
const Comedy=[{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Horror=[{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const News=[{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Crime=[{
    id: nanoid(),
    title: "crime",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Sport=[{
    id: nanoid(),
    title: "sport",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Favorites=[{
    id: nanoid(),
    title: "sport",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]




//sport slice
const sportSlice = createSlice({
    name:'sport',
    initialState: { Sport },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})

//crime slice
const crimeSlice = createSlice({
    name: 'crime',
    initialState: { Crime },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})

//news slice
const newsSlice = createSlice({
    name: 'news',
    initialState: { News },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})

//Horror slice with reducer
const horrorSlice = createSlice({
    name: 'horror',
    initialState: { Horror },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})



const comedySlice = createSlice({
    name: 'comedy',
    initialState: { Comedy },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})




     const cardSlice = createSlice({
    name: 'card',
    initialState: { cardData },
    reducers: {
            
        }
    })

    //favorite slice
    const favoriteSlice = createSlice({
            name:'favorite',
            initialState: { Favorites },
            reducers:{

            }})


const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
            changeValue: (state, action) => {
                state.value = action.payload;
            },
        }
    })

    export const { changeValue } = sideBarSlice.actions;
    export const { Updatecard } = cardSlice.actions;
    export const { Updatecomedy } = comedySlice.actions;
    export const { Updatehorror } = horrorSlice.actions;
    export const { UpdateNews } = newsSlice.actions;
    export const selectCard = state => state.card.cardData;
    export const selectComedy = state => state.comedy.Comedy;
    export const selectHorror = state => state.horror.Horror;
    export const selectNews = state => state.news.News;
    export const selectCrime = state => state.crime.Crime;
    export const selectSport = state => state.sport.Sport;
    export const selectFavorites=state=>state.favorite.Favorites
    export const selectSideBar = state => state.sidebar.value;
    export const sideBarReducer= sideBarSlice.reducer;
    export const cardReducer= cardSlice.reducer;
    export const comedyReducer= comedySlice.reducer;
    export const horrorReducer= horrorSlice.reducer;
    export const newsReducer= newsSlice.reducer;
    export const crimeReducer= crimeSlice.reducer;
    export const sportReducer= sportSlice.reducer;
    export const favoriteReducer=favoriteSlice.reducer;

  console.log(selectCard)
