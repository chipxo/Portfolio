import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";

import { RootState } from "@/app/rootReducer.tsx";
import { useAppDispatch } from "@/app/store.tsx";
import { fetchFilterCategoryPrice } from "@/hooks/fetchFilterCategoryPrice.tsx";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ByPrice from "./ByPrice";
import ByName from "./ByName";

const FilterProducts = () => {
  const dispatch = useAppDispatch();

  const { lowestPr, highestPr } = useSelector(
    (state: RootState) => state.categoryFilteredProducts,
  );

  const byPrice = useRef<HTMLButtonElement | null>(null);
  const [sortByPrice, setSortByPrice] = useState(false);

  const byName = useRef<HTMLButtonElement | null>(null);
  const [sortByName, setSortByName] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchFilterCategoryPrice({ lowestPr, highestPr, categoryId }));
  }, [lowestPr, highestPr, categoryId]);

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h2>Filter</h2>
        </AccordionTrigger>
        <AccordionContent className="px-2">
          <ByPrice
            ref={byPrice}
            onRefClick={() => {
              setSortByPrice((pr) => !pr);
              sortByName && byName.current?.click();
            }}
          />

          <ByName
            ref={byName}
            onRefClick={() => {
              setSortByName((pr) => !pr);
              sortByPrice && byPrice.current?.click();
            }}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterProducts;
