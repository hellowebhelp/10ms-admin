import { SiSololearn } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";

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

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export default function Overview() {
    return (
        <>
            <div className="title__orpu_908">
                <div className="part__9s8nl">Dashboard</div>
                {/* <div className="part__9hpl"> </div> */}
            </div>
            <div className="overviews__ground__0s8">
                <div className="part__9ds87">
                    {/*  cart start*/}
                    <div className="widget__ground__098">
                        <div className="p-4">
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>

                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[120px]">Invoice</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Payment Method</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {invoices.map((invoice) => (
                                        <TableRow key={invoice.invoice}>
                                            <TableCell className="font-medium">
                                                {invoice.invoice}
                                            </TableCell>
                                            <TableCell>{invoice.paymentStatus}</TableCell>
                                            <TableCell>{invoice.paymentMethod}</TableCell>
                                            <TableCell className="text-right">
                                                {invoice.totalAmount}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>

                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={3}>Total</TableCell>
                                        <TableCell className="text-right">$2,500.00</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </div>
                    {/* cart end*/}

                    {/*  cart start*/}
                    
                    {/* cart end*/}
                </div>
                <div className="part__9ds87">
                    <div className="widget__ground__098">

                        <div className="container__0sd8hkp">
                            <div className="title__odpi"> Overview</div>
                            <div className="list__8smsplog"><PiStudentDuotone className='icon__7frjo mo_0d98_9dml' size={16} /> 40 Students</div>
                            <div className="list__8smsplog"><GiTeacher className='icon__7frjo mo_0d98_9dml' size={16} />13 Teacher</div>
                            <div className="list__8smsplog"> <SiSololearn className='icon__7frjo mo_0d98_9dml' size={16} /> 27 Courses</div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
