import { useEffect, useState } from "react"
import Style from "./style.module.css";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const All_Categories = () => {
    const [value, setValue] = useState("");
    const [catname, setCatname] = useState("");
    const [catslug, setCatslug] = useState("");
    const [catparent, setCatparent] = useState("");
    const [catdescription, setCatdescription] = useState("");
    const [loading, setLoading] = useState(false);

    // handleSubmit for cat post/create
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/post-categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    catname,
                    catslug,
                    // catparent,
                    catdescription

                }),
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {
                alert("Data saved successfully! ID: " + data.id);
                // clear
                setCatname("");
                setCatslug("");
                // setCatparent("");
                setCatdescription("");

            } else {
                alert("Failed: " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    }

    // getCategories fatch....
    const [getcatdata, setGetcatdata] = useState("");
    useEffect(() => {
        async function fatchGetData() {
            const res = await fetch("http://localhost:5000/getCategories");
            const json = await res.json();
            setGetcatdata(json);
        }
        fatchGetData();
    }, []);

    return (
        <>
            <div className={Style.title__908__opl}>
                <h2>Categories </h2>
            </div>
            <section className={Style.cat_ground__55lp}>
                <div className={Style.part__09kl}>
                    <div className={Style.card__topl_padding_09s}>

                        <form onSubmit={handleSubmit}>
                            <div className={Style.title__9dsmd}>Name</div>
                            <Input id="catname" placeholder="" value={catname}
                                onChange={(e) => setCatname(e.target.value)}
                                type="text" required />
                            <em className={Style.sub__908j}>The name is how it appears on your site.</em>

                            <div className={Style.title__9dsmd}>Slug</div>
                            <Input id="catslug" placeholder="" value={catslug}
                                onChange={(e) => setCatslug(e.target.value)} type="text" required />
                            <em className={Style.sub__908j}>
                                The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens
                            </em>

                            <div className={Style.title__9dsmd}>Parent Category</div>
                            <Select id="catparent"
                                value={value}
                                onValueChange={(val) => {
                                    if (val === "none") {
                                        setValue("") // clear selection
                                    } else {
                                        setValue(val)
                                    }
                                }}
                            >
                                <SelectTrigger className="w-[100%]">
                                    <SelectValue placeholder="None" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        {/* <SelectLabel>Select</SelectLabel> */}

                                        {/* Blank option */}
                                        <SelectItem value="none">-- None --</SelectItem>

                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <em className={Style.sub__908j}>
                                Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.
                            </em>

                            <div className={Style.title__9dsmd}>Description</div>
                            <Textarea
                                id="catdescription"
                                placeholder=""
                                type="text" value={catdescription}
                                onChange={(e) => setCatdescription(e.target.value)}
                                required
                                className="min-h-[200px] resize-none sm:min-w-[100%]"
                            />
                            <em className={Style.sub__908j}>
                                The description is not prominent by default; however, some themes may show it.
                            </em>

                            <div className={Style.submit__908_ground}>
                                <Button type="submit" className="resize-none sm:max-w-[120px]" disabled={loading}>
                                    {loading ? "Submitting..." : "Publish"}
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>
                <div className={Style.part__09kl}>
                    <div className={Style.card__topl_padding_09s}>
                        <Table>
                            <TableCaption>Categories List</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[30%]">Name</TableHead>
                                    <TableHead className="w-[30%]">Slug</TableHead>
                                    <TableHead className="text-center w-[30%]">Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {getcatdata?.users?.map((Display) => (
                                    <TableRow key={Display.id}>
                                        <TableCell className="font-medium">{Display.catname}</TableCell>
                                        <TableCell>{Display.catslug}</TableCell>
                                        <TableCell className="text-center">{Display.catdescription}</TableCell>
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
            </section>
        </>
    )
}

export default All_Categories;