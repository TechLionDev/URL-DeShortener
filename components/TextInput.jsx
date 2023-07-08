const TextInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter a shortened URL"
            className="px-4 py-2 rounded-md border-2 border-gray-300 w-full bg-white text-gray-800 hover:border-b-2 hover:border-[#0088ff] transition-all duration-75 focus:border-[#0088ff]"
        />
    );
};

export default TextInput;