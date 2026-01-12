import Overview from './1/overview';
import AddCourse from './newpost/add-course';
import AllPost from './allpost/allpost';
import Categories from './Categories/newcat';
import Style from './style.module.css';
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCardHeading } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";



export default function DashboardLayout() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [openGroup, setOpenGroup] = useState(null);

    const handleGroupToggle = (group) => {
        setOpenGroup(openGroup === group ? null : group);
    };

    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <div className="p-6 text-lg">
                    <Overview />
                </div>;
            case "all-courses":
                return <div className="p-6 text-lg">
                    <AllPost />
                </div>;
            case "add-course":
                return <div className="p-6 text-lg ">
                    <AddCourse />
                </div>;
            case "categories":
                return <div className="p-6 text-lg">
                    <Categories />
                </div>;
            case "tags":
                return <div className="p-6 text-lg">Tags Content</div>;
            default:
                return <div className="p-6 text-lg">Select a menu</div>;
        }
    };

    return (
        <section className={Style.dashboard_main_ground__09}>
            <div className="flex h-screen grid__gap__9dsml">
                {/* Sidebar */}
                <aside className="flex flex-col w-64 p-4 space-y-2 left__9d0knplo">
                    <h2 className="mb-4 text-xl color__09kp title__908__mlp">10MS Admin</h2>

                    {/* Normal button item */}
                    <button
                        onClick={() => setActiveTab("dashboard")}
                        className={`flex items-center p-2 rounded-lg text-left w-full hover:bg-gray-600 color__09kp transition ${activeTab === "dashboard" ? "color_hover__09kp " : ""
                            }`}
                    >
                        {/* <BsBoxArrowInRight className='icon__7frjo' size={22}/> */}
                        <BsCardHeading className='icon__7frjo' size={19} /> Dashboard
                    </button>

                    {/* Group Item */}
                    <div>
                        <button
                            onClick={() => handleGroupToggle("courses")}
                            className="flex items-center justify-between w-full p-2 rounded-lg color__09kp"
                        >
                            <span className="flex justify-between font-medium"> <SiSololearn className='icon__7frjo mo_0d98_9dml' size={19} /> Courses</span>
                            {openGroup === "courses" ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                        </button>

                        {openGroup === "courses" && (
                            <div className="mt-2 ml-4 space-y-2 color__09kp">
                                <button
                                    onClick={() => setActiveTab("all-courses")}
                                    className={`block w-full text-left p-2 rounded-md hover:bg-gray-600 ${activeTab === "all-courses" ? "color_hover__09kp" : ""
                                        }`}
                                >
                                    All Courses
                                </button>

                                <button
                                    onClick={() => setActiveTab("add-course")}
                                    className={`block w-full text-left p-2 rounded-md hover:bg-gray-600 ${activeTab === "add-course" ? "color_hover__09kp" : ""
                                        }`}
                                >
                                    Add Course
                                </button>

                                <button
                                    onClick={() => setActiveTab("categories")}
                                    className={`block w-full text-left p-2 rounded-md hover:bg-gray-600 ${activeTab === "categories" ? "color_hover__09kp" : ""
                                        }`}
                                >
                                    Categories
                                </button>

                                <button
                                    onClick={() => setActiveTab("tags")}
                                    className={`block w-full text-left p-2 rounded-md hover:bg-gray-600 ${activeTab === "tags" ? "color_hover__09kp" : ""
                                        }`}
                                >
                                    Tags
                                </button>
                            </div>
                        )}
                    </div>


                    {/* item */}
                    <button
                        onClick={() => setActiveTab("analytics")}
                        className={`flex items-center p-2 rounded-lg text-left w-full hover:bg-gray-600 color__09kp transition ${activeTab === "analytics" ? "color_hover__09kp " : ""
                            }`}
                    >
                        {/* <BsBoxArrowInRight className='icon__7frjo' size={22}/> */}
                        <MdOutlineAnalytics className='icon__7frjo' size={19} /> Analytics
                    </button>


                    {/* Users item */}
                    <button
                        onClick={() => setActiveTab("users")}
                        className={`flex items-center p-2 rounded-lg text-left w-full hover:bg-gray-600 color__09kp transition ${activeTab === "users" ? "color_hover__09kp " : ""
                            }`}
                    >
                        {/* <BsBoxArrowInRight className='icon__7frjo' size={22}/> */}
                        <FaUser className='icon__7frjo' size={19} /> Users
                    </button>


                    {/* Settings item */}
                    <button
                        onClick={() => setActiveTab("settings")}
                        className={`flex items-center p-2 rounded-lg text-left w-full hover:bg-gray-600 color__09kp transition ${activeTab === "settings" ? "color_hover__09kp " : ""
                            }`}
                    >
                        {/* <BsBoxArrowInRight className='icon__7frjo' size={22}/> */}
                        <IoSettingsOutline className='icon__7frjo' size={19} /> Settings
                    </button>


                </aside>

                {/* Right side content */}
                <main className="flex-1 shadow-inner bg__09opl_ground">{renderContent()}</main>
            </div>
        </section>
    );
}
