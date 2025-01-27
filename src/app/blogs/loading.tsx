import LoadingCard from "@/components/ui/LoadingCard";


export default async function Loading() {
  const ids = [0, 1, 2, 3, 4, 5];
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="grid lg:grid-cols-3 gap-4 p-5">
      {ids?.map((id: Number) => (
        <LoadingCard key={id + "loadingCard"} />
      ))}
    </div>
  );
}
