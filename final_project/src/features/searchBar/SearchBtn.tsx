import { Button } from "@/components/ui/button";
import { mOpacity } from "@/utils/motionSettings";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const SearchBtn = () => {
  return (
    <m.div {...mOpacity} className="absolute right-0 top-0 z-[200] scale-75">
      <Link to="/searchResults">
        <Button variant="default">Search</Button>
      </Link>
    </m.div>
  );
};

export default SearchBtn;
