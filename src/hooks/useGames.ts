import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform{
    id: number,
    name: string,
    slug: string
}

export interface Games {
    id: number;
    name: string;
    background_image : string
    parent_platforms : { platform : Platform} [],
    metacritic: number
  }
  
function useGames(selectedGenre : Genre | null) {
    return useData<Games>('/games', {params : {genres : selectedGenre?.id}}, [selectedGenre?.id])
}

export default useGames