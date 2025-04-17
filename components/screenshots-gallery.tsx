"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// Dados de exemplo para os screenshots
const screenshots = [
  {
    id: 1,
    src: "/images/IMG_5069.png",
    alt: "Screenshot de chamada 1",
  },
  {
    id: 2,
    src: "/images/IMG_5070.png",
    alt: "Screenshot de chamada 2",
  },
  {
    id: 3,
    src: "/images/IMG_5071.png",
    alt: "Screenshot de chamada 3",
  },
  {
    id: 4,
    src: "/images/IMG_5072.png",
    alt: "Screenshot de chamada 4",
  },
  {
    id: 5,
    src: "/images/IMG_5075.png",
    alt: "Screenshot de chamada 5",
  },
  {
    id: 6,
    src: "/images/IMG_5076.png",
    alt: "Screenshot de chamada 6",
  },
  {
    id: 7,
    src: "/images/IMG_5081.png",
    alt: "Screenshot de chamada 6",
  },
  {
    id: 8,
    src: "/images/IMG_5082.png",
    alt: "Screenshot de chamada 6",
  },
  {
    id: 9,
    src: "/images/IMG_5083.png",
    alt: "Screenshot de chamada 6",
  },
  {
    id: 10,
    src: "/images/IMG_5084.png",
    alt: "Screenshot de chamada 6",
  },
  {
    id: 11,
    src: "/images/IMG_5085.png",
    alt: "Screenshot de chamada 6",
  },
]

export function ScreenshotsGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
    setOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.id}
            className="cursor-pointer rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
            onClick={() => handleImageClick(screenshot.src)}
          >
            <div className="relative aspect-[1170/2532] w-full">
              <Image src={screenshot.src || "/placeholder.svg"} alt={screenshot.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 bg-black/50 text-white rounded-full p-2"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar</span>
          </button>
          {selectedImage && (
            <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Screenshot ampliado"
                width={1170}
                height={2532}
                className="object-contain max-h-[90vh]"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
