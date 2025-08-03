import {YPEBoardMember} from "@/data/boardData";
import Image from 'next/image';

interface BoardCardProps {
    member: YPEBoardMember;
}

export function BoardCard({member}: BoardCardProps) {
    return (
        <article className="board-card-style">

            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${member.image}`}
                alt={member.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '12rem', height: '12rem' }}
                className="sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 object-cover mx-auto rounded-full mb-4"
            />

            <div className={"flex flex-col"}>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-gray-600 text-md">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.country}</p>
            </div>
        </article>
    );
}
