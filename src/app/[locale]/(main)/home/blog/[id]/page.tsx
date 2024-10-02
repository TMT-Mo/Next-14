import { LeafTitle } from "@/components/LeafTitle";
import dayjs from "dayjs";
import XShareBtn from "@/icons/x_share.svg?icon";
import FBBtn from "@/icons/fb_share.svg?icon";
import { vietnamDataList } from "../../sections/VietNamData/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "@/app/[locale]/(main)/home/style.module.scss";
import { BlogCarousel } from "../BlogCarousel";
export default async function BlogPage({ params }: { params: { id: number } }) {
    const { id } = params;

    // Fetch the blog data based on the slug
    const blogData = vietnamDataList.find((item) => item.id == id);
    // const blogData = await fetchBlogData(slug);

    // Handle 404 if no blog post is found
    if (!blogData) {
        notFound();
    }

    const { title, brief, createdAt, description, image } = blogData;

    return (
        <main>
            <div className="flex flex-col gap-6 container mx-auto  justify-center my-14 px-4 lg:px-0 lg:flex-row lg:my-44">
                <div className="flex flex-col gap-6 max-w-[670px] w-full">
                    <LeafTitle>{title}</LeafTitle>
                    <div className="flex flex-col justify-between items-center w-full gap-[22px] lg:flex-row lg:gap-0">
                        <span className="text-[18px] text-[#777777]">
                            {dayjs.unix(createdAt).format("dddd, DD MMMM YYYY - HH:mm")}
                        </span>
                        <div className="flex gap-4">
                            <XShareBtn />
                            <FBBtn />
                        </div>
                    </div>
                    <div className="text-center w-full bg-secondary text-white px-[51px] py-4">
                        {brief}
                    </div>
                    <Image
                        alt=""
                        src={image}
                        style={{ width: "100%", height: "auto" }}
                        quality={100}
                    />
                    <div className="text-[#868681]">{description}</div>
                </div>
                <div
                    className={` flex-col max-w-[452px] h-auto w-full gap-8 pt-14 pr-12 hidden lg:flex ${styles.multiBlog}`}
                >
                    {vietnamDataList.map(({ id, title, image }) => (
                        <div key={id} className="flex gap-4">
                            <Image alt={title} src={image} style={{ width: 95, height: 95 }} />
                            <span>{title}</span>
                        </div>
                    ))}
                </div>
                <div className="block lg:hidden"><BlogCarousel /></div>
            </div>
        </main>
    );
}
