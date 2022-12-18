import { configureStore } from "@reduxjs/toolkit";

import Favorites from "./Favorites";
export const Store = configureStore({

    reducer:{
        Favoritesmeals:Favorites
    }

})
