export default function PageTitle({ title, description = "" }) {
  return (
    <>
      <div className="flex flex-col mb-6">
        <h1 className="text-lg font-semibold md:text-2xl ">{title}</h1>
        {description && <span className="opacity-55">{description}</span>}
      </div>
    </>
  );
}
