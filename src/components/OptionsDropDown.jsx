import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const StaggeredDropDown = ({values, state, setState}) => {
const [open, setOpen] = useState(false);

return (
    <div className="flex items-center justify-center w-full">
        <motion.div animate={open ? "open" : "closed"} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-[190px] font-[Poppins] rounded-[5px] justify-between items-center gap-2 p-[10px] text-[#121212] bg-[#F9F9F9] border-[#121212] border-[1px] hover:bg-[#FFF] hover:text-tprimary transition-all"
            >
                {state ? state : 'Any'}
                <motion.span variants={iconVariants}>
                    <FiChevronDown />
                </motion.span>
            </button>

            <motion.ul
                initial={wrapperVariants.closed}
                variants={wrapperVariants}
                style={{ originY: "top", translateX: "-50%" }}
                className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl z-10 absolute top-[120%] left-[50%] w-48"
            >
                {values.map((value, index) => (
                    <Option key={index} setOpen={setOpen} setState={setState} text={value} />
                ))}
            </motion.ul>
        </motion.div>
    </div>
);
};

const Option = ({ text, setOpen, setState }) => {
    const handleClick = () => {
        if (text === 'Any') {
            setState('')
        } else {
            setState(text)
        }
        setOpen(false);
    };
return (
        <motion.li
            variants={itemVariants}
            onClick={() => handleClick(text)}
            className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-[#EFEEF1] text-tsecondary transition-colors cursor-pointer"
        >
            <span>{text}</span>
        </motion.li>
    );
};

export default StaggeredDropDown;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
        when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
        when: "afterChildren",
        },
    },
};
