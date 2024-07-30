// import React, { useState } from "react";
// import { isWithinInterval, parse } from "date-fns";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function DateRangeFilter({ data, setFilteredData, setDataVisibility }) {
// 	const [startDate, setStartDate] = useState(
// 		new Date(new Date().getFullYear(), new Date().getMonth(), 1)
// 	);
// 	const [endDate, setEndDate] = useState(new Date());

// 	const filterDataByDateRange = () => {
// 		setDataVisibility(true);
// 		if (startDate && endDate) {
// 			const parsedStartDate = startDate.setHours(0, 0, 0, 0);
// 			const parsedEndDate = endDate.setHours(23, 59, 59, 999);

// 			const filtered = data.filter((item) => {
// 				const itemDate = parse(item.createdDate, "MM/dd/yyyy", new Date());
// 				return isWithinInterval(itemDate, {
// 					start: parsedStartDate,
// 					end: parsedEndDate,
// 				});
// 			});
// 			setFilteredData(filtered);
// 		}
// 		if (!startDate && !endDate) {
// 			setFilteredData(data);
// 		}
// 	};

// 	return (
// 		<div className="flex gap-4 justify-center items-center flex-col mb-2 p-4 bg-[#EAEAEA] border rounded-md md:flex-row">
// 			<DatePicker
// 				selected={startDate}
// 				onChange={(date) => setStartDate(date)}
// 				selectsStart
// 				dateFormat="dd/MM/yyyy"
// 				startDate={startDate}
// 				endDate={endDate}
// 				className="input input-sm bg-white input-bordered"
// 				placeholderText="start date"
// 				showMonthDropdown
// 				showYearDropdown
// 				dropdownMode="select"
// 			/>
// 			<DatePicker
// 				selected={endDate}
// 				onChange={(date) => setEndDate(date)}
// 				selectsEnd
// 				dateFormat="dd/MM/yyyy"
// 				startDate={startDate}
// 				endDate={endDate}
// 				minDate={startDate}
// 				className="input input-sm bg-white input-bordered"
// 				placeholderText="end date"
// 				showMonthDropdown
// 				showYearDropdown
// 				dropdownMode="select"
// 			/>
// 			<button
// 				className="btn btn-sm btn-primary text-white"
// 				onClick={filterDataByDateRange}
// 			>
// 				Search
// 			</button>
// 		</div>
// 	);
// }

// export default DateRangeFilter;
