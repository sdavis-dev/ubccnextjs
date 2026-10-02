'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img src="/images/ubministries.png" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_9384.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_7956.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/sda-birmingham2017jpg.jpg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_4212.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/kimandyolanda.jpg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_0607.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_0686.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_9513.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_0279.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_9798.jpeg" alt="/" /></div>
          <div className="embla__slide"><img src="/images/IMG_3763.png" alt="/" /></div>
        </div>
      </div>
      <div className="content">
      </div>
    </div>
  )
}