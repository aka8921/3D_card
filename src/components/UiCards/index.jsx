import avatarCircles from '../../assets/avatar_circles.png'
// import style from './style.module.css'
import './style.css'

const UiCard = ({className, style, children}) => {
    return (
        <div className={`relative group`}>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div className="pointer_tracker"></div>
            <div style={style}  className={`${className} w-[200px] h-[200px] card_parent bg-blue-300 rounded-2xl overflow-hidden`}>
                {children}
            </div>
            
        </div>
    )
}

export const UiCards = () => {
    return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <UiCard style={{background: "linear-gradient(270deg, #191919 0%, #808284 50.19%, #47403A 100%)"}}/>
        <UiCard style={{background: "linear-gradient(180deg, #ECD8C7 0%, #83664D 100%)"}}/>
        <UiCard style={{background: "linear-gradient(180deg, #806350 0%, #251910 100%)"}}/>
        <UiCard style={{background: "radial-gradient(68.05% 38.78% at 50% 100%, #554E48 0%, #99B6CA 100%)"}}/>
        <UiCard className="bg-[#09090A] flex flex-col items-stretch justify-end overflow-visible">
            <div className="width-full h-[55%]">
                <img src={avatarCircles} className="w-full h-full object-top" alt="" />
            </div>
            <div className="card_meta absolute w-full h-full top-0 py-2 px-2 flex flex-col items-start justify-start">
                <div className="border-[1px] py-[2px] px-2 rounded-full border-[#3F3C3C] text-[#9A9898] text-[8px]">Photos by Unsplash</div>
                <div className="text-white text-[14px] font-medium flex flex-col align-start mt-[4px]">
                    <span>The original shots</span>
                    <span>from all 34 creators.</span>
                </div>
                <div className="w-[35px] transition-all group-hover:rotate-90 h-[35px] bg-white rounded-full mt-auto self-end m-1 flex items-center justify-center">
                    <svg className='w-3 h-3' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 8H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </UiCard>
        <UiCard style={{background: "linear-gradient(180deg, #ECD8C7 0%, #83664D 100%)"}} />
        <UiCard style={{background: "linear-gradient(270deg, #191919 0%, #808284 50.19%, #47403A 100%)"}} />
        <UiCard style={{background: "radial-gradient(68.05% 38.78% at 50% 100%, #554E48 0%, #99B6CA 100%)"}}/>
        <UiCard />
    </div>
    )
}