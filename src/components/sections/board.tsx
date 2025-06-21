import {ypeBoard, YPEBoardMember} from "@/data/boardData";
import {BoardCard} from "@/components/other/boardCard";

export default function Board() {
    return (
        <section className="py-6 px-6 bg-[#BACAD3]" id='board'>
            <div className={"max-w-responsive flex flex-col gap-4 md:p-8 flex flex-col"}>

                <h2 className="section-title text-left md:text-center">BOARD</h2>
                <p className={"text-gray-700 text-left sub-text text-lg"}>Meet our Board – a dedicated team of young
                    activists
                    coordinating the efforts of Young Pirates of Europe
                    and supporting member organizations across the continent.</p>
                <>
                    <div
                        className="grid grid-cols-1 [@media(min-width:520px)_and_(max-width:767px)]:grid-cols-2 md:grid-cols-3 xl-gap-4 xl:grid-cols-4 justify-items-center">
                        {Object.entries(ypeBoard)
                            .map(([key, member]: [string, YPEBoardMember], index: number) => (
                                <BoardCard key={index} member={member}/>
                            ))}
                    </div>
                </>

            </div>
        </section>
    )
}