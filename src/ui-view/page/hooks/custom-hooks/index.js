import { useWindowSize } from "./use-windowsize";

const PageCustomHooks = () => {
    const { width, height } = useWindowSize()
    return (
        <>
            {width >= 324 && <div>{width}</div>}
        </>
    )
}
export default PageCustomHooks;