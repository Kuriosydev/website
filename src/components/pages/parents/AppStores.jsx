import StoreButton from "@/components/buttons/StoreButton";

export default function AppStores() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden pb-8 md:py-10">
                <StoreButton />
            </div>
        </section>
    )
}
