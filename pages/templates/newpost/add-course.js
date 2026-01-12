/**
 * Create Courses..
 */
import Style from './style.module.css';
import { useState, useRef, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// 
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const Add_course = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [classValue, setClassValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/post-create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                }),
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {
                alert("Data saved successfully! ID: " + data.id);
                // clear
                setTitle("");
                setDescription("");
                
            } else {
                alert("Failed: " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    // image upload
    const [preview, setPreview] = useState(null);
    const inputRef = useRef();

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    function handleFileChange(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        if (preview) URL.revokeObjectURL(preview);
        setPreview(URL.createObjectURL(file));
    }

    function triggerInput() {
        inputRef.current?.click();
    }

    function removeImage() {
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null);
        if (inputRef.current) inputRef.current.value = "";
    }

    // upload images end

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={Style.course_create__ground}>
                    <div className={Style.part__9s08}>
                        <div className="w-full max-w-4xl mb-6">
                            <div className={Style.card__topl_padding_09s}>
                                <h2>Add Course </h2>
                            </div>
                            <div className={Style.card__topl_padding_09s}>
                                {/* <FieldLegend>Add Course</FieldLegend> */}

                                {/* <form> */}
                                <FieldSet>
                                    <Input id="title" placeholder="Course Title" type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />

                                    <Textarea
                                        id="description"
                                        placeholder="Course Description"
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        className="min-h-[200px] resize-none sm:min-w-[300px]"
                                    />
                                    {/* <Button type="submit" className="resize-none sm:max-w-[120px]">Submit</Button> */}

                                </FieldSet>
                                {/* </form> */}
                            </div>
                        </div>

                        <div className={Style.card__topl_padding_09s}>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                                defaultValue="item-1" >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Product Information 1</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Our flagship product combines cutting-edge technology with sleek
                                            design. Built with premium materials, it offers unparalleled
                                            performance and reliability.
                                        </p>
                                        <p>
                                            Key features include advanced processing capabilities, and an
                                            intuitive user interface designed for both beginners and experts.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Shipping Details</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            We offer worldwide shipping through trusted courier partners.
                                            Standard delivery takes 3-5 business days, while express shipping
                                            ensures delivery within 1-2 business days.
                                        </p>
                                        <p>
                                            All orders are carefully packaged and fully insured. Track your
                                            shipment in real-time through our dedicated tracking portal.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Return Policy</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            We stand behind our products with a comprehensive 30-day return
                                            policy. If you&apos;re not completely satisfied, simply return the
                                            item in its original condition.
                                        </p>
                                        <p>
                                            Our hassle-free return process includes free return shipping and
                                            full refunds processed within 48 hours of receiving the returned
                                            item.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className={Style.part__9s08}>
                        <div className={Style.card__topl_padding_09s}>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                                defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger><div className={Style.styprlo__ground_0p}>Status</div></AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <div className={Style.status__908__polk}>
                                            <li> <FaEye className={Style.icon__8s97} /> Visibility: <b>Publish</b> </li>
                                            <li> <FaCalendarAlt className={Style.icon__8s97} /> Date: <b>12.06.2025</b> </li>
                                            <li></li>
                                        </div>

                                        <Button type="submit" className="resize-none sm:max-w-[120px]" disabled={loading}>
                                            {loading ? "Submitting..." : "Publish"}
                                        </Button>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className={Style.card__topl_padding_09s}>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                                defaultValue="item-1" >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <div className={Style.styprlo__ground_0p}>Features Images</div>
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">

                                        <div>
                                            <div className="max-w-sm space-y-3">
                                                <input
                                                    ref={inputRef}
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />

                                                <div className="flex items-center gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={triggerInput}
                                                        className="px-4 py-2 text-white transition bg-gray-900 rounded-lg hover:bg-gray-800"
                                                    >
                                                        Choose image
                                                    </button>

                                                    {preview && (
                                                        <button
                                                            type="button"
                                                            onClick={removeImage}
                                                            className="px-3 py-1 text-sm border rounded-md"
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>

                                                {preview ? (
                                                    <img
                                                        src={preview}
                                                        alt="Preview"
                                                        className="w-full max-w-xs border rounded-md"
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center w-full h-40 max-w-xs text-sm text-gray-500 border border-dashed rounded-md">
                                                        No image selected
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className={Style.styprlo__ground_0p}>Categories</div>
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            We offer worldwide shipping through trusted courier partners.
                                            Standard delivery takes 3-5 business days, while express shipping
                                            ensures delivery within 1-2 business days.
                                        </p>
                                        <p>
                                            All orders are carefully packaged and fully insured. Track your
                                            shipment in real-time through our dedicated tracking portal.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Return Policy</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            We stand behind our products with a comprehensive 30-day return
                                            policy. If you&apos;re not completely satisfied, simply return the
                                            item in its original condition.
                                        </p>
                                        <p>
                                            Our hassle-free return process includes free return shipping and
                                            full refunds processed within 48 hours of receiving the returned
                                            item.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Add_course;