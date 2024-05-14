type WaifuButtonProps = {
    text: string;
    setTag: React.Dispatch<React.SetStateAction<string>>
}

export default function WaifuButton({ text, setTag }: WaifuButtonProps) {
  return (
    <div className="py-8 px-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setTag(`${text}-${new Date().getMilliseconds()}`)}>{text}</button>
    </div>
  )
}
