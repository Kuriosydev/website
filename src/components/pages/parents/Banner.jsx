import ImageBanner from "@/components/banners/ImageBanner";

export default function Banner() {
    return (
        <>
            <ImageBanner
                col={1}
                bgColor={"bg-[#FFCE49] dark:bg-[#001032]"}
                description="Cheer your child on as they dive into learning with Kurixel!"
                heading="Parents Bring the Magic to Life"
            />
        </>
    )
}
