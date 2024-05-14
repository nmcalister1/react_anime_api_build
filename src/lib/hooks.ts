import { useContext, useEffect, useState } from "react";
import { BASE_API_URL } from "./constants"
import { WaifuDisplayContext } from "../contexts/WaifuDisplayContextProvider";
import { TagContext } from "../contexts/TagContextProvider";

type ArtistArrayProp = {
    name: string;
  }
  
  type AnimePicture = {
    artist: ArtistArrayProp;
    url: string;
  }


const fetchAnimeImage = async (tag: string, signal: AbortSignal): Promise<AnimePicture> => {

    const params: { [key: string]: string | string[] | boolean } = {
        included_tags: tag,
        is_nsfw: false,
      };

      const queryParams = new URLSearchParams();

      for (const key in params) {
        if (Array.isArray(params[key])) {
          (params[key] as string[]).forEach((value) => {
            queryParams.append(key, value);
          });
        } else {
          queryParams.set(key, params[key] as string);
        }
      }

    const response = await fetch(`${BASE_API_URL}?${queryParams.toString()}`, {
        signal,
        })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.description)
    }

    const data = await response.json()
    console.log(data.images[0])
    return data.images[0]
}

export function useFetchData(tag: string){
    const [artists, setArtist] = useState("")
    const [urls, setUrl] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        const fetchDataAndSetState = async () => {
            const new_tag = tag.substring(0, tag.lastIndexOf("-"))
            setIsLoading(true)
            const { artist, url } = await fetchAnimeImage(new_tag, signal);
            let name = ""
            if (artist !== null){
                name = artist.name
            }
            setIsLoading(false)
            setArtist(name);
            setUrl(url);
        };
    
        fetchDataAndSetState();
    
        return () => {
          controller.abort()
        };
      }, [tag]);
    

    return { artists, urls, isLoading } as const
}

export function useWaifuDisplayContext(){
    const context = useContext(WaifuDisplayContext)
    if (!context){
        throw new Error(
          "useWaifuDisplayContext must be used within a WaifuDisplayContextProvider"
        )
      }
    return context
}

export function useTagContext(){
    const context = useContext(TagContext)
    if (!context){
        throw new Error(
          "useTagContext must be used within a TagContextProvider"
        )
      }
    return context
}