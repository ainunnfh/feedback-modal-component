import React, { useState } from "react";
interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFeedback: React.FC<IProps> = ({ setOpenModal }) => {
  const [rating, setRating] = useState(0);
  const handleSubmit = () => {
    alert("Thank you for your feedback!");
  };

  const handleRate = (rating: number) => setRating(rating);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="mx-5 py-5 bg-[#1A1832] rounded-md items-center">
        <div className="flex justify-end ">
          <button onClick={() => setOpenModal(false)} className="mr-3 mb-2">
            x
          </button>
        </div>
        <div className="text-center font-semibold text-white">
          <p className="sm:text-xl md:text-2xl p-2">
            How likely are you to recommended FrontendPro to someone you know?
          </p>
        </div>

        <div className="flex sm: flex-wrap gap-3 justify-center mt-10 ">
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handleRate(i + 1)}
              className={`${
                rating === i + 1
                  ? "border-white border p-2 bg-white text-black rounded-sm"
                  : "border-white border p-2 hover:bg-slate-50 hover:text-black hover: cursor-pointer rounded-sm"
              }`}
            >
              <div className="text-center">{i + 1}</div>
            </button>
          ))}
        </div>

        <div className="flex justify-around mt-10">
          <button
            onClick={() => setOpenModal(false)}
            className="border border-[#7A58F4] hover:bg-[#7A58F4] p-2 rounded-md hover:cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="border border-[#7A58F4] hover:bg-[#7A58F4] p-2 rounded-md hover:cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFeedback;
