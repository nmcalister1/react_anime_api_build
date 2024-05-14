import { createContext, useState } from "react"

type TagContext = {
    tag: string;
    setTag: React.Dispatch<React.SetStateAction<string>>
}

export const TagContext = createContext<TagContext>({
    tag: "waifu-1234",
    setTag: () => {}
})


export default function TagContextProvider({ children }: {children: React.ReactNode}) {
    const [ tag, setTag ] = useState("waifu-1234")
  return (
    <TagContext.Provider value={{
        tag,
        setTag,
    }}>{children}</TagContext.Provider>
  )
}


