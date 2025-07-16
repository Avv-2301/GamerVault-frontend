const SortDropdown = () => (
  <div className="flex items-center gap-2">
    <label className="text-lg font-bold">Sort by : </label>
    <select className="bg-gray-800 text-white p-2 rounded-lg text-md font-semibold">
      <option>Name</option>
      <option>Hours Played</option>
      <option>Progress</option>
    </select>
  </div>
);

export default SortDropdown;
