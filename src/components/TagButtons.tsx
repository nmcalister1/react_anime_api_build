import { tags } from "../lib/constants";
import { useTagContext } from "../lib/hooks";
import WaifuButton from "./WaifuButton";


export default function TagButtons() {
    const context = useTagContext()
    const { setTag } = context
  return (
    <>
      {tags.map(text => (
            <WaifuButton key={text} text={text} setTag={setTag} />
    ))}
    </>
  )
}
