type WaifuTitleProps = {
    artists: string
}

export default function WaifuTitle({artists}: WaifuTitleProps) {
  return (
    <div className="flex justify-center pt-10">
        {artists != "" && <h1 className="text-4xl font-extrabold text-purple-600 tracking-wide uppercase">{artists}</h1>}
    </div>
  )
}
