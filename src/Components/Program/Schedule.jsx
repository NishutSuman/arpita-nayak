import React from "react";
import "./Schedule.css";

function Schedule() {
	return (
		<div className="pb-10">
			<h3 className="font-bold text-2xl text-blue-700 bg-blue-300 rounded-lg w-full p-4 mt-10 ">
				{" "}
				Repertoires
			</h3>
			<table className="mt-10 mx-auto font-f1 border-separate border-spacing-x-5 border-spacing-y-5">
				<thead className="  text-red-700 bg-red-300 ">
					<tr>
						<th className="tshadow rounded-md sm:text-2xl">First Half</th>
						<th className="tshadow rounded-md sm:text-2xl">Second Half</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Pushpanjali and Ganesh Shloka
								<br />
								<span className="font-bold text-orange-600">Ragam:</span> Jog
								Ragam
								<br />
								<span className="font-bold text-orange-600">Thalam:</span> Adi
								Thalam
							</h4>
						</td>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Odia Bhajan
								<br />
								Nachanti Range Shree Hari
							</h4>
						</td>
					</tr>
					<tr>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Alarippu
								<br />
								
								<span className="font-bold text-orange-600">Thalam:</span> Sankeernam
							</h4>
						</td>
                        <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Natanam Adinar - Keerthanam
								<br />
								<span className="font-bold text-orange-600">Ragam:</span> Vasantha
								<br />
								<span className="font-bold text-orange-600">Thalam:</span> Ata
							</h4>
						</td>
					</tr>
					<tr>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Jatiswaram
								<br />
								<span className="font-bold text-orange-600">Ragam:</span> Bhairavi
								<br />
								<span className="font-bold text-orange-600">Thalam:</span> Rupaka
							</h4>
						</td>
                        <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Chandana Charchitha - Ashtapadi
								<br />
								<span className="font-bold text-orange-600">Ragam:</span> Sumanesaranjani
								<br />
								<span className="font-bold text-orange-600">Thalam:</span> Adi Thalam
							</h4>
						</td>
					</tr>
					<tr>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Devi Thaaye Shabdam
								<br />
								<span className="font-bold text-orange-600">Ragam:</span> Kalyani
								<br />
								<span className="font-bold text-orange-600">Thalam:</span> Misra Chapu
							</h4>
						</td>
                        <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Thillana
								<br />
								<span className="font-bold text-orange-600">Ragam:</span> Mandu
								<br />
								<span className="font-bold text-orange-600">Thalam:</span> Adi Thalam
							</h4>
						</td>
					</tr>
					<tr>
						<td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Kamalanaatho
								<br />
								<span className="font-bold text-orange-600">Ragam:</span> Reethigowlae
								<br />
								<span className="font-bold text-orange-600">Thalam:</span> Adi Thalam
							</h4>
						</td>
                        <td className="bg-lime-200 p-5 tshadow rounded-lg">
							<h4 className="sm:text-xl font-bold">
								Mangalam
								
							</h4>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Schedule;
