import businessData from "@data/businessData.json";
export const BUSINESS = businessData;

export default function business() {
  return (
    <>
      {BUSINESS.map((item) => {
        var style = item.text === "Hairdressing Salons" ? "bg-red-500" : "";

        return (
          <a
            key={item.text}
            href={item.href}
            className="w-32 h-40 flex flex-col justify-evenly items-center rounded-2xl overflow-hidden border-[2px] border-Primary hover:bg-Primary hover:border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:text-White"
          >
            <img
              src={item.srcImg}
              alt={`${item.text} Image`}
              className={`w-20 rounded-md ${style}`}
            />
            <p className="text-center font-semibold">{item.text}</p>
          </a>
        );
      })}
    </>
  );
}
