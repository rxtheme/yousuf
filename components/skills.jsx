import Status from "./Status";

export default function Skills({ languageName }) {
  return (
    <div className=" rounded-lg border-[1px] px-6 py-2 text-center backdrop-blur-lg">
      <h2 className="py-2">{languageName}</h2>
      <Status />
    </div>
  );
}
