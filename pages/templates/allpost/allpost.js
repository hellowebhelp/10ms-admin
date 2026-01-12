/**
 * All course showing..
 */
import { useEffect, useState } from "react" 
import Style from './style.module.css';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const All_course = () => {

    // getCourse fatch....
    const [getcoursedata, setGetcoursedata] = useState("");
    useEffect(() => {
        async function fatchGetData() {
            const res = await fetch("http://localhost:5000/allPost");
            const json = await res.json();
            setGetcoursedata(json);
        }
        fatchGetData();
    }, []);

    return (
        <>
            {/*  cart start*/}
            <div className={Style.card__topl_padding_09s}>
                <div className="widget__ground__098">
                    <div className="p-4">
                        <Table>
                            <TableCaption>Courses List</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[30%]">Title</TableHead>
                                    <TableHead className="w-[30%]">Id</TableHead>
                                    <TableHead className="text-left w-[30%]">Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {getcoursedata?.course?.map((Display) => (
                                    <TableRow key={Display.id}>
                                        <TableCell className="font-medium">{Display.title}</TableCell>
                                        <TableCell>{Display.id}</TableCell>
                                        <TableCell className="text-left">
                                            {Display.description?.split(" ").slice(0, 15).join(" ") + (Display.description?.split(" ").length > 15 ? "..." : "")}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            {/* <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                            </TableFooter> */}
                        </Table>
                    </div>
                </div>
            </div>
            {/* cart end*/}

        </>
    )
};

export default All_course;