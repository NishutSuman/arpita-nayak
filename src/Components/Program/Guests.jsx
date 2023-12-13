import React from "react";
import "./Schedule.css";

function Guest() {
	return (
		<div className="pb-10">
			<h3 className="font-bold text-2xl text-blue-700 bg-blue-300 rounded-lg w-full p-4 mt-10 ">
				{" "}
				Dignitaries
			</h3>
			<table className="mt-10 mx-auto font-f1 border-separate border-spacing-x-5 border-spacing-y-5">
				<thead className="  text-red-700 bg-red-300 ">
					{/* <tr>
						<th className="tshadow rounded-md sm:text-2xl">First Half</th>
						<th className="tshadow rounded-md sm:text-2xl">Second Half</th>
					</tr> */}
				</thead>
				<tbody>
					<tr>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Chief Guest
                                <br/>
                                SHRI DILIP ROUTRAY, IAS
								<br />
								<span className="font-bold text-orange-600">Director, Odia Language Literature & Culture Department, Govt. of Odisha</span>
								<br />
								<span className="font-bold text-orange-600">Director, Directorate for Odia Diaspora named Odisha Parivar</span>
							</h4>
						</td>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
                            Guest of Honour:
                                <br/>
                                Guru Shri Gobinda Chandra Pal
								<br />
								<span className="font-bold text-orange-600">Presidential Awardee in Gotipua and Odissi Dance</span>
								<br />
								<span className="font-bold text-orange-600">Sangeet Natak Akademi Amrit Awardee</span>
							</h4>
						</td>
						
					</tr>
					<tr>
                    <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
                            Special Honours:
                                <br/>
                                Padma Shri Guru Aruna Mohanty
								<br />
								<span className="font-bold text-orange-600">Secretary of the Orissa (Odisha) Dance Academy</span>
								<br />
								<span className="font-bold text-orange-600">President Sangeet Natak Academy</span>
							</h4>
						</td>
                        <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
                            
                                Padma Shri Guru Ileana Citaristi
								<br />
								<span className="font-bold text-orange-600">Odissi and Chhau dancer</span>
								<br />
							</h4>
						</td>
					</tr>
					<tr>
                    <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
                            
                                
                                Vidushi Sujata Mohapatra
								<br />
								<span className="font-bold text-orange-600">Director of Gurukeerti</span>
								<br />
								
							</h4>
						</td>
                       
                    <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
                            
                                
                                Dr. Sangeeta Gosain
								<br />
								<span className="font-bold text-orange-600">Vocalist</span><br/>
								<span className="font-bold text-orange-600">Retd. Professor, Utkal University of Culture & <br/>Director GKCM Odissi Research Center, Bhubaneswar</span>
								<br />
								
							</h4>
						</td>
                       
					</tr>
					
				</tbody>
			</table>
		</div>
	);
}

export default Guest;
