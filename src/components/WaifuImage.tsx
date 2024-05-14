type WaifuImageProps = {
    urls: string
}

export default function WaifuImage({ urls }: WaifuImageProps) {
  return (
    <div className="flex justify-center py-5">
        <img src={urls} alt="waifu image" width={500} height={500} />
    </div>
  )
}
