import Footer from "../components/Footer.jsx";

const LatestBlogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <div className="w-full flex flex-col md:flex-row p-4 md:p-10 gap-5">

          
          <div className="w-full md:w-3/12 bg-white shadow-2xl flex flex-col p-5 md:p-7 order-2 md:order-1">

            <div className="w-full h-12 bg-neutral-300 flex justify-center items-center">
              <p className="font-semibold">Other Blogs</p>
            </div>

            <div className="border-b border-neutral-300 p-5 cursor-pointer hover:text-blue-700">
              <p className="font-semibold underline">
                Kenapa Harga Bitcoin Naik Signifikan
              </p>
            </div>
            <div className="border-b border-neutral-300 p-5 cursor-pointer hover:text-blue-700">
              <p className="font-semibold underline">
                Kenapa Kita Rungkad Terus di Crypto
              </p>
            </div>
            <div className="border-b border-neutral-300 p-5 cursor-pointer hover:text-blue-700">
              <p className="font-semibold underline">
                Cara Dapet 1 Triliun Sebelum Lulus Kuliah
              </p>
            </div>
          </div>

          <div className="w-full md:w-9/12 p-3 order-1 md:order-2">
            <div className="border-b border-neutral-300 p-5">
              <p className="font-bold text-xl text-center md:text-start">
                Mengapa Harga Bitcoin Naik Signifikan
              </p>
            </div>

            <div className="w-full flex flex-col items-center pt-3">
              <img className="w-32" src="/Assets/timoti.png" alt="" />
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus esse quam labore, cum et a debitis totam repudiandae? Nobis, vero. Sequi necessitatibus tenetur dolorum porro neque, impedit quas in sint accusantium modi quam possimus laudantium recusandae voluptate, maxime cumque sapiente aliquid omnis ab pariatur aliquam! Totam ducimus debitis culpa, blanditiis est at voluptatem enim nostrum quia obcaecati impedit animi quas odit repellat iure laborum eos, molestiae sequi assumenda accusamus molestias aperiam ratione illum ad. Placeat ea nihil commodi, nesciunt officiis sapiente aspernatur voluptatum dignissimos repellendus voluptas accusantium soluta expedita distinctio ullam id. Facere assumenda blanditiis doloremque vero laudantium, reprehenderit sed ipsam quaerat magnam ut velit minima mollitia amet recusandae dolorem nisi aut enim, voluptates unde suscipit harum sint placeat temporibus. Vero in optio qui inventore impedit quibusdam hic ipsam animi incidunt quidem nisi unde vel, sapiente cumque sit quasi sint architecto, doloremque necessitatibus laudantium quod, ullam nihil. Ullam quidem ad quas rem quia, numquam amet dolorum, porro impedit error ipsa architecto repellat ipsam tempore mollitia esse consectetur sint nihil eveniet labore voluptatibus, asperiores ratione officia repellendus! Recusandae consectetur dolor, earum facere nam ad magni! Deleniti debitis magni dicta numquam molestias possimus. Tenetur voluptas eius explicabo voluptatem dolor culpa dolorem neque?
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LatestBlogs;
