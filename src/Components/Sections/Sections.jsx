export default function Section({ idSection, ...props }) {
  return (
    <div className="   shadow-sm shadow-[rgba(29,28,68,255)] font-poppins cursor-default">
      <section id={idSection} className="text-white relative">
        <img
          className=" h-52 sm:h-64 xl:h-[90vh] w-screen"
          src="https://i.imgur.com/LBn6IWR.png"
          alt=""
        />
        <div className="mx-5 lg:mx-15 xl:mx-20 absolute left-0  lg:top-32 xl:top-64 top-28">
          <h1 className=" text-2xl md:text-6xl lg:text-9xl font-bold  text-bold text-white">
            Cais Tech 2023
          </h1>
          <p className="text-xl lg:text-2xl xl:text-4xl text-slate-500] font-semibold">
            Transformando dados em conhecimento
          </p>
        </div>
      </section>
    </div>
  );
}
