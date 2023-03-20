export default function Section({ idSection, ...props }) {
  return (
    <div className="  mt-4 shadow-sm shadow-[rgba(29,28,68,255)] font-poppins cursor-default">
      <section id={idSection} className="text-white relative">
        <img
          className="object-fill h-52 sm:h-64 xl:h-[84vh] h- w-screen opacity-50"
          src="src/assets/gradient-technology-symbols-background/6031903.jpg"
          alt=""
        />
        <div className="mx-5 lg:mx-15 xl:mx-20 absolute left-0  lg:top-32 xl:top-64 top-28">
          <p className="text-xl lg:text-2xl xl:text-6xl text-slate-500] font-semibold">
            Preparem-se para o maior evento de tecnologia do sul do Piauí!
          </p>
          <h1 className=" text-2xl md:text-6xl lg:text-8xl font-bold  text-bold text-transparent bg-caisTech-grandient  bg-clip-text">
            Cais Tech 2023
          </h1>
        </div>
      </section>
    </div>
  );
}
