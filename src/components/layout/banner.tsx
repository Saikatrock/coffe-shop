

import { InfiniteRibbon } from "@/components/ui/component";

function InfiniteRibbonPreview() {
    return (
        <>
            <InfiniteRibbon className="absolute" duration={42} rotation={5}>
                ha ha ha ha ha
            </InfiniteRibbon>
            {/* <InfiniteRibbon duration={42} reverse={true} rotation={-5}>
                ha ha ha ha ha
            </InfiniteRibbon> */}
        </>
    );
}

export default InfiniteRibbonPreview