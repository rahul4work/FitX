import React from 'react'

const Profile = () => {
    return (
        <div class="flex justify-center">
            <div class="flex flex-row justify-between bg-[#daeef5] w-4/5 h-[250px] rounded-4xl m-2 relative overflow-hidden">
                    <div id='text-div' class="ml-12 mt-10">
                        <h1 class="font-lg text-6xl">
                            Hi,&nbsp;
                            <span class="font-extrabold text-6xl">Anurag</span>
                        </h1>
                        <p class="text-xl ml-1 mt-4 text-gray-700">
                            Plan your days to be more productive,<br />
                            you have 3 daily tasks to complete today.
                        </p>
                    </div>
                    <div id='image-div' class="absolute -right-2.5 -bottom-5">
                        <img src="https://s3.ap-south-1.amazonaws.com/appsinvo.website/Technologies/Wellness/png/23_Welness_app_03.png" 
                             alt="workout_image"
                             class="w-[300px] drop-shadow-xl" 
                        />
                    </div>
            </div>
        </div>
    )
}

export default Profile