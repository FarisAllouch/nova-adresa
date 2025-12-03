export default function VideoHero() {
    return (
        <section className="w-full h-[80vh] bg-black overflow-hidden">
            <video
            src="/novaadresa-promo.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            />
      </section>
    )
}