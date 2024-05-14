import { createContext, useContext } from "react"
import { useFetchData } from "../lib/hooks";
import { TagContext } from "./TagContextProvider";

type WaifuDisplayContext = {
    artists: string;
    urls: string;
    isLoading: boolean;
}

export const WaifuDisplayContext = createContext<WaifuDisplayContext | null>(null)


export default function WaifuDisplayContextProvider({ children }: {children: React.ReactNode}) {
    const context = useContext(TagContext)
    const { tag } = context
    const { artists, urls, isLoading } = useFetchData(tag)
  return (
    <WaifuDisplayContext.Provider value={{
        artists,
        urls,
        isLoading
    }}>{children}</WaifuDisplayContext.Provider>
  )
}
