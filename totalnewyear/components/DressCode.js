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
          <Image
            className="w-full h-auto"
            alt="DressCode 1"
            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1jFVIC.img?w=2250&h=3000&m=4&q=74"
          />
          {/* Image 2 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 2"
            src="https://media.glamourmagazine.co.uk/photos/65ee3f98bc67dbc87b84770e/master/w_1920%2Cc_limit/OSCARS%2520FASHION%2520B2%2520100324%2520GettyImages-2074307223.jpg"
          />
          {/* Image 3 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 3"
            src="https://crfashionbook.com/wp-content/uploads/2023/04/GettyImages-1473150930-scaled.jpg"
          />
          {/* Image 4 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 4"
            src="https://i.pinimg.com/originals/b5/c1/3e/b5c13e8111897736fbaf33919f0fd7dc.jpg"
          />
          {/* Image 5 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 5"
            src="https://static01.nyt.com/images/2024/03/10/fashion/poupay-oscars-2024-2842-zendaya-Toned/poupay-oscars-2024-2842-zendaya-Toned-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
          />
          {/* Image 6 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 6"
            src="https://media.glamourmagazine.co.uk/photos/65ee455041f877e69302447e/master/w_1600%2Cc_limit/OSCARS%2520DATE%2520NIGHT%2520100324%2520GettyImages-2074347693.jpg"
          />
          {/* Image 7 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 7"
            src="https://people.com/thmb/Z4p9oWjytl2fIsRUyS8JSxne42c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(574x0:576x2)/will-smith-03aeeb699711450db3684223388cf391.jpg"
          />
          {/* Image 8 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 8"
            src="https://wwd.com/wp-content/uploads/2024/03/Oscar-2024-red-carpet-arrival-LM-198.jpg?w=800"
          />
          {/* Image 9 */}
          <Image
            className="w-full h-auto"
            alt="DressCode 9"
            src="https://media.glamour.com/photos/6240f225adac5ac8b3eda8a8/master/w_1600%2Cc_limit/GettyImages-1388060055.jpg"
          />
          <Image
            className="w-full h-auto"
            alt="DressCode 9"
            src="https://www.redcarpet-fashionawards.com/wp-content/uploads/2023/03/Cara-Delevingne-.jpeg"
          />
          <Image
            className="w-full h-auto"
            alt="DressCode 9"
            src="https://img.buzzfeed.com/buzzfeed-static/static/2018-03/4/19/asset/buzzfeed-prod-fastlane-02/sub-buzz-26552-1520209640-2.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"
          />
          <Image
            className="w-full h-auto"
            alt="DressCode 9"
            src="https://variety.com/wp-content/uploads/2024/03/GettyImages-2066791497.jpg?w=800"
          />
        </Image.PreviewGroup>
      </div>
    </>
  );
}
