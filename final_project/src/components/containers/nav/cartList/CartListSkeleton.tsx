import { Skeleton } from "@/components/ui/skeleton";

const CartListSkeleton = () => {
  return (
    <div className="flex gap-4">
      <Skeleton className="mr-2 aspect-square w-16 bg-white" />
      <div className="w-full max-w-64 space-y-2">
        <Skeleton className="h-6 bg-white" />
        <Skeleton className="h-4 w-5 bg-white" />
      </div>
    </div>
  );
};

export default CartListSkeleton;
