export default function Home() {
  const videoFile = '/Veo_3_1_A_cinematic__slow_motion_montage_of_a_modern__stylish_group_of_moms_in_a_wellness_studio_in.mp4'

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-screen looping video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centred text */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <p className="text-white text-center font-light tracking-[0.25em] text-2xl md:text-4xl lg:text-5xl leading-relaxed">
          Motherhood.&nbsp; Identity.&nbsp; Connection.
        </p>
      </div>
    </div>
  )
}
