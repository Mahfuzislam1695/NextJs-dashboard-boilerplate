
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
     <div>this is other navbar</div>
      <div className="mt-20">{children}</div>
    </div>
  );
}

export default layout;
