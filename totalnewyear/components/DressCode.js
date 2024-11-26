import { Image } from "antd";

export default function DressCode() {
  return (
    <>
      <div className="sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-12">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {/* Image 1 */}
          <Image className="w-full h-auto" alt="DressCode 1" src="/d1.png" />
          {/* Image 2 */}
          <Image className="w-full h-auto" alt="DressCode 2" src="/d2.png" />
          {/* Image 3 */}
          <Image className="w-full h-auto" alt="DressCode 3" src="/d3.png" />
          {/* Image 4 */}
          <Image className="w-full h-auto" alt="DressCode 4" src="/d4.png" />
          {/* Image 5 */}
          <Image className="w-full h-auto" alt="DressCode 5" src="/d5.png" />
          {/* Image 6 */}
          <Image className="w-full h-auto" alt="DressCode 6" src="/d6.png" />
          {/* Image 7 */}
          <Image className="w-full h-auto" alt="DressCode 7" src="/d7.png" />
          {/* Image 8 */}
          <Image className="w-full h-auto" alt="DressCode 8" src="/d8.png" />
          {/* Image 9 */}
          <Image className="w-full h-auto" alt="DressCode 9" src="/d9.png" />
          <Image className="w-full h-auto" alt="DressCode 9" src="/d10.png" />
          <Image className="w-full h-auto" alt="DressCode 9" src="/d11.png" />
          <Image className="w-full h-auto" alt="DressCode 9" src="/d12.png" />
        </Image.PreviewGroup>
      </div>
    </>
  );
}
