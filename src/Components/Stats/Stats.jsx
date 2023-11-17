import React from "react";

function Stats() {
	return (
		<div className="my-10">
			<h3 className="text-2xl font-bold text-orange-600 font-f1">Undoubtedly, <br/> You will witness a magnificent event with !</h3>
            <div className="sm:flex justify-center">
                <div className="sm:w-[20rem] flex flex-col border-4 border-[#202235] m-6 py-4 rounded-md items-center justify-center text-center">
                    <h2 className="font-bold text-2xl text-white bg-green-400 rounded-full w-[10rem] p-4">4+ Hours</h2>
                    <h3 className="mt-4 font-bold text-xl text-orange-600">of Incredible Performance</h3>
                </div>
                <div className="sm:w-[20rem] flex flex-col border-4 border-[#202235] m-6 py-4 rounded-md items-center justify-center text-center">
                    <h2 className="font-bold text-2xl text-white bg-indigo-400 rounded-full w-[10rem] p-4">500+</h2>
                    <h3 className="mt-4 font-bold text-xl text-orange-600">Loving Audience</h3>
                </div>
            </div>
		</div>
	);
}

export default Stats;
