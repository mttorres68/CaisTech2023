export default function Section({ idSection, ...props }) {
  return (
    <div className="  mt-4 shadow-sm shadow-[rgba(29,28,68,255)] font-poppins cursor-default">
      <section id={idSection} className="text-white relative">
        <img
          className=" h-52 sm:h-64 xl:h-[84vh] w-screen opacity-50"
          src="src/assets/background-logo.jpg"
          alt=""
        />
        <div className="mx-5 lg:mx-15 xl:mx-20 absolute left-0  lg:top-32 xl:top-64 top-28">
          <p className="text-xl lg:text-2xl xl:text-6xl text-slate-500] font-semibold">
            Congresso Anual de Informática do Sul do Piauí
          </p>
          <h1 className=" text-2xl md:text-6xl lg:text-8xl font-bold  text-bold text-white">
            Cais Tech 2023
          </h1>
        </div>
      </section>
    </div>
  );
}
