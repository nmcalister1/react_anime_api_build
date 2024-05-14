import { InfinitySpin } from "react-loader-spinner";
import WaifuImage from "./WaifuImage";
import WaifuTitle from "./WaifuTitle";
import { useWaifuDisplayContext } from "../lib/hooks";


export default function WaifuDisplayWrapper() {
    const context = useWaifuDisplayContext()
    const { artists, urls, isLoading } = context
  return (
    <>
      {isLoading ? 
        <div className="flex justify-center pt-20">
          <InfinitySpin
            width="200"
            color="#4fa94d"
            />
        </div> : 
        <>
          <WaifuTitle artists={artists} />
          <WaifuImage urls={urls} />
        </>
      }
    </>
  )
}
