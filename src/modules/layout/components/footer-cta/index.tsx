import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-blue-100 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Our full catalog of products and services</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore products and services</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/heaterscontrolslogo.png"
            alt=""
            className="absolute inset-0"
            fill
            sizes="100vw"
            style={{
              objectFit: "scale-down",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
