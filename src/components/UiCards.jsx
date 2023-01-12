import avatarCircles from '../assets/avatar_circles.png'

const UiCard = ({className, style, children}) => {
    return (
        <div style={style} className={`${className} bg-blue-300 w-[200px] h-[200px] rounded-2xl overflow-hidden`}>
            {children}
        </div>
    )
}

export const UiCards = () => {
    return (
    <div className="grid gap-3 grid-cols-3 grid-rows-3">
        <UiCard />
        <UiCard />
        <UiCard />
        <UiCard />
        <UiCard className="bg-[#09090A] relative flex flex-col items-stretch justify-end">
            <div className="width-full h-[55%]">
                <img src={avatarCircles} className="w-full h-full object-top" alt="" />
            </div>
            <div className="absolute w-full h-full top-0 py-2 px-2 flex flex-col items-start justify-start">
                <div className="border-[1px] py-[2px] px-2 rounded-full border-[#3F3C3C] text-[#9A9898] text-[8px]">Photos by Unsplash</div>
                <div className="text-white text-[14px] font-medium flex flex-col align-start mt-[4px]">
                    <span>The original shots</span>
                    <span>from all 34 creators.</span>
                </div>
                <div className="w-[35px] transition-all hover:rotate-180 h-[35px] bg-white rounded-full mt-auto self-end m-1 flex items-center justify-center">
                    <svg className='w-3 h-3' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 8H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </UiCard>
        <UiCard />
        <UiCard />
        <UiCard />
        <UiCard />
    </div>
    )
}