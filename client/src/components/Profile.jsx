import React from 'react'
import useTypingEffect from "./useTypingEffect";

const Profile = () => {
    const text = useTypingEffect([
        "Kickstart your fitness journey today.",
        "Set your goals, track your progress, and stay motivated!"
    ]);

    return (
        <div class="flex justify-center px-4">
            <div class="flex flex-col md:flex-row justify-between items-center bg-[#daeef5] w-full sm:w-4/5 h-auto md:h-[250px] rounded-3xl m-2 relative overflow-hidden px-6 md:px-12 py-6">
                <div id='text-div' class="ext-center md:text-left">
                    <h1 class="text-4xl md:text-6xl font-lg">
                        {/* Hi,&nbsp; */}
                        <span class="font-extrabold text-4xl md:text-6xl">Welcome to FitX</span>
                    </h1>
                    <p className="text-lg md:text-xl mt-4 text-gray-700">
                        {text}
                        <span className="animate-blink">|</span>  {/* Blinking Cursor */}
                    </p>
                </div>
                <div id='image-div' class="mt-6 md:mt-0 md:absolute md:-right-2.5 md:-bottom-5 flex justify-center">
                    <img src="https://s3.ap-south-1.amazonaws.com/appsinvo.website/Technologies/Wellness/png/23_Welness_app_03.png"
                        alt="workout_image"
                        class="w-[200px] md:w-[300px] drop-shadow-xl transition-all duration-1000 ease-in-out transform hover:scale-110 hover:rotate-[360deg]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile