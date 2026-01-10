import Status from "./Status";

export default function Skills({ languageName, level }) {
  return (
    <div className="mx-auto min-w-32 rounded-lg border bg-white/10 px-6 py-2 text-center backdrop-blur-lg lg:min-w-40">
      <h2 className="py-2">{languageName}</h2>
      <Status level={level} />
    </div>
  );
}
